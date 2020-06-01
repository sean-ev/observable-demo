import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectMapBox } from './selectors';
import { mapBoxSaga } from './saga';
import Notebook from '../../components/ObservableRuntime/Notebook';

interface Props {}

export const MapBox = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: mapBoxSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const mapBox = useSelector(selectMapBox);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  return (
    <Div>
      <Helmet>
        <title>MapBox</title>
        <meta name="description" content="Description of MapBox" />
      </Helmet>
      <Notebook notebookId="d/d4de73cb2aac0ea4" cellName="visual" />
    </Div>
  );
});

const Div = styled.div``;
