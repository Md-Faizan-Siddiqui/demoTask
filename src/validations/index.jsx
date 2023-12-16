import * as Yup from "yup";

export const loginValidation = Yup.object({
  cName: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
  phone: Yup.string().required("Required"),
  shift: Yup.string().required("Required"),
  //   checkbox: Yup.boolean()
  //     .is([true], "You need to accept the terms and conditions")
  //     .required("Required"),
});
