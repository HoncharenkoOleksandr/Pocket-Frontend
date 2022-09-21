import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ProtectedRoute } from '@common';
import { Main } from '@pages';
import { ROUTES } from '@utils';

import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES.SIGNUP} element={<SignUp />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route
        path={ROUTES.DASHBOARD}
        element={
          <ProtectedRoute>
            <Main />
          </ProtectedRoute>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default App;
