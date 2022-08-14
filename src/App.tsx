import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignUp } from './pages/SignUp';
import { Login } from './pages/Login';
import { ROUTES } from './utils/constants';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.SIGNUP} element={<SignUp />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
