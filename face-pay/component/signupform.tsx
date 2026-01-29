"use client";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import Link from "next/link";

export function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="shadow-input mx-auto w-[100%] text-black rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-white">
      <h2 className="text-2xl text-center font-bold text-black ">
        Welcome to Face<span className='text-[#03b303] ' >Pay</span> || Create your account
      </h2>
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer >
            <Label className="!text-black" htmlFor="firstname">First name</Label>
            <Input className="!bg-gray-200 !text-black text-[1.3rem]" id="firstname" placeholder="Tyler"  type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label className="!text-black" htmlFor="lastname">Last name</Label>
            <Input className="!bg-gray-200 !text-black text-[1.3rem]" id="lastname" placeholder="Durden" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label className="!text-black" htmlFor="email">Email Address</Label>
          <Input className="!bg-gray-200 !text-black text-[1.3rem]" id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label className="!text-black" htmlFor="password">Password</Label>
          <Input className="!bg-gray-200 !text-black text-[1.3rem]" id="password" placeholder="••••••••" type="password" />
        </LabelInputContainer>
        <button
          className="group/btn relative block h-10 w-full rounded-md  shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] font-bold  cursor-pointer hover:scale-[1.02] transition-all duration-300  bg-[#02B203] text-white text-[1.3rem] "
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gray-200" />
        <div className="flex flex-col space-y-4">
          <button
            className="group/btn shadow-input relative flex h-10 w-full items-center justify-center space-x-2 rounded-md px-4 font-medium cursor-pointer hover:scale-[1.02] transition-all duration-300   bg-gray-700 text-white text-[1.3rem] flex items-center  "
            type="submit"
          >
            <IconBrandGoogle className="h-6 w-6 text-white  " />
            <span className="text-white !text-[1.35rem] font-semibold ">
             Login with Google
            </span>
            <BottomGradient />
          </button>
          <h3 className="text-2xl font-semibold text-center" >Already have an account? <Link href="/auth/login" className="text-[#03b303] font-semibold underline " >Login</Link></h3>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
