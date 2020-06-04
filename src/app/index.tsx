/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './containers/HomePage/Loadable';
import { HelloWorld } from './containers/HelloWorld';
import { BarCharts } from './containers/BarCharts';
import { FancyLayout } from './containers/FancyLayout';
import { ThreeDee } from './containers/ThreeDee';
import { GpuBoids } from './containers/GpuBoids';
import { MapBox } from './containers/MapBox';
import { SharedRuntime } from './containers/SharedRuntime';
import { NotFoundPage } from './components/NotFoundPage/Loadable';

export function App() {
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hello-world" component={HelloWorld} />
        <Route exact path="/bar-charts" component={BarCharts} />
        <Route exact path="/fancy-layout" component={FancyLayout} />
        <Route exact path="/three-dee" component={ThreeDee} />
        <Route exact path="/gpu-boids" component={GpuBoids} />
        <Route exact path="/mapbox-video" component={MapBox} />
        <Route exact path="/shared-runtime" component={SharedRuntime} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
