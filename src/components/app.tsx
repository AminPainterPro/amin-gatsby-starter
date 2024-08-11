import React, { FC, ReactNode } from 'react';

import Layout from 'components/layout';
import { Icon } from 'shadcn/icon';
import { Toaster } from 'shadcn/sonner';
import { ThemeProvider } from 'shadcn/theme';

interface AppProps {
  children: ReactNode;
}

const App: FC<AppProps> = ({ children }) => (
  <ThemeProvider>
    <Layout>{children}</Layout>
    <Toaster
      expand
      closeButton
      position='bottom-center'
      icons={{
        success: <Icon name='CheckCircle' className='text-green-400' />,
        error: <Icon name='AlertOctagon' className='text-red-400' />,
      }}
    />
  </ThemeProvider>
);

export default App;
