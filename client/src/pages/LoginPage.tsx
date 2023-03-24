import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";
import { useMessage } from "../hooks/useMessage.hook";
import { useHttp } from "../hooks/useHttp.hook";

const LoginPage = () => {
  const auth = useContext(AuthContext);
  const message = useMessage();
  const navigate = useNavigate();
  const { loading, request, error, clearError } = useHttp();
  const [form, setForm] = useState({ logIdent: "", password: "" });

  useEffect(() => {
    if (error != null) {
      message(error);
    }
    clearError();
  }, [error, message, clearError]);

  const changeHandler = (event: any) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const loginHandler = async () => {
    try {
      const response = await request("http://localhost:5000/api/auth/login", "POST", { ...form });
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      auth.login(response.token, response.user);
      message(response.message);
    } catch (e) {
    }
  };

  return (
    <div className={"container"}>
      <h2 style={{ color: "#E1E1E1" }} className="center-align">
        <span style={{ marginLeft: 5 }}>Account<span className={"app-color"}>Storm</span></span><br />
        <span>Авторизація</span>
      </h2>

      <div className="row">
        <form
          className="col s6 offset-s3 center-align background grey darken-4 z-depth-1"
          style={{
            padding: 30,
            borderRadius: 10,
          }}
        >
          <div className="row center-align">
            <div className="input-field col s12">
              <input
                id="logIdent"
                name="logIdent"
                type="text"
                className="validate"
                onChange={changeHandler}
              />
              <label htmlFor="logIdent">Логін або пошта</label>
            </div>
            <div className="input-field col s12">
              <input
                id="password"
                name="password"
                type="password"
                className="validate"
                onChange={changeHandler}
              />
              <label htmlFor="password">Пароль</label>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light orange darken-1"
            type="submit"
            name="action"
            style={{ marginRight: 15 }}
            onClick={loginHandler}
            disabled={loading}
          >
            Увійти
          </button>
          <button
            className="btn waves-effect waves-light orange darken-1"
            type="submit"
            name="action"
            onClick={() => navigate("/registration")}
            disabled={loading}
          >
            Реєстрація
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;