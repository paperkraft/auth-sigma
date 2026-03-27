import Subscription from "@/features/subscription/Subscription";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subscription & Billing",
  description: "Manage your current plan, billing history, and payment methods.",
};

export default function SubscriptionPage() {
  return <Subscription />;
}
