import SubscriptionUpgrade from "@/features/subscription/SubscriptionUpgrade";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upgrade Plan",
  description: "Explore premium features and choose a plan that scales with your needs.",
};

export default function UpgradePage() {
  return <SubscriptionUpgrade />;
}
