import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import "./style.css";
import validate from "./validate";
import { FormHelperText } from "@mui/material";
import { useMediaQuery } from "@mui/material";

let ContactForm = (props) => {
  const { handleSubmit } = props;
  const isLayoutMedium = useMediaQuery(
    "(min-width: 720px) and (max-width: 1139px)"
  );

  return (
    <form onSubmit={handleSubmit}>
      <div className="div-container">
        <Field
          name="name"
          component={renderTextField}
          label="Nome"
          type="text"
          placeholder="Nome do cliente aqui"
          isLayoutMedium={isLayoutMedium}
        />
        <Field
          name="email"
          component={renderTextField}
          label="Email"
          type="email"
          placeholder="Digite seu email aqui"
          isLayoutMedium={isLayoutMedium}
        />
        <Field name="sex" component={renderSelectField} label="Sexo">
          <MenuItem value="masculino">Masculino</MenuItem>
          <MenuItem value="feminino">Feminino</MenuItem>
        </Field>
      </div>
    </form>
  );
};

const renderTextField = ({
  input,
  label,
  type,
  isLayoutMedium,
  placeholder,
  meta: { touched, invalid, error },
}) => {
  const textFieldStyle = isLayoutMedium ? { width: "48%" } : {};

  return (
    <TextField
      {...input}
      label={label}
      type={type}
      fullWidth={!isLayoutMedium}
      error={touched && invalid}
      helperText={touched && error}
      InputLabelProps={{
        shrink: true,
      }}
      placeholder={placeholder}
      style={textFieldStyle}
    />
  );
};

const renderSelectField = ({
  input,
  label,
  children,
  meta: { touched, invalid, error },
}) => (
  <Box sx={{ minWidth: 200 }}>
    <FormControl fullWidth error={touched && invalid}>
      <InputLabel htmlFor="sexo" shrink={true}>
        Sexo
      </InputLabel>
      <Select
        {...input}
        label={label}
        placeholder="Selecione"
        error={touched && invalid}
      >
        <MenuItem value="" disabled>
          Selecione
        </MenuItem>
        {children}
      </Select>
      {touched && error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  </Box>
);

export default reduxForm({
  form: "contact",
  validate,
})(ContactForm);
