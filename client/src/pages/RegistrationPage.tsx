import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { useMessage } from "../hooks/useMessage.hook";
import { useNavigate } from "react-router-dom";
import { useHttp } from "../hooks/useHttp.hook";

const RegistrationPage = () => {
  const auth = useContext(AuthContext);
  const message = useMessage();
  const navigate = useNavigate();
  const {loading, request, error, clearError} = useHttp();
  const [form, setForm] = useState({
    email: null,
    login: null,
    firstName: null,
    secondName: null,
    password: null,
    rePassword: null
  });

  useEffect(() => {
    if (error != null) {
      message(error);
    }
    clearError();
  },[error, message, clearError]);

  const changeHandler = (event: any) => {
    setForm({...form, [event.target.name]: event.target.value});
  };

  const registrationHandler = async () => {
    try {
      const response = await request("http://localhost:5000/api/auth/registration", "POST", {...form});
      message(response.message);
    } catch (e) {}
  };

  return (
    <div className={"container"}>
      <h1 style={{ color: "#E1E1E1" }} className="center-align">
        <span style={{ marginLeft: 5 }}>Account<span className={"app-color"}>Storm</span></span><br />
        <span>Реєстрація</span>
      </h1>

      <div className="row" >
        <form className="col s8 offset-s2 center-align background grey darken-4 z-depth-1"
              style={{
                padding: 30,
                borderRadius:10
              }}>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="firstName"
                name="firstName"
                type="text"
                className="validate"
                onChange={changeHandler}
              />
              <label htmlFor="firstName">Ім'я</label>
            </div>
            <div className="input-field col s6">
              <input
                id="secondName"
                name="secondName"
                type="text"
                className="validate"
                onChange={changeHandler}
              />
              <label htmlFor="secondName">Прізвище</label>
            </div>
            <div className="input-field col s6">
              <input
                id="email"
                name="email"
                type="text"
                className="validate"
                onChange={changeHandler}
              />
              <label htmlFor="email">Пошта</label>
            </div>
            <div className="input-field col s6">
              <input
                id="login"
                name="login"
                type="text"
                className="validate"
                onChange={changeHandler}
              />
              <label htmlFor="login">Логін</label>
            </div>
            <div className="input-field col s6">
              <input
                id="password"
                name="password"
                type="password"
                className="validate"
                onChange={changeHandler}
              />
              <label htmlFor="password">Пароль</label>
            </div>
            <div className="input-field col s6">
              <input
                id="rePassword"
                name="rePassword"
                type="password"
                className="validate"
                onChange={changeHandler}
              />
              <label htmlFor="rePpassword">Повтор пароля</label>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light orange darken-1"
            type="submit"
            name="action"
            style={{marginRight:15}}
            onClick={() => navigate("/login")}
            disabled={loading}
          >
            Вхід
          </button>
          <button
            className="btn waves-effect waves-light orange darken-1"
            type="submit"
            name="action"
            disabled={loading}
            onClick={registrationHandler}
          >
            Зареєструватись
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;