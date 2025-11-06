import React from "react";
import PropTypes from "prop-types";

// Common Component
import Card from "../commonComponents/Card";

import UserActions from "./UserActions";
import Avatar from "../commonComponents/Avatar";
import UserDescription from "./UserDescription";

const UserCard = ({ user, onEdit, onDelete, onFavorite, favorited }) => {
  return (
    <Card
      cover={<Avatar username={user.username} />}
      title={user.name}
      description={
        <UserDescription
          email={user.email}
          phone={user.phone}
          website={user.website}
        />
      }
      actions={[
        ...UserActions({
          user,
          onEdit,
          onDelete,
          onFavorite,
          favorited,
        }),
      ]}
    />
  );
};

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  onFavorite: PropTypes.func,
};

export default UserCard;
