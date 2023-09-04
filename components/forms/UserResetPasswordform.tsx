"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  UserResetPassword1formSchema,
  UserResetPassword2formSchema,
} from "@/lib/validations/form.validations";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import ResetPassword from "../modal/ResetPassword";
import { forgotPassword } from "@/app/action/login";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

const UserResetPasswordForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isOpen, onClose] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const typeform = !isVisible
    ? UserResetPassword1formSchema
    : UserResetPassword2formSchema;

  const form = useForm({
    resolver: zodResolver(typeform),
  });

  const onSubmit = async (value: z.infer<typeof typeform>) => {
    let data;
    setIsLoading(true);
    // onClose(true);
    if (!isVisible) {
      data = await forgotPassword({
        email: value.email,
        type: !isVisible ? 1 : 2,
      });
    } else {
      //@ts-ignore
      data = await forgotPassword({email: value.email,type: !isVisible ? 1 : 2,key: value?.verificationkey,password: value?.password,});
    }

    // const data = await Login(value);

    if (data.status === "fail") {
      toast({
        title: data.message,
        duration: 2000,
      });
    } else {
      if (!isVisible) {
        onClose(true);
      } else {
        toast({
          title: "Password reset successful",
          duration: 1000,
        });
        router.push("/");
      }
    }
    setIsLoading(false);
  };

  return (
    <>
      <ResetPassword
        isOpen={isOpen}
        onClose={() => {
          onClose(false);
          setIsVisible(true);
        }}
      />
      <Form {...form}>
        <form
          // @ts-ignore
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col justify-between h-full"
        >
          <div className="flex flex-col gap-5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-[500] text-[20px] leading-[24px]">
                    Email ID <span className="text-[#FF0000]">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      type="email"
                      placeholder="Please enter your email address"
                      {...field}
                      className="h-[50px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="verificationkey"
              render={({ field }) => (
                <FormItem className={`${!isVisible && "hidden"}`}>
                  <FormLabel className="font-[500] text-[20px] leading-[24px]">
                    Verification Key <span className="text-[#FF0000]">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      type="text"
                      placeholder="Please enter verification key"
                      {...field}
                      className="h-[50px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className={`${!isVisible && "hidden"}`}>
                  <FormLabel className="font-[500] text-[20px] leading-[24px]">
                    New Password <span className="text-[#FF0000]">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      type="password"
                      placeholder="Create your new password"
                      {...field}
                      className="h-[50px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full !mt-5 bg-[#6390D4] hover:bg-primary-600"
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Reset Password
            </Button>
            <div className="flex items-center justify-center">
              <p>
                Remember Password?{" "}
                <Link href="/userlogin" className="text-[#4F5FF6]">
                  {" "}
                  Sign In{" "}
                </Link>
              </p>
            </div>
          </div>
        </form>
      </Form>
    </>
  );
};

export default UserResetPasswordForm;
