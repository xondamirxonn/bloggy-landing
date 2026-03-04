import { getUserProfile } from "@/api/users";

export function getUserProfileQuery(params: unknown) {
  return {
    queryKey: ["user_profile", params],
    queryFn: async () => getUserProfile(params),
  };
}
