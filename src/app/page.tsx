import AppLayout from "@/components/layout/app-layout";
import Home from "@/features/home/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Main command center for your water network simulation projects.",
};

export default function Page() {
  return (
    <AppLayout>
      <Home />
    </AppLayout>
  );
}
