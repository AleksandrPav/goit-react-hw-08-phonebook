import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const ContactPage = lazy(() =>
  import('components/Pages/ContactPage/ContactPage')
);

const RegisterPage = lazy(() =>
  import('components/Pages/RegisterPage/RegisterPage')
);

const UserRoutes = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/contacts" element={<ContactPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
