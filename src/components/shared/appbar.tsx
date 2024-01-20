import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { SignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
const Appbar = () => {
  return (
    <div className="bg-violet-500 p-3 flex justify-between">
      <h1 className="text-3xl text-white">test-site</h1>

      <ul className="flex text-white items-center space-x-3 text-1xl ">
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/Contact Us">Contact Us</Link>
      </ul>
      <SignedIn>
        <UserButton afterSignOutUrl="/"></UserButton>
      </SignedIn>

      <SignedOut>
        <Button asChild className="rounded-lg size-lg mr-3 bg-blue-800  ">
          <Link href="/sign-in">Login</Link>
        </Button>
      </SignedOut>
    </div>
  );
};

export default Appbar;
