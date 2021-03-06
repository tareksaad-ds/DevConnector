import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const ProfileEdu = ({
  education: { collage, degree, fieldofstudy, current, to, from, description },
}) => (
  <div>
    <h3 className="text-dark">{collage}</h3>
    <p>
      <Moment format="YYYY-MM-DD">{from}</Moment> -{" "}
      {!to ? "Now" : <Moment format="YYYY/MM/DD">{to}</Moment>}
    </p>
    <p>
      <strong>Position: </strong> {degree}
    </p>
    <p>
      <strong>Location: </strong> {fieldofstudy}
    </p>
    <p>
      <strong>Description: </strong> {description}
    </p>
  </div>
);

ProfileEdu.propTypes = {
  education: PropTypes.object.isRequired,
};

export default ProfileEdu;
