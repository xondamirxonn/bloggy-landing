"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { XIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function SheetFollowing({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { t } = useTranslation();
  return (
    <div>
      <Sheet  open={open} onOpenChange={onOpenChange}>
        <SheetContent  className="w-full sm:w-[600px] sm:max-w-none">
          <SheetHeader>
            <SheetTitle>{t("following")}</SheetTitle>
          </SheetHeader>
          <Item>
            <ItemMedia>
              <Avatar>
                <AvatarFallback>DX</AvatarFallback>
              </Avatar>
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Damirbek Xursanaliyev</ItemTitle>
              <ItemDescription>@damirbek</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button  variant={"secondary"}>
                {t("unfollow")}
              </Button>
            </ItemActions>
          </Item>
          <ItemSeparator />
            <Item>
            <ItemMedia>
              <Avatar>
                <AvatarFallback>KS</AvatarFallback>
              </Avatar>
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Komronbek Sunnatov</ItemTitle>
              <ItemDescription>@komronbek</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button  variant={"secondary"}>
                {t("unfollow")}
              </Button>
            </ItemActions>
          </Item>
        </SheetContent>
      </Sheet>
    </div>
  );
}
