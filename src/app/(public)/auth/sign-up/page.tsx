import { Metadata } from "next";

import SignUpPage from "@/features/auth/components/SignUp";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create your Sigma Toolbox account and start simulating.",
};

export default function page() {
  return <SignUpPage />;
}
