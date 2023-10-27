import * as yup from 'yup';

export const transactionValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  currency: yup.string().required(),
  user_id: yup.string().nullable().required(),
  account_id: yup.string().nullable().required(),
});
