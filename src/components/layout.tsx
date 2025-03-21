import { FC } from 'react';
import Footer from './footer';
import { Toaster } from 'sonner';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '@/stores';
import Header from './header';
import { Outlet } from 'react-router';

type Props = {};

const App: FC<Props> = ({}) => {
  return (
    <>
      <Toaster />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Header />
          <main className=''>
            <Outlet />
          </main>
          <Footer />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
