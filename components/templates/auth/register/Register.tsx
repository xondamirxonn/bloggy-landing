import { register } from "@/api/auth";
import { GoogleIcon } from "@/components/icons/GoogleIcon";
import { BaseInput } from "@/components/ui/base-input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Spinner } from "@/components/ui/spinner";
import createSchema from "@/helpers/createSchema";
import useHookForm from "@/hooks/useHookForm";
import { AUTH_REGISTER_PAYLOAD } from "@/types/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
const values = {
  email: "",
  password: "",
  confirmPassword: "",
  firstName: "",
  lastName: "",
};
const schema = createSchema({
  email: "login",
  password: "password",
  confirmPassword: "confirmPassword",
  firstName: "required",
  lastName: "required",
});
export default function Register() {
  const { t } = useTranslation();
  const form = useHookForm(values, schema);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const submit = async (data: any) => {
    setLoading(true);
    const payload = {
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await register(payload);
      if (res) {
        router.push(`/auth?method=signin`);
      }
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="max-w-md">
      <FormProvider {...form}>
        <div className="flex flex-col items-start gap-1 mb-2 mt-1">
          <h1 className="font-semibold text-3xl">{t("register_title")}</h1>
          <p className="text-muted-foreground text-lg">
            {t("register_description")}
          </p>
        </div>
        <form
          onSubmit={form.handleSubmit(submit)}
          className="flex flex-col gap-3"
        >
          <div className="grid grid-cols-2 gap-3">
            <BaseInput name="firstName" label={t("firstName")} placeholder="" />
            <BaseInput name="lastName" label={t("lastName")} placeholder="" />
            <div className="col-span-2">
              <BaseInput name="email" label={t("email")} placeholder="" />
            </div>
            <BaseInput
              name="password"
              label={t("password")}
              type="password"
              placeholder={t("password_placeholder")}
            />
            <BaseInput
              name="confirmPassword"
              label={t("confirmPassword")}
              type="password"
              placeholder={t("password_placeholder")}
            />
          </div>
          <Button type="submit" disabled={loading}>
            {loading ? <Spinner /> : t("register")}
          </Button>
        </form>
        <div className="flex flex-col gap-2 pt-3">
          <div className="flex items-center gap-3">
            <Separator className="flex-1" />
            <span className="text-sm text-muted-foreground whitespace-nowrap">
              OR
            </span>
            <Separator className="flex-1" />
          </div>
          <Button className="w-full gap-2" variant="outline">
            <GoogleIcon className="h-5 w-5" />
            {t("continue_with_google")}
          </Button>
        </div>
        <div className="flex items-center gap-1 text-xs justify-center mt-4 text-center">
          <p>{t("already_have_an_account")}:</p>
          <Link className="text-blue-500" href={`auth?method=signin`}>
            {t("login")}
          </Link>
        </div>
      </FormProvider>
    </div>
  );
}
