import { useDispatch } from 'react-redux';

import css from './RegisterPage.module.css';

import { signup } from 'redux/auth/auth-operations';
import RegisterForm from 'components/modules/RegisterForm/RegisterForm';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const onRegister = data => {
    dispatch(signup(data));
  };

  return (
    <div className={css.container}>
      <h2>Register Page</h2>
      <RegisterForm onSubmit={onRegister} />
    </div>
  );
};

export default RegisterPage;
