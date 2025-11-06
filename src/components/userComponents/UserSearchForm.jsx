import React from "react";
import { Input, Button } from "antd";

const UserSearchForm = ({ searchTerm, onChange, onSearch, onClear }) => {
  return (
    <div className="flex gap-2 items-center w-full mb-4">
      {/* Input */}
      <Input
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 min-w-0"
      />

      {/* Buttons */}
      <div className="flex gap-2">
        <Button type="primary" onClick={onSearch}>
          Search
        </Button>
        <Button onClick={onClear}>Clear</Button>
      </div>
    </div>
  );
};

export default UserSearchForm;
