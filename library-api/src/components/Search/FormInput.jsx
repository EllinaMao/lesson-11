import React from "react";

const FormInput = React.memo(({ label, value, onChange, ...props }) => {
  return (
    <label className="form-label fw-bold text-secondary small mb-1">
      {label}
      <input
        className="form-control shadow-sm"
        value={value}
        onChange={onChange}
        {...props}
      />
    </label>
  );
});
export default FormInput;
