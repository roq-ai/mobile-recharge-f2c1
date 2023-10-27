import * as yup from 'yup';

export const rechargeValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  currency: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
