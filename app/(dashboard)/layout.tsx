import Logo from "@/components/Logo";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { ThemeToggler } from "@/components/ThemeToggler";
import { Button } from "@/components/ui/button";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  const afterSignOutUrl = process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_OUT_URL;

  return (
    <div className="flex flex-col min-h-screen min-w-full bg-background max-h-screen">
      <nav className="flex justify-between items-center border-b border-border h-16 px-4">
        <Logo />
        {/* <ThemeSwitcher /> */}
        <div className="flex gap-4 items-center">
          <ThemeToggler />
          <SignedIn>
            <UserButton afterSignOutUrl={afterSignOutUrl} />
          </SignedIn>
          <SignedOut>
            <Button asChild variant={"default"}>
              <SignInButton />
            </Button>
          </SignedOut>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
