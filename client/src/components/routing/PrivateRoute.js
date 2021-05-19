import React from "react";
import { Redirect, Route } from "react-router";
import propTypes from "prop-types";
import { connect } from "react-redux";

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        (!isAuthenticated && !loading && <Redirect to="/login" />) ||
        (!loading && <Component {...props} />)
      }
    />
  );
};
PrivateRoute.propTypes = {
  auth: propTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(PrivateRoute);
