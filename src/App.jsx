import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import ErrorBoundary from './layout/error-boundary/ErrorBoundary';
import GeneralLoading from './layout/general-loading/GeneralLoading';
import Layout from './layout/Layout';
import {
  About,
  Account,
  Career,
  Contact,
  FAQ,
  LandingPage,
  Premium,
  PrivatePolicy,
  Task,
} from './pages';

function App() {
  return (
    <ErrorBoundary>
      <Layout>
        <Suspense fallback={<GeneralLoading text={`LOADING...`} />}>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/career' element={<Career />} />
            <Route path='/about' element={<About />} />
            <Route path='/policy' element={<PrivatePolicy />} />

            <Route path='/faq' element={<FAQ />} />

            {/* 404-error handler */}
            <Route
              path='*'
              element={<GeneralLoading text='PAGE NOT FOUND' />}
            />
          </Routes>
        </Suspense>
      </Layout>
    </ErrorBoundary>
  );
}

export default App;
