"use client";

import { GoogleIcon } from "@/components/icons/GoogleIcon";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Activity } from "react";
import { useTranslation } from "react-i18next";
import LoginPage from "./login/LoginPage";
import Register from "./register/Register";
export default function AuthPage() {
  const { t } = useTranslation();
  const router = useRouter();
  const params = useSearchParams();
  const method = params.get("method") || "";
  return (
    <div className=" min-h-dvh bg-[url('/login-bg2.webp')] bg-cover bg-no-repeat sm:bg-bottom-right bg-bottom-left flex items-center">
      <Container className="p-3">
          <Image
            src="/logo-dark.svg"
            width={120}
            height={120}
            priority
            alt="logo"
          />
        <Activity mode={!method ? "visible" : "hidden"}>
          <div className="flex flex-col justify-start sm:w-[40%] w-auto gap-2 mt-5">
            <h1 className="font-semibold text-3xl">
              Where developers suffer together
            </h1>
            <p className="text-muted-foreground text-lg">
              We know how hard it is to be a developer. It doesn't have to be.
              Personalized news feed, dev community and search, much better than
              what's out there. Maybe;)
            </p>
          </div>
          <div className="mt-6 max-w-sm space-y-4">
            <Button className="w-full gap-2" variant="outline">
              <GoogleIcon className="h-5 w-5" />
              {t("continue_with_google")}
            </Button>

            <div className="flex items-center gap-3">
              <Separator className="flex-1" />
              <span className="text-sm text-muted-foreground whitespace-nowrap">
                OR
              </span>
              <Separator className="flex-1" />
            </div>
            <Button
              onClick={() => router.push(`auth?method=signup`)}
              className="w-full gap-2"
              variant="outline"
            >
              <Mail className="h-5 w-5" />
              {t("continue_with_email")}
            </Button>
          </div>
          <div className="flex items-center gap-1 text-xs justify-center mt-4 sm:w-[30%]">
            <p>{t("already_have_an_account")}:</p>
            <Link className="text-blue-500" href={`auth?method=signin`}>
              {t("login")}
            </Link>
          </div>
        </Activity>
        <Activity mode={method === "signup" ? "visible" : "hidden"}>
          <Register />
        </Activity>
        <Activity mode={method === "signin" ? "visible" : "hidden"}>
          <LoginPage />
        </Activity>
      </Container>
    </div>
  );
}
