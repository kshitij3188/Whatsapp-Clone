import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./Footer.css";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
function Footer() {
  return (
    <div>
      <div className="footer">
        <a className="" href="https://github.com/kshitij3188">
          <GitHubIcon className="github__logo" />
        </a>
        <p>
          <strong>Made Using React</strong>
        </p>
      </div>
    </div>
  );
}

export default Footer;
