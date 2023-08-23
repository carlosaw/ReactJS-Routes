import { useRoutes } from 'react-router-dom';
import { Home } from "../pages/Home";
import { About } from '../pages/About';
import { NotFound } from '../pages/NotFound';
import { AboutItem } from '../pages/AboutItem';
import { RequireAuth } from '../RequireAuth';
import { Login } from '../pages/Login';

export const MainRoutes = () => {
  return useRoutes([
    { path: '/', element: <Home /> },
    { path: '/about', element: <RequireAuth><About /></RequireAuth> },
    { path: '/about/:slug', element: <AboutItem /> },
    { path: '/login', element: <Login /> },
    { path: '*', element: <NotFound /> },
  ]);
  /*
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={
        <RequireAuth>
          <About />
        </RequireAuth>} />
      <Route path='/about/:slug' element={<AboutItem />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
  */
}