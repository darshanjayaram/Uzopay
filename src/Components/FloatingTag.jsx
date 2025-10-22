import React from "react";
import PropTypes from "prop-types";
import "../Css/FloatingTag.css"

const FloatingTag = ({ label, style = {}, icon = null }) => {
  return (
    <div
      className="position-absolute d-flex align-items-center gap-2 px-3 py-2 floating-tag floating-wrapper"
      style={style}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span className="text-nowrap">{label}</span>
    </div>
  );
};

FloatingTag.propTypes = {
  label: PropTypes.string.isRequired,
  style: PropTypes.object,
  icon: PropTypes.node,
};

export default FloatingTag;

