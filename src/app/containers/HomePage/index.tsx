import React from 'react';
import { Helmet } from 'react-helmet-async';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <span>
        <ul>
          <li>
            <a href="./gpu-boids">Complete Notebook</a>
          </li>
          <li>
            <a href="./bar-charts">Bar Charts</a>
          </li>
          <li>
            <a href="./three-dee">3D WebGL</a>
          </li>
          <li>
            <a href="./mapbox-video">MapBox w/ Video</a>
          </li>
          <li>
            <a href="./fancy-layout">Fancy Layout</a>
          </li>
          <li>
            <a href="./shared-runtime">Shared Runtime</a>
          </li>
        </ul>
      </span>
    </>
  );
}
