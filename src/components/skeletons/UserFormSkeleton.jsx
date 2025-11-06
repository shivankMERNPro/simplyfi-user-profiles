import React from "react";
import { Skeleton } from "antd";

const UserFormSkeleton = (count = 1) => {
  return (
    <div className="w-full flex flex-col space-y-6 mb-4">
      {[...Array(count)].map((_, index) => (
        <div key={index} className="w-full">
          {/* Full width skeleton for label + input */}
          <Skeleton.Input active style={{ width: "100%" }} />
        </div>
      ))}
    </div>
  );
};

export default UserFormSkeleton;
