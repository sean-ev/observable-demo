import React from 'react';
import Notebook from '../../components/ObservableRuntime/Notebook';

interface Props {}

export function ThreeDee(props: Props) {
  return (
    <div>
      <Notebook notebookId="@sean-ev/untitled/2" cellName="visual" />
    </div>
  );
}
