import React, { useState } from "react";
import FormInput from "../../form-input/form-input.component";
import { capitalize } from "../../../utils/common/functions";
import { useDispatch, useSelector } from "react-redux";
import { addAdvert } from "../../../store/adverts/adverts.thunk";
import CustomButton from "../../custom-button/custom-button.component";

import "./create-advert-form.styles.css";

const initialState = {
  name: "",
  sale: false,
  price: 0,
  tags: "lifestyle",
  photo: "",
};

const CreateAdvertForm = ({ initialValues, onSubmit }) => {
  const advertTags = useSelector((state) => state.adverts.tags);
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState(initialState);

  const handleChange = (e) => {
    const { value, type, name, files, checked } = e.target;

    if (type === "checkbox") {
      return setFormValues({ ...formValues, [name]: checked });
    }

    if (type === "file") {
      return setFormValues({ ...formValues, [name]: files[0] });
    }
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAdvert(formValues));
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div>
        <h1>Create Advert</h1>
      </div>
      <FormInput
        label='name'
        name='name'
        type='input'
        value={formValues.name}
        onChange={handleChange}
      />

      <div className='custom-form-input'>
        <label>Sale</label>
        <select name='sale' value={formValues.sale} onChange={handleChange}>
          <option value='true'>true</option>
          <option value='false'>false</option>
        </select>
      </div>

      <div className='custom-form-input'>
        <label>Pick a tag:</label>
        <select name='tags' value={formValues.tags} onChange={handleChange}>
          {advertTags.map((tags) => {
            return (
              <option key={`${tags}`} value={tags}>
                {capitalize(tags)}
              </option>
            );
          })}
        </select>
      </div>

      <FormInput
        label='price'
        name='price'
        type='number'
        values={formValues.name}
        onChange={handleChange}
      />
      <div className='custom-form-input'>
        <label>Photo:</label>
        <input
          name='photo'
          type='file'
          values={formValues.name}
          onChange={handleChange}
        />
      </div>

      <CustomButton label='Create' type='submit' />
    </form>
  );
};

export default CreateAdvertForm;
