import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const MIN_PASSWORD_LENGTH = 5;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    const date = new Date();
    const objEmail = { email: email, dataAcesso: date };
    localStorage.setItem("user", JSON.stringify(objEmail));
    setEmail("");
    setPassword("");
    navigate('stocks');
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <form className="inline-flex items-center flex-col gap-2 w-96 p-12 bg-white rounded-md shadow-xl">
        <div>
        <label htmlFor="email" className="label">
          <p className="label-text"> Email </p>
        </label>
        <input
          type="email"
          data-testid="email-input"
          name="email"
          id="email"
          alt="email"
          value={email}
          onChange={handleEmail}
          className="input input-bordered rounded-md h-10"
          placeholder="email@test.com"
        />
        </div>
        <div>
        <label htmlFor="password" className="label mt-4">
          <p className="label-text"> Senha </p>
        </label>
        <input
          type="password"
          name="password"
          id="password"
          alt="senha"
          value={password}
          onChange={handlePassword}
          className="input input-bordered rounded-md h-10"
        />
        </div>
        <label className="label">
          <span className="label-text-alt">
            A senha precisa ter pelo menos 6 caracteres
          </span>
        </label>

        <button
          type="button"
          disabled={enableButton()}
          onClick={handleClick}
          className="btn w-28 mt-4"
          alt="botão de login"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
