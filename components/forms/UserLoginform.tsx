"use client";

import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { UserLoginformSchema } from "@/lib/validations/form.validations";
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
import { Login } from "@/app/action/login";
// import { Checkbox } from "../ui/checkbox";
import { Checkbox } from "@nextui-org/react";
import { Label } from "../ui/label";
import Link from "next/link";
import { Loader2 } from "lucide-react";

const UserLoginform = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState(false);

  const form = useForm({
    resolver: zodResolver(UserLoginformSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (value: z.infer<typeof UserLoginformSchema>) => {
    setIsLoading(true);
    const data = await Login(value);

    if (data.status === "fail") {
      toast({
        title: data.message,
        duration: 2000,
      });
    } else {
      toast({
        title: "Successfully login",
        duration: 1000,
      });
    }
    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form
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
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-[500] text-[20px] leading-[24px]">
                  Password <span className="text-[#FF0000]">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    type="password"
                    placeholder="Please enter your password"
                    {...field}
                    className="h-[50px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-row justify-between">
            <div className=" flex gap-2 items-center">
              <Checkbox id="me" className="p-0">
                Remember me
              </Checkbox>
            </div>
            <div>
              <Link href="/resetpassword" className="text-[#4F5FF6]">
                {" "}
                Forgot Password?{" "}
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full !mt-5 bg-[#6390D4] hover:bg-primary-600"
          >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Sign In
          </Button>
          <div className="flex items-center justify-center">
            <p>
              Don’t have Account?{" "}
              <Link href="/signup" className="text-[#4F5FF6]">
                {" "}
                Sign Up{" "}
              </Link>
            </p>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default UserLoginform;
