import React, { FC, ReactNode } from 'react';

import Navigation from './navigation';
import Footer from './footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <div>
    <Navigation />
    {/* The below <div> is necessary to prevent overflows caused by components animated by framer motion */}
    <div className='overflow-x-clip'>{children}</div>
    <Footer />
  </div>
);

export default Layout;
