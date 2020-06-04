// /**
//  *
//  * Observable
//  *
//  */
// import React from 'react';

// interface Props {}

// export function Observable(props: Props) {
//   return <div></div>;
// }

import React from 'react';
import ReactDOM from 'react-dom';

import { DOMNode } from './render-dom-node';
import { RuntimeProvider, NotebookProvider, useValue } from './runtime';

import './styles.css';

function App() {
  return (
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

// const rootElement = document.getElementById('root')
// ReactDOM.render(
//   <RuntimeProvider>
//     <App />
//   </RuntimeProvider>,
//   rootElement,
// )
