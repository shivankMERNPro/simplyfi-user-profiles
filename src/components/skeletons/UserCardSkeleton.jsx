import React from "react";
import { Card, Skeleton, Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";

const UserCardSkeleton = ({ count = 8 }) => {
  return (
    <Row gutter={[22, 22]} justify="start">
      {Array.from({ length: count }).map((_, index) => (
        <Col xs={24} sm={12} md={8} lg={6} key={index}>
          <Card
            className="shadow-md rounded-xl overflow-hidden border border-gray-200"
            bodyStyle={{ padding: "16px" }}
            cover={
              <div
                className="flex justify-center items-center bg-gray-100"
                style={{
                  height: "150px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <UserOutlined
                  style={{
                    fontSize: 64,
                    color: "#d1d5db",
                  }}
                />
              </div>
            }
          >
            {/* Text placeholders (same column alignment) */}
            <div className="flex flex-col gap-2 p-2">
              <Skeleton.Input
                active
                block
                size="small"
                style={{ width: "80%" }}
              />
              <Skeleton.Input
                active
                block
                size="small"
                style={{ width: "90%" }}
              />
              <Skeleton.Input
                active
                block
                size="small"
                style={{ width: "75%" }}
              />
              <Skeleton.Input
                active
                block
                size="small"
                style={{ width: "65%" }}
              />
            </div>

            {/* Action icons */}
            <div className="flex justify-around pt-3 border-t border-gray-100">
              <Skeleton.Avatar active size="large" shape="circle" />
              <Skeleton.Avatar active size="large" shape="circle" />
              <Skeleton.Avatar active size="large" shape="circle" />
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default UserCardSkeleton;
