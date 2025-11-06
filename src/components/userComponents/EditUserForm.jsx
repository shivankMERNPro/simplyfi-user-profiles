import React from "react";
import { Input } from "antd";
import { Controller } from "react-hook-form";

const UserForm = ({ control, errors }) => {
  const renderField = (name, label, placeholder, rules) => (
    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 w-full mb-6">
      {/* Label */}
      <div className="sm:w-28 w-full mb-1 sm:mb-0 flex justify-start sm:justify-end font-medium text-black">
        <span className="text-red-500 mr-1">{rules?.required ? "*" : ""}</span>
        {label}
      </div>

      {/* Input */}
      <div className="flex-1 flex flex-col">
        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({ field }) => (
            <Input
              {...field}
              placeholder={placeholder}
              className={`border ${errors[name] ? "border-red-500" : "border-gray-300"} rounded px-2 py-1`}
            />
          )}
        />
        {errors[name] && (
          <p className="text-red-500 text-xs mt-1">{errors[name].message}</p>
        )}
      </div>
    </div>
  );

  return (
    <div className="w-full flex flex-col">
      {renderField("name", "Name:", "Enter name", {
        required: "Name is required",
      })}
      {renderField("email", "Email:", "Enter email", {
        required: "Email is required",
        pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
      })}
      {renderField("phone", "Phone:", "Enter phone", {
        required: "Phone is required",
      })}
      {renderField("website", "Website:", "Enter website", {
        required: "Website is required",
      })}
    </div>
  );
};

export default UserForm;
