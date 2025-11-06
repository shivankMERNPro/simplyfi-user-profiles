import React from "react";
import PropTypes from "prop-types";
import { Card as AntCard } from "antd";

const Card = ({ cover, actions, title, description, children, className }) => {
  return (
    <AntCard
      hoverable
      cover={
        <div
          className="justify-center items-center bg-[#f5f5f5]"
          style={{ display: "flex" }}
        >
          <div className="h-[180px] w-[200px] flex justify-center items-center">
            {cover}
          </div>
        </div>
      }
      actions={actions}
      className={`shadow-md hover:shadow-lg transition-all duration-300 bg-red border border-gray-200 max-w-sm ${className}`}
    >
      {title || description ? (
        <div className="p-2">
          {title && <h4 className="text-[18px] text-gray-700">{title}</h4>}
          {description && (
            <div className="text-gray-600 mt-2">{description}</div>
          )}
        </div>
      ) : (
        children
      )}
    </AntCard>
  );
};

Card.propTypes = {
  cover: PropTypes.node,
  actions: PropTypes.array,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.node,
  className: PropTypes.string,
};

Card.defaultProps = {
  className: "",
};

export default Card;
