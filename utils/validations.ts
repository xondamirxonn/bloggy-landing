import * as yup from "yup";
import i18n from "./i18n";
const schemaFieldTypes = {
  required: yup
    .string()
    .strict()
    .trim(i18n.t("required_field"))
    .required(i18n.t("required_field")),
  login: yup
    .string()
    .trim()
    .required("Email yoki username majburiy")
    .test(
      "email-or-username",
      "Email yoki username noto‘g‘ri formatda",
      (value) => {
        if (!value) return false;

        const emailRegex =
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const usernameRegex =
          /^[a-zA-Z0-9._-]{3,20}$/; 
          // 3–20 ta belgi, harf/raqam/._-

        return emailRegex.test(value) || usernameRegex.test(value);
      }
    ),
  phone: yup
    .string()
    .required(i18n.t("required_field"))
    .matches(/^\+998 \d{2} \d{3} \d{2} \d{2}$/, i18n.t("invalid_phone_number")),
  password: yup
    .string()
    .required(i18n.t("required_field"))
    .min(6, "Мин. 6 символов")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
      "Пароль должен содержать хотя бы одну букву и одну цифру",
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "passwords_must_match")
    .required(i18n.t("required_field")),
  expireDate: yup
    .string()
    .required(i18n.t("required_field"))
    .test("valid-expire", i18n.t("invalid_expire_date"), (value) => {
      if (!value) return false;

      const [mm, yy] = value.split("/").map(Number);
      if (!mm || !yy) return false;
      if (mm < 1 || mm > 12) return false;

      return true;
    }),
  cardNumber: yup
    .string()
    .required(i18n.t("required_field"))
    .matches(/^\d{4} \d{4} \d{4} \d{4}$/, i18n.t("invalid_card_number")),
};

export default schemaFieldTypes;
