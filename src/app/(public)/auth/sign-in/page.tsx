import { Metadata } from "next";

import SignInPage from "@/features/auth/components/SignIn";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Access your Sigma Toolbox account.",
};

export default function page() {
  return <SignInPage />;
}
