import css from './App.module.css';

import UserRoutes from './UserRoutes';
import Navbar from './modules/navBar/Navbar';

const App = () => {
  return (
    <div className={css.bodyBook}>
      <Navbar />
      <UserRoutes />
    </div>
  );
};

export default App;
