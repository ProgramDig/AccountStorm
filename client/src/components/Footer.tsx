import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="page-footer" style={{ background: "#1F1F1F", position: "absolute", width: "100%" }} >
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text"></h5>
              <p className="grey-text text-lighten-4"></p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text"></h5>
              <ul>
                <li><a className="grey-text text-lighten-3" href="#!"></a></li>
                <li><a className="grey-text text-lighten-3" href="#!"></a></li>
                <li><a className="grey-text text-lighten-3" href="#!"></a></li>
                <li><a className="grey-text text-lighten-3" href="#!"></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            Військовий Інститут Телекомінкацій та Інформатизації імені Героїв Крут
            <a className="grey-text text-lighten-4 right" href="#!">© 2023</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;