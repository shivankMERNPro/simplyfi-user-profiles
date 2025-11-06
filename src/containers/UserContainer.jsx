import React, { memo } from "react";
import { Spin, Alert } from "antd";

// APIs Import
import { useGetUserListQuery } from "../services/apiCalls/userApis";

const UserContainer = () => {
  const {
    data: users = [],
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetUserListQuery();

  // Loading state
  if (isLoading || isFetching) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spin size="large" tip="Loading users..." />
      </div>
    );
  }

  // Error state
  if (isError) {
    return (
      <div className="p-6">
        <Alert
          message="Failed to load users"
          description={error?.data?.message || "Please try again later."}
          type="error"
          showIcon
        />
      </div>
    );
  }

  // No data state
  if (!users.length) {
    return (
      <div className="text-center py-20 text-gray-500">No users available.</div>
    );
  }

  return <>Hello</>;
};

export default memo(UserContainer);
