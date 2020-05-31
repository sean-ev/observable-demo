import React from 'react';
import Notebook from '../../components/ObservableRuntime/Notebook';

interface Props {}

export function HelloWorld(props: Props) {
  return (
    <>
      <Notebook
        notebookId="@elephantventures/untitled"
        cellName="viewof chart"
      />
      <hr />
      <Notebook notebookId="@elephantventures/icelandic-population-by-age-1841-2019" />
      <hr />
      <Notebook notebookId="d/2b11ccb4566b0634" />
    </>
  );
}
