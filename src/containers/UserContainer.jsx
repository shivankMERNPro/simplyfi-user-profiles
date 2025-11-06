import React, { memo, useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Empty } from "antd";
import { useForm } from "react-hook-form";

// APIs
import { useGetUserListQuery } from "../services/apiCalls/userApis";

// Redux actions
import {
  setUserData,
  updateUserData,
  deleteUserData,
} from "../services/slices/userSlice";

// Components
import Modal from "../components/commonComponents/Modal";
import UserCard from "../components/userComponents/UserCard";
import UserForm from "../components/userComponents/EditUserForm";
import UserSearchForm from "../components/userComponents/UserSearchForm";
import UserCardSkeleton from "../components/skeletons/UserCardSkeleton";
import UserFormSkeleton from "../components/skeletons/UserFormSkeleton.jsx";

const UserContainer = () => {
  const dispatch = useDispatch();

  //---------------------------------
  // State
  //---------------------------------
  const [open, setOpen] = useState(false); // modal open state
  const [selectedUser, setSelectedUser] = useState(null); // currently edited user
  const [favorites, setFavorites] = useState({}); // favorite status of users
  const [searchTerm, setSearchTerm] = useState(""); // search input value

  //---------------------------------
  // Fetch users from API
  //---------------------------------
  const { data: users = [], isLoading, isFetching } = useGetUserListQuery();

  //---------------------------------
  // Persist API data in Redux
  //---------------------------------
  useEffect(() => {
    if (users.length) {
      dispatch(setUserData({ data: users }));
    }
  }, [users, dispatch]);

  //---------------------------------
  // Select persisted users from Redux
  //---------------------------------
  const persisterData = useSelector((state) => state.user.userData);

  //---------------------------------
  // React Hook Form setup
  //---------------------------------
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      website: "",
    },
  });

  //---------------------------------
  // Modal open with prefilled form
  //---------------------------------
  const handleEditClick = (user) => {
    setSelectedUser(user);
    reset(user);
    setOpen(true);
  };

  //---------------------------------
  // Close modal
  //---------------------------------
  const handleClose = () => {
    setOpen(false);
    setSelectedUser(null);
  };

  //---------------------------------
  // Update user data
  //---------------------------------
  const onSubmit = (data) => {
    if (selectedUser) {
      dispatch(updateUserData({ id: selectedUser.id, newData: data }));
    }
    setOpen(false);
    setSelectedUser(null);
  };

  //---------------------------------
  // Delete user
  //---------------------------------
  const handleDeleteUser = (id) => {
    dispatch(deleteUserData(id));
  };

  //---------------------------------
  // Toggle favorite status
  //---------------------------------
  const handleFavorite = (user) => {
    setFavorites((prev) => ({
      ...prev,
      [user.id]: !prev[user.id],
    }));
  };

  //---------------------------------
  // Filter users based on search term
  //---------------------------------
  const filteredUsers = useMemo(() => {
    if (!searchTerm) return persisterData;
    return persisterData.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [persisterData, searchTerm]);

  //---------------------------------
  // Loading state
  //---------------------------------
  if (isFetching || isLoading) {
    return (
      <div className="p-5">
        <UserFormSkeleton />
        <UserCardSkeleton />
      </div>
    );
  }

  //---------------------------------
  // No users available
  //---------------------------------
  if (!persisterData.length) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Empty description="No users available" />
      </div>
    );
  }

  //---------------------------------
  // Render container with search and user cards
  //---------------------------------
  return (
    <div className="p-5">
      <UserSearchForm
        searchTerm={searchTerm}
        onChange={setSearchTerm}
        onClear={() => setSearchTerm("")}
      />

      <Row gutter={[22, 22]} justify="start">
        {filteredUsers.map((user) => (
          <Col xs={24} sm={12} md={8} lg={6} key={user.id}>
            <UserCard
              user={user}
              favorited={!!favorites[user.id]}
              onEdit={() => handleEditClick(user)}
              onDelete={() => handleDeleteUser(user.id)}
              onFavorite={() => handleFavorite(user)}
            />
          </Col>
        ))}
      </Row>

      <Modal
        open={open}
        title="Edit User"
        onClose={handleClose}
        onOk={handleSubmit(onSubmit)}
      >
        <UserForm control={control} errors={errors} />
      </Modal>
    </div>
  );
};

export default memo(UserContainer);
