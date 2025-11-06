import React from "react";
import PropTypes from "prop-types";
import { Avatar as AntAvatar } from "antd";

const Avatar = ({ username }) => (
  <AntAvatar
    size={130}
    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`}
  />
);

Avatar.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Avatar;
