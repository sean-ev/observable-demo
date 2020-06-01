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
            <a href="./bar-charts">Bar Charts</a>
          </li>
          <li>
            <a href="./fancy-layout">Fancy Layout</a>
          </li>
        </ul>
      </span>
    </>
  );
}
