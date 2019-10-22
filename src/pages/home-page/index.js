import React from "react";
import { connect } from "react-redux";
import { CustomButton } from "components";
import { login } from "redux/user/actions";
import "./home-page.style.scss";

const HomePage = ({ login }) => (
  <div className="home-page">
    <CustomButton text={"Login"} color={"filled"} onClick={login} />
  </div>
);

const mapDispatch = dispatch => ({
  login: () => dispatch(login())
});

export default connect(
  null,
  mapDispatch
)(HomePage);
