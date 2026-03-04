"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getUserProfileQuery } from "@/queries/users";
import { useQuery } from "@tanstack/react-query";
import {
  Calendar,
  Edit,
  Link2,
  MapPin,
  MessageCircle,
  Plus,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import PostCard from "../cards/PostCard";
import FollowersSection from "./followers/FollowersSection";
import SheetFollowers from "./followers/FollowersSheet";
import { useState } from "react";
import SheetFollowing from "./following/SheetFollowing";

export default function ProfilePage() {
  const { t } = useTranslation();
  const [isSheet, setIsSheet] = useState(false);
  const [followingSheet, setFollowingSheet] = useState(false)
  const { data } = useQuery({
    ...getUserProfileQuery({}),
  });
  return (
    <Container className="p-10">
      <Card>
        <CardContent>
          <section className="flex gap-5 items-start w-full">
            <div className="h-28 w-28 shrink-0 rounded-2xl border border-zinc-200 bg-zinc-50 flex items-center justify-center">
              <Image
                src="/logo-dark.svg"
                alt="AX"
                width={80}
                height={80}
                priority
                className="object-contain"
              />
            </div>
            <div className="w-full">
              <Item className="p-0">
                <ItemContent>
                  <ItemTitle>Abdilazizov Xondamir</ItemTitle>
                  <ItemDescription>
                    @xondamir • Senior Frontend Developer
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Button>
                    <Plus /> {t("follow")}
                  </Button>
                  <Button variant={"secondary"}>
                    <MessageCircle /> {t("message")}
                  </Button>
                </ItemActions>
              </Item>
              <p className=" max-w-2xl mt-3">
                Building open-source tools for the modern web. Obsessed with
                performance, accessibility, and clean codebases. Currently
                crafting React components at ScaleDesign.
              </p>
              <div className="flex gap-3 items-center mt-3 text-sm ">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <MapPin size={"16px"} />
                  <span>Uzbekistan, Tashkent</span>
                </div>
                <div className="flex items-center gap-1">
                  <Link2 className="text-muted-foreground" size={"16px"} />
                  <Link
                    className="text-blue-500"
                    href={`https://xondamirxon.uz`}
                  >
                    xondamirxon.uz
                  </Link>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Calendar size={"16px"} />
                  <span>Joined March 1</span>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <Badge>FRONTEND</Badge>
                <Badge>TYPESCRIPT</Badge>
                <Badge>OPEN SOURCE</Badge>
              </div>
            </div>
          </section>
          <Separator className="mt-10" />

          <section className="flex justify-between items-center mt-3">
            <div className="flex gap-3 text-center">
              <div className="flex flex-col gap-1">
                <span className="text-sm font-bold">128</span>
                <span className="text-muted-foreground text-xs font-semibold">
                  {t("posts")}
                </span>
              </div>
              <div
                className="flex flex-col gap-1 cursor-pointer"
                onClick={() => setIsSheet(!isSheet)}
              >
                <span className="text-sm font-bold">12.4K</span>
                <span className="text-muted-foreground text-xs font-semibold">
                  {t("followers")}
                </span>
              </div>

              <div className="flex flex-col gap-1 cursor-pointer" onClick={() => setFollowingSheet(!followingSheet)}>
                <span className="text-sm font-bold">842</span>
                <span className="text-muted-foreground text-xs font-semibold">
                {t("following")}
                </span>
              </div>
            </div>
            <Button>
              <Edit />{t("edit_profile")}
            </Button>
          </section>
        </CardContent>
      </Card>
      <Tabs className="mt-5" defaultValue="posts">
        <TabsList variant={"line"}>
          <TabsTrigger value="posts" className="uppercase">
            {t("posts")}
          </TabsTrigger>
          <TabsTrigger value="about" className="uppercase">
            {t("about")}
          </TabsTrigger>
        </TabsList>
        <TabsContent className="mt-3" value="posts">
          <div className="grid grid-cols-4 gap-5">
            <PostCard />
          </div>
        </TabsContent>
      </Tabs>
      <SheetFollowers
        open={isSheet}
        onOpenChange={() => setIsSheet(!isSheet)}
      />
       <SheetFollowing
        open={followingSheet}
        onOpenChange={() => setFollowingSheet(!followingSheet)}
      />
    </Container>
  );
}
