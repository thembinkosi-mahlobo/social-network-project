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
      <div className="">
        <h1>Welcome to the Music blog</h1>
        <h2>So I have to say hell is full of musical amateurs!</h2>
      </div>
    </header>
  );
}
