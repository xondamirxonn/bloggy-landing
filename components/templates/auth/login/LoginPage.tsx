import { login } from "@/api/auth";
import { GoogleIcon } from "@/components/icons/GoogleIcon";
import { BaseInput } from "@/components/ui/base-input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Spinner } from "@/components/ui/spinner";
import createSchema from "@/helpers/createSchema";
import useHookForm from "@/hooks/useHookForm";
import Link from "next/link";
import { useState } from "react";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie"
import { useRouter } from "next/navigation";
const values = {
  username: "",
  password: "",
};
const schema = createSchema({
  username: "login",
  password: "password",
});

export default function LoginPage() {
  const { t } = useTranslation();
  const form = useHookForm(values, schema);
  const [loading, setLoading] = useState(false);
  const router = useRouter()
  const submit = async (data: any) => {
    setLoading(true);
    const payload = {
      username: data?.username,
      password: data?.password,
    };

    try {
    const res  = await login(payload);
    if(res) {
      Cookies.set("access_token", res.access_token)
      Cookies.set("refresh_token", res.refresh_token)
      router.push("/profile")
    }
    
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="max-w-md">
      <FormProvider {...form}>
        <div className="flex flex-col items-start gap-1 mb-2 mt-1">
          <h1 className="font-semibold text-3xl">{t("login_title")}</h1>
          <p className="text-muted-foreground text-lg">
            {t("login_description")}
          </p>
        </div>
        <form
          onSubmit={form.handleSubmit(submit)}
          className="flex flex-col gap-3"
        >
          <BaseInput name="username" label={t("email")} placeholder="" />
          <BaseInput
            name="password"
            label={t("password")}
            type="password"
            placeholder={t("password_placeholder")}
          />
          <Button type="submit">{loading ? <Spinner /> : t("login")}</Button>
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
          <p>{t("not_a_member_yet")}:</p>
          <Link className="text-blue-500" href={`auth?method=signup`}>
            {t("register")}
          </Link>
        </div>
      </FormProvider>
    </div>
  );
}
