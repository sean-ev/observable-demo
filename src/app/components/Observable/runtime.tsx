///<reference path="./types.d.ts" />
import React, { useContext, useState, useEffect } from 'react';
import { Runtime, Module, Define } from '@observablehq/runtime';
import {
  Optional,
  pending,
  isPending,
  fulfilled,
  rejected,
  isRejected,
} from './optional';
import __import__ from './import-module';

const RuntimeContext = React.createContext<Runtime | null>(null);
const NotebookContext = React.createContext<Optional<Module, any> | null>(null);

/**
 * Provides a shared Observable runtime to all of its children
 */
export function RuntimeProvider({ children }: { children?: React.ReactNode }) {
  //const runtimeRef = useRef<Runtime>(null)
  //if (!runtimeRef.current) runtimeRef.current = new Runtime()

  const runtimeRef = new Runtime();

  useEffect(() => {
    return () => {
      runtimeRef && runtimeRef.dispose();
    };
  }, [runtimeRef]);

  return <RuntimeContext.Provider value={runtimeRef} children={children} />;
}
/**
 * Get an instance of the Observable runtime.
 */
export const useRuntime = () =>
  useAvailableContext(
    RuntimeContext,
    '`useRuntime` must be called within the <RuntimeProvider /> component',
  );

/**
 * Provides an instance of an Observable notebook to all of its children
 */
export function NotebookProvider({
  url,
  children,
}: {
  /** The URL to the notebook JS file to import. Example: https://api.observablehq.com/@tmcw/hello-world.js?v=3 */
  url: string;
  children?: React.ReactNode;
}) {
  const runtime = useRuntime();
  const [state, setState] = useState<Optional<Module, any>>(pending);

  useEffect(() => {
    setState(pending);
    let abort = false;
    __import__(url)
      .then((exports: { default: Define }) => {
        if (abort) return;
        if (exports.default && typeof exports.default === 'function') {
          setState(fulfilled(runtime.module(exports.default)));
        } else {
          throw new Error(
            `Unexpected module ${url} with exports ${Object.keys(exports).join(
              ', ',
            )}`,
          );
        }
      })
      .catch(error => setState(rejected(error)));
    return () => {
      abort = true;
    };
  }, [url, runtime]);

  return <NotebookContext.Provider value={state} children={children} />;
}

export function useModule() {
  const context = useAvailableContext(
    NotebookContext,
    '`useVariable` must be called within the <NotebookProvider /> component.',
  );

  if (isRejected(context)) throw context.error;
  if (isPending(context)) return null;
  return context.value;
}

export function useVariable<T>(name: string): [null, true] | [T, false] {
  const module = useModule();
  const [state, setState] = useState<Optional<T, any>>(pending);

  useEffect(() => {
    if (module) {
      let variable = module
        .variable<T>({
          pending: () => setState(pending),
          fulfilled: value => setState(fulfilled(value)),
          rejected: error => setState(rejected(error)),
        })
        .define([name], value => value);
      return () => {
        variable.delete();
      };
    } else {
      setState(pending);
    }
  }, [name, module]);

  if (isRejected(state)) throw state.error;
  if (isPending(state)) return [null, true];
  return [state.value, false];
}
export function useValue<T>(name: string): T | null {
  return useVariable<T>(name)[0];
}

function useAvailableContext<T>(
  context: React.Context<T | null>,
  message: string,
): T {
  const value = useContext(context);
  if (value == null) throw new Error(message);
  return value;
}
