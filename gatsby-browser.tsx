import React from 'react';
import { GatsbyBrowser } from 'gatsby';

import App from './src/components/app';
import './src/styles/global.css';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element }) => {
  return <App>{element}</App>;
};
