import React, { useContext } from "react";
import useLinksHook from "../hooks/useLinks.hook";
import useAppSelector from "../hooks/useAppSelector.hook";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import userIcon from "../assets/account_circle_black_24dp.svg";
import logoutIcon from "../assets/logout_black_24dp.svg";


const NavBar = () => {
  const auth = useContext(AuthContext);
  const user = useAppSelector(state => state.user);
  const links = useLinksHook(user.role);

  const logoutHandler = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    auth.logout();
  };
  return (
    <div>
      <nav>
        <div className="nav-wrapper" style={{ background: "#1F1F1F" }}>
          <a href="#" className="brand-logo center">
            <span style={{ color: "#E1E1E1", marginLeft: 20 }}>
            <span style={{ marginLeft: 5 }}>Account<span className={"app-color"}>Storm</span></span>
          </span>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <NavLink className={"app-color"} to="/account" onClick={() => console.log()}>
                <img src={userIcon} alt="none" />
              </NavLink>
            </li>
            <li>
              <NavLink className={"app-color"} to="/auth" onClick={logoutHandler}>
                <img src={logoutIcon} alt="none" />
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <nav>
        <div className="nav-wrapper" style={{ background: "#1F1F1F" }}>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {links}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;