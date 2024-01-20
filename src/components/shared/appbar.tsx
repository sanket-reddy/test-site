import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { SignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

const Appbar = () => {
  return (
    <div className="bg-violet-500 p-3 flex justify-between">
      <h1 className="text-2xl text-white">TEST-SITE</h1>

      <ul className=" hidden  md:flex text-white items-center space-x-3 text-1xl ">
        <Link href="/home" className="hover:text-black hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:text-black hover:underline">
          About
        </Link>
        <Link href="/Contact Us" className="hover:text-black hover:underline">
          Contact Us
        </Link>
      </ul>
      <div className="flex items-center">
        <SignedIn>
          <UserButton afterSignOutUrl="/"></UserButton>
        </SignedIn>

        <SignedOut>
          <Button asChild className="rounded-lg size-lg mr-3 bg-blue-800  ">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Image
                src="/hamburger.png"
                alt="hamburger"
                width={40}
                height={40}
              ></Image>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>TEST-SITE</SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col items-center">
                    <Link
                      href="/home"
                      className="hover:text-red-500 hover:underline"
                    >
                      Home
                    </Link>
                    <Link
                      href="/about"
                      className="hover:text-red-500 hover:underline"
                    >
                      About
                    </Link>
                    <Link
                      href="/Contact Us"
                      className="hover:text-red-500 hover:underline"
                    >
                      Contact Us
                    </Link>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
