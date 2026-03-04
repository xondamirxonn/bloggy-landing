import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { MessageCircle, Plus } from "lucide-react";
import React from "react";

export default function FollowersSection() {
  return (
    <div>
      <Item variant={"muted"}>
        <ItemMedia>
          <Avatar>
            <AvatarImage src={""} />
            <AvatarFallback>DX</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Damirbek Xursanaliyev</ItemTitle>
          <ItemDescription>@damirbek</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button>
            <Plus /> Follow
          </Button>
          <Button variant={"outline"}>
            <MessageCircle /> Message
          </Button>
        </ItemActions>
      </Item>
    </div>
  );
}
