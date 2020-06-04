declare module '@observablehq/runtime' {
  export type ObserverFactory = (name: string) => Observer;
  export type Define = (runtime: Runtime, observer: ObserverFactory) => Module;

  export class Runtime {
    constructor(builtins?: object, global?: object);

    module(): Module;
    module(define: Define): Module;
    module(define: Define, observer: (name: string) => ObserverFactory): Module;

    dispose(): void;
  }

  export class Module {
    private constructor();

    variable<T = any, TError = any>(
      observer?: Observer<T, TError>,
    ): Variable<T>;

    derive(specifiers: Specifier[]): Module;

    define<T>(definition: () => T): Variable<T>;
    define<T>(
      inputs: string[],
      definition: (...inputs: any[]) => T,
    ): Variable<T>;
    define<T>(name: string, definition: () => T): Variable<T>;
    define<T>(
      name: string,
      inputs: string[],
      definition: (...inputs: any[]) => T,
    ): Variable<T>;

    import<T>(name: string, module: Module): Variable<T>;
    import<T>(name: string, alias: string, module: Module): Variable<T>;

    redefine<T>(name: string, definition: () => T): Variable<T>;
    redefine<T>(
      name: string,
      inputs: string[],
      definition: (...inputs: any[]) => T,
    ): Variable<T>;

    value<T>(name: string): Promise<T>;
  }
  type Specifier = { name: string; alias?: string } | string;

  export class Variable<T> {
    private constructor();
    define(definition: () => T): this;
    define(inputs: string[], definition: (...inputs: any[]) => T): this;
    define(name: string, definition: () => T): this;
    define(
      name: string,
      inputs: string[],
      definition: (...inputs: any[]) => T,
    ): this;
    import(name: string, module: Module): this;
    import(name: string, alias: string, module: Module): this;
    delete(): this;
  }

  export interface Observer<T = any, TError = any> {
    pending(): void;
    fulfilled(value: T): void;
    rejected(value: TError): void;
  }
}
