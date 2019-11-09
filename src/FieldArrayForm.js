import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import validate from "./validate";
import Output from "./Output";

const renderField = ({ label, input, type, meta: { touched, error } }) => {
  console.log(input);
  //pass the input prop is necessary for it to work
  return <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
}

const renderMembers = ({ fields }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>
        Add Member
      </button>
    </li>
    {fields.map((fieldName, index) => {
      console.log(fieldName);
      return (
        <li key={index}>
          <button
            type="button"
            title="Remove Member"
            onClick={() => fields.remove(index)}
          />
          <h4>Member #{index + 1}</h4>
          <Field
            name={`${fieldName}.firstName`} //fieldName = members[i] it helps me to write the value in the correct child
            type="text"
            component={renderField}
            label="First Name"
          />
          <Field
            name={`${fieldName}.lastName`}
            type="text"
            component={renderField}
            label="Last Name"
          />
        </li>)
    })}
  </ul>
);

const FieldArrayForm = ({ handleSubmit, submitting, pristine, reset }) => (
  <form onSubmit={handleSubmit}>
    <Field
      name="clubName"
      type="text"
      component={renderField}
      label="Club Name"
    />
    <FieldArray name="members" component={renderMembers} />
    <div>
      <button type="submit" disabled={submitting}>
        Submit
      </button>
      <button type="button" disabled={pristine || submitting} onClick={reset}>
        Clear
      </button>
    </div>
    <Output />
  </form>
);

export default reduxForm({
  form: "myForm",
  validate
})(FieldArrayForm);
