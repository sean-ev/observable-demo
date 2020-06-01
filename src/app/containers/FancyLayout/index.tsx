import React from 'react';
import styled from 'styled-components/macro';
import GridLayout from 'react-grid-layout';
import Notebook from '../../components/ObservableRuntime/Notebook';

interface Props {}

export function FancyLayout(props: Props) {
  const layout = [
    { i: 'a', x: 0, y: 0, w: 1, h: 1 },
    { i: 'b', x: 1, y: 0, w: 3, h: 1 },
    { i: 'c', x: 0, y: 1, w: 4, h: 1 },
    { i: 'd', x: 0, y: 2, w: 4, h: 1 },
  ];
  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={6}
      rowHeight={300}
      width={1200}
    >
      <Div key="a">
        <Notebook notebookId="d/a65045198198d4ce" cellName="horizontalBar" />
      </Div>
      <Div key="b">
        <Notebook notebookId="@elephantventures/untitled" cellName="chart" />
      </Div>
      <Div key="c">
        <Notebook
          notebookId="@sean-ev/introduction-to-generators"
          cellName="visual"
        />
      </Div>
      <Div key="d">
        <Notebook notebookId="d/d4de73cb2aac0ea4" cellName="visual" />
      </Div>
    </GridLayout>
  );
}

const Div = styled.div`
  background: #eee;
  overflow: scroll;
`;
