import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Proptypes from "prop-types";

const Form = ({
  initialValues = [],
  onSubmit = () => {},
  submitButtonText = "Submit",
}) => {
  const [inputValues, setInputValues] = useState({});

  const handleSubmit = () => {
    onSubmit(inputValues);
  };

  const onChange = (itemID) => {
    return (event) => {
      const { value, type, checked } = event.target;

      if (type === "checkbox") {
        return setInputValues({ ...inputValues, [itemID]: checked });
      }
      setInputValues({ ...inputValues, [itemID]: value });
    };
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {initialValues.map(({ id, label, ...restInitialValues }) => (
          <FormInput
            key={`${id}`}
            label={label}
            placeholder={label}
            value={inputValues[id] || ""}
            onChange={onChange(id)}
            {...restInitialValues}
          />
        ))}
      </div>
      <input value={submitButtonText} type='submit' />
    </form>
  );
};

export default Form;

Form.propTypes = {
  initialValues: Proptypes.arrayOf(
    Proptypes.shape({
      name: Proptypes.string.isRequired,
      value: Proptypes.oneOfType([Proptypes.string, Proptypes.number]),
      type: Proptypes.string.isRequired,
      name: Proptypes.string.isRequired,
      checked: Proptypes.bool,
    })
  ),
  onSubmit: Proptypes.func,
  submitButtonText: Proptypes.string,
};
