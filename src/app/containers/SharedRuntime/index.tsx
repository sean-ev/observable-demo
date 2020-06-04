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
          <h3>Chart.js Example</h3>
          <NotebookProvider url="https://api.observablehq.com/d/0bbc8e279a8f6259.js?v=3">
            <Visual cellName="visual" />
          </NotebookProvider>
          <h3>Google Gant Chart</h3>
          <NotebookProvider url="https://api.observablehq.com/@elephantventures/untitled.js?v=3">
            <Visual cellName="chart" />
          </NotebookProvider>
          <h3>D3 Timeslider</h3>
          <NotebookProvider url="https://api.observablehq.com/@mbostock/hello-d3-simple-slider.js?v=3">
            <Visual cellName="viewof time" />
          </NotebookProvider>
        </RuntimeProvider>
      </div>
    </>
  );
}

function Visual(props: any) {
  return (
    <>
      <DOMNode>{useValue(props.cellName)}</DOMNode>
    </>
  );
}
