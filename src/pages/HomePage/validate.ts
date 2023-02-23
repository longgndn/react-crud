import yup from "libs/yup";

export const validateSchema = () => {
  return yup.object().shape({
    name: yup.string().required("hihi"),
    price: yup.number().required(),
    desc: yup.string().required(),
    rate: yup.number().required(),
  });
};
