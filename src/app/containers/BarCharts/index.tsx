import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
// import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectBarCharts } from './selectors';
import { barChartsSaga } from './saga';
import Notebook from '../../components/ObservableRuntime/Notebook';

interface Props {}

export const BarCharts = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: barChartsSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const barCharts = useSelector(selectBarCharts);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>BarCharts</title>
        <meta name="description" content="Description of BarCharts" />
      </Helmet>
      <Notebook notebookId="d/a65045198198d4ce" cellName="lolipopChart" />
      <Notebook notebookId="d/a65045198198d4ce" cellName="lolipopChart" />
      <Notebook notebookId="d/a65045198198d4ce" cellName="lolipopChart" />
    </>
  );
});
