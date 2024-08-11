import React from 'react';
import { GatsbySSR } from 'gatsby';

import App from './src/components/app';
import './src/styles/global.css';

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({ element }) => {
  return <App>{element}</App>;
};

export const onRenderBody: GatsbySSR['onRenderBody'] = ({
  setHtmlAttributes,
  setHeadComponents,
}) => {
  setHtmlAttributes({ lang: 'en' });
  setHeadComponents([
    <link
      key='Poetsen One'
      rel='preload'
      href='/fonts/PoetsenOne-Regular.ttf'
      as='font'
      type='font/ttf'
      crossOrigin='anonymous'
    />,
    <link
      key='Aileron Bold'
      rel='preload'
      href='/fonts/Aileron-Bold.woff'
      as='font'
      type='font/woff'
      crossOrigin='anonymous'
    />,
  ]);
};
