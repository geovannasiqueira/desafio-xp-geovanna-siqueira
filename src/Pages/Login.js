import React, { useState } from 'react';

function Login() {
  const MIN_PASSWORD_LENGTH = 6;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = ({ target }) => {
    setEmail(target.value);
  };
  const handlePassword = ({ target }) => {
    setPassword(target.value);
  };

  const enableButton = () => {
    const regex = /\S+@\S+\.\S+/;
    const validEmail = regex.test(email);

    if (validEmail && password.length > MIN_PASSWORD_LENGTH) return false;
    return true;
  };

  const handleClick = () => {
    const objEmail = { email: email };
    localStorage.setItem('user', JSON.stringify(objEmail));
    setEmail('');
    setPassword('');
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <form className="inline-flex flex-col gap-2 w-96 p-12 bg-white rounded-md shadow-xl">
        <label htmlFor="email" className="label">
          <p className="label-text"> Email </p>
        </label>
        <input
          type="email"
          data-testid="email-input"
          name="email"
          id="email"
          value={email}
          onChange={handleEmail}
          className="input input-bordered rounded-md h-10"
          placeholder="email@test.com"
        />
        <label htmlFor="password" className="label mt-4">
          <p className="label-text"> Password </p>
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handlePassword}
          className="input input-bordered rounded-md h-10"
        />
        <label class="label">
          <span class="label-text-alt">
            Passwords must be at least 6 characters long
          </span>
        </label>
          <button
            type="button"
            disabled={enableButton()}
            onClick={handleClick}
            className="btn mt-4"
          >
            Login
          </button>
      </form>
    </div>
  );
}

export default Login;
