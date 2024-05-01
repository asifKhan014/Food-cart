"use client";
import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  const { user, isSignedIn } = useUser();
  return (
    <div className="flex justify-between align-center p-6 md:px-12 shadow-sm">
      <Link href="/">
        <Image src="/logo.png" alt="logo" height={200} width={200} />
      </Link>

      <div className="hidden md:flex border p-2 rounded-lg bg-gray-100 w-96">
        <input type="text" className="bg-transparent w-full outline-none" />
        <Search className="text-primary"/>
      </div>
      {isSignedIn ? (
        <UserButton />
      ) : (
        <div className="flex gap-2">
          <SignInButton mode="modal">
            <Button variant="outline">Login</Button>
          </SignInButton>

          <SignUpButton mode="modal">
            <Button> SignUp</Button>
          </SignUpButton>
        </div>
      )}
    </div>
  );
};

export default Header;
