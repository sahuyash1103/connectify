import { object, string, array, number } from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const validateSigupData = async (data) => {
  const maxYear = new Date().getFullYear();

  const schema = object({
    name: string().min(3).max(50).required(),
    email: string().min(10).max(255).required().email(),
    password: string().min(8).max(255).required(),
    phone: string()
      .required("required")
      .matches(phoneRegExp, 'Phone number is not valid')
      .min(10, "too short")
      .max(10, "too long").required(),
    about: string().max(255).nullable(),
    skills: array().of(string().min(3).max(10)).nullable(),
    education: array()
      .of(
        object({
          institute: string().min(3).max(50).required(),
          startYear: number().min(1900).max(maxYear).required(),
          endYear: number().min(1900).max(maxYear).required(),
          degree: string().min(3).max(50).required(),
        })
      )
      .nullable(),
  });

  try {
    await schema.validate(data);
  } catch (err) {
    return err;
  }
};

export const validateLoginData = async (data) => {
  const schema = object({
    email: string().min(10).max(255).required().email(),
    password: string().min(8).max(255).required(),
  });

  try {
    await schema.validate(data);
  } catch (err) {
    return err;
  }
};

export const validateUserUpdateData = async (dataToUpdate) => {
  let maxYear = new Date().getFullYear();

  const schema = object({
    name: string().min(3).max(50),
    email: string().min(10).max(255).email(),
    password: string().min(8).max(255),
    phone: string()
      .required("required")
      .matches(phoneRegExp, 'Phone number is not valid')
      .min(10, "too short")
      .max(10, "too long"),
    skills: array().of(string().min(3).max(10)),
    about: string().max(255),
    education: array().of(
      object({
        institute: string().min(3).max(50),
        startYear: number().min(1900).max(maxYear),
        endYear: number().min(1900).max(maxYear),
        degree: string().min(3).max(50),
      })
    ),
  });

  try {
    await schema.validate(dataToUpdate);
  } catch (err) {
    return err;
  }
}