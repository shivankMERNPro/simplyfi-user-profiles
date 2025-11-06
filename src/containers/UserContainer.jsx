import React, { memo } from "react";
import { Row, Col, Alert, Empty } from "antd";

// APIs
import { useGetUserListQuery } from "../services/apiCalls/userApis";

// Components
import UserCard from "../components/userComponents/UserCard";
import UserCardSkeleton from "../components/skeletons/UserCardSkeleton";

const UserContainer = () => {
  const {
    data: users = [],
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetUserListQuery();

  // 🔹 Loading State
  if (isFetching || isLoading) {
    return <UserCardSkeleton />;
  }

  // 🔹 Error State
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

  // 🔹 Empty State
  if (!users.length) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Empty description="No users available" />
      </div>
    );
  }

  // Render User Cards
  return (
    <div style={{ padding: "20px" }}>
      <Row gutter={[22, 22]} justify="start">
        {users.map((user) => (
          <Col xs={24} sm={12} md={8} lg={6} key={user.id}>
            <UserCard
              user={user}
              onEdit={(u) => console.log("Edit →", u)}
              onDelete={(u) => console.log("Delete →", u)}
              onFavorite={(u) => console.log("Favorite →", u)}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default memo(UserContainer);
