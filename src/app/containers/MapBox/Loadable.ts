/**
 *
 * Asynchronously loads the component for MapBox
 *
 */

import { lazyLoad } from 'utils/loadable';

export const MapBox = lazyLoad(
  () => import('./index'),
  module => module.MapBox,
);
