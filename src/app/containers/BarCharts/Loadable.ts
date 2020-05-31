/**
 *
 * Asynchronously loads the component for BarCharts
 *
 */

import { lazyLoad } from 'utils/loadable';

export const BarCharts = lazyLoad(
  () => import('./index'),
  module => module.BarCharts,
);
