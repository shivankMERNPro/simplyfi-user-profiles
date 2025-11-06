import React from "react";
import PropTypes from "prop-types";
import { Tooltip } from "antd";
import {
  HeartOutlined,
  HeartFilled,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const UserActions = ({ user, favorited, onFavorite, onEdit, onDelete }) => {
  const iconStyle = { fontSize: "24px" };

  return [
    //  Favorite Icon
    <Tooltip title="Favorite" key="fav">
      {favorited ? (
        <HeartFilled
          onClick={() => onFavorite(user)}
          style={{ ...iconStyle, color: "red" }}
          className="hover:text-red-600 transition cursor-pointer"
        />
      ) : (
        <HeartOutlined
          onClick={() => onFavorite(user)}
          style={iconStyle}
          className="hover:text-red-600 transition cursor-pointer"
        />
      )}
    </Tooltip>,

    // Edit Icon
    <Tooltip title="Edit" key="edit">
      <EditOutlined
        onClick={() => onEdit(user)}
        style={iconStyle}
        className="text-gray-600 hover:text-blue-500 transition cursor-pointer"
      />
    </Tooltip>,

    //  Delete icon
    <Tooltip title="Delete" key="delete">
      <DeleteOutlined
        onClick={() => onDelete(user)}
        style={iconStyle}
        className="text-gray-600 hover:text-red-500 transition cursor-pointer"
      />
    </Tooltip>,
  ];
};

UserActions.propTypes = {
  user: PropTypes.object.isRequired,
  favorited: PropTypes.bool,
  onFavorite: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

export default UserActions;
