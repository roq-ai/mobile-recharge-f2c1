import * as yup from 'yup';

export const accountValidationSchema = yup.object().shape({
  balance: yup.number().integer().required(),
  currency: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
