import React from "react";
import "../Css/Badge.css";

export default function Badge({ children, icon = null, className = "" }) {
  return (
    <div
      className={`d-inline-flex align-items-center gap-2 badge-custom ${className}`}
      role="status"
      aria-label={typeof children === "string" ? children : "badge"}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span className="text-truncate small text-light">{children}</span>
    </div>
  );
}
