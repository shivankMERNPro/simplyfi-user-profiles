import React from "react";
import PropTypes from "prop-types";
import { MailOutlined, PhoneOutlined, GlobalOutlined } from "@ant-design/icons";

const UserDescription = ({ email, phone, website }) => (
  <div className="flex flex-col gap-2 text-sm text-gray-600 mt-2">
    <div className="flex items-center gap-2">
      <MailOutlined className=" text-[20px] text-gray-700 text-blue-500" />
      <span>{email}</span>
    </div>

    <div className="flex items-center gap-2">
      <PhoneOutlined className=" text-[20px] text-gray-700 text-green-500" />
      <span>{phone}</span>
    </div>

    <div className="flex items-center gap-2">
      <GlobalOutlined className="text-[20px] text-gray-700 text-gray-500" />
      <a
        href={`http://${website}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline text-blue-500"
      >
        {website}
      </a>
    </div>
  </div>
);

UserDescription.propTypes = {
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
};

export default UserDescription;
