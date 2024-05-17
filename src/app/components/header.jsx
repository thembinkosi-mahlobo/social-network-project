import Image from "next/image";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Home from "@/app/page";

export default function Header() {
  return (
    <header className="">
      <div className="flex items-center">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn />
        <UserButton />
        <SignedIn />
      </div>
      <div className="">
        <h1>Welcome to Music blog</h1>
        <h2>So you have hell is full of musical amateurs!</h2>
      </div>
      <div className="flex items-center">
        <Image
          src="/public/Theraphy.png"
          alt="Backgroung Image"
          height={300}
          width={300}
        />
      </div>
    </header>
  );
}
