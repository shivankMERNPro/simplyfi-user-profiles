import React from "react";
import { Input, Button } from "antd";

const UserSearchForm = ({ searchTerm, onChange, onSearch, onClear }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-2 items-center mb-4">
      <Input
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1"
      />
      <div className="flex gap-2 mt-2 sm:mt-0">
        <Button type="primary" onClick={onSearch}>
          Search
        </Button>
        <Button onClick={onClear}>Clear</Button>
      </div>
    </div>
  );
};

export default UserSearchForm;
