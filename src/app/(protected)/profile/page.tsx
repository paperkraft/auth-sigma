import Profile from "@/features/profile/Profile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile Information",
  description: "Manage your personal account details and preferences.",
};

export default function ProfilePage() {
  return <Profile />;
}
