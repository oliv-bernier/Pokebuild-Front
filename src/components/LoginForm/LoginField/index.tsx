import React from 'react';
import PropTypes from 'prop-types';

const LoginField = ({
  name,
  placeholder,
  value,
  onChange,
  type,
}: {
  name: string,
  placeholder: string,
  value: string,
  onChange: Function,
  type: string,
}) => {
  const inputId = `field-${name}`;

  const handleChange = (evt: any): void => {
    onChange(evt.target.value, name);
  };

  return (
    <div>
      <input
        type={type}
        className="login-form-field"
        id={inputId}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  );
};

LoginField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default LoginField;
