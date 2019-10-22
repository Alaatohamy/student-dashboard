import React from "react";
import { connect } from "react-redux";
import { selectLoggedInState } from "redux/user/selectors";
import { HomePage, Dashboard } from "pages";

const RequireAuth = () => ({ selectLoggedInState }) => {
  return <>{selectLoggedInState ? <Dashboard /> : <HomePage />}</>;
};

const mapState = state => ({
  selectLoggedInState: selectLoggedInState(state)
});
export default connect(mapState)(RequireAuth());
