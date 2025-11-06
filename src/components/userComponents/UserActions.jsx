import React from "react";
import PropTypes from "prop-types";
import { Tooltip } from "antd";
import { HeartOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

const UserActions = ({ user, onFavorite, onEdit, onDelete }) => {
  const iconStyle = { fontSize: "24px" }; // <-- increase size here

  return [
    <Tooltip title="Favorite" key="fav">
      <HeartOutlined
        onClick={() => onFavorite?.(user)}
        style={{ ...iconStyle, color: "red" }}
        className="hover:text-red-600 transition"
      />
    </Tooltip>,

    <Tooltip title="Edit" key="edit">
      <EditOutlined
        onClick={() => onEdit?.(user)}
        style={iconStyle}
        className="text-gray-600 hover:text-blue-500 transition"
      />
    </Tooltip>,

    <Tooltip title="Delete" key="delete">
      <DeleteOutlined
        onClick={() => onDelete?.(user)}
        style={iconStyle}
        className="text-gray-600 hover:text-red-500 transition"
      />
    </Tooltip>,
  ];
};

UserActions.propTypes = {
  user: PropTypes.object.isRequired,
  onFavorite: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

export default UserActions;
