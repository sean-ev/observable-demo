import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.mapBox || initialState;

export const selectMapBox = createSelector(
  [selectDomain],
  mapBoxState => mapBoxState,
);
