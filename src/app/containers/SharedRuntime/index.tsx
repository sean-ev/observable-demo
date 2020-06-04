import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  RuntimeProvider,
  NotebookProvider,
  useValue,
} from '../../components/Observable/runtime';
import { DOMNode } from '../../components/Observable/render-dom-node';

interface Props {}

export function SharedRuntime(props: Props) {
  return (
    <>
      <Helmet>
        <title>SharedRuntime</title>
        <meta name="description" content="Description of SharedRuntime" />
      </Helmet>
      <div className="App">
        <RuntimeProvider>
          <NotebookProvider url="https://api.observablehq.com/@tmcw/hello-world.js?v=3">
            <Hero />
          </NotebookProvider>
          <NotebookProvider url="https://api.observablehq.com/@observablehq/downloading-and-embedding-notebooks.js?v=3">
            <Graphic />
          </NotebookProvider>
        </RuntimeProvider>
      </div>
    </>
  );
}

function Hero() {
  return (
    <>
      <DOMNode>{useValue('hello')}</DOMNode>
      <h2>Start editing to see some magic happen!</h2>
    </>
  );
}

function Graphic() {
  return <DOMNode>{useValue('graphic')}</DOMNode>;
}
