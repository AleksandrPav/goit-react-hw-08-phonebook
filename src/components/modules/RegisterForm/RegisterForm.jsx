import useForm from 'shared/hooks/useForm';

import { initialState } from './initialState';

import css from './RegisterForm.module.css';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { name, email, password } = state;

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className={css.group}>
        <label className={css.label} htmlFor="">
          User name:
        </label>
        <input
          value={name}
          name="name"
          onChange={handleChange}
          className={css.input}
          type="text"
          placeholder="Enter your user name"
          required
        />
      </div>
      <div className={css.group}>
        <label className={css.label} htmlFor="">
          User Email:
        </label>
        <input
          value={email}
          name="email"
          onChange={handleChange}
          className={css.input}
          type="email"
          placeholder="Enter user email"
        />
      </div>
      <div className={css.group}>
        <label className={css.label} htmlFor="">
          User Password:
        </label>
        <input
          value={password}
          name="password"
          onChange={handleChange}
          className={css.input}
          type="password"
          placeholder="Enter user password"
        />
      </div>
      <div className={css.group}>
        <button type="submit">Sign up</button>
      </div>
    </form>
  );
};

export default RegisterForm;
