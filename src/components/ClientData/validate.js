// eslint-disable-next-line import/no-anonymous-default-export
export default function (values) {
  const errors = {};
  const requiredFields = ["name", "email", "sex"];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = "Campo obrigatório";
    }
  });
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = "Email inválido";
  }
  return errors;
}
