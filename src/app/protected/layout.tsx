import { ClerkProvider, UserButton, SignedIn } from "@clerk/nextjs";
import { SignOut } from "@/components/custom/SignOut";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "My dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <nav>
        <UserButton />
        <SignedIn>
          <SignOut />
        </SignedIn>
      </nav>
      <div>{children}</div>
    </ClerkProvider>
  );
}
