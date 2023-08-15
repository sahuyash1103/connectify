import { object, string, array, number } from "yup";

export const validateSigupData = async (data) => {
  const maxYear = new Date().getFullYear();

  const schema = object({
    name: string().min(3).max(50).required(),
    email: string().min(10).max(255).required().email(),
    password: string().min(8).max(255).required(),
    phone: string().min(10).max(10).required(),
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
