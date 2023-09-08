"use client";

import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { UserSingupformSchema } from "@/lib/validations/form.validations";
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
import { Checkbox } from "@nextui-org/react";
import Link from "next/link";
import { createCompany } from "@/app/action/login";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

const UserSingupform = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);

  const form = useForm({
    resolver: zodResolver(UserSingupformSchema),
    defaultValues: {
      email: "",
      name: "",
      companyname: "",
      password: "",
      website: "",
      contactnumber: "",
      isCheck: false,
    },
  });

  const onSubmit = async (value: z.infer<typeof UserSingupformSchema>) => {
    setIsLoading(true);
    const data = await createCompany({ value });
    if (data.status === "fail" || data.status === "404") {
      toast({
        title: data.message,
        duration: 2000,
      });
    } else {
      form.reset();
      toast({
        title: "Successfully Create Company",
        duration: 1000,
      });
      router.push("/");
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
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-[500] text-[20px] leading-[24px]">
                  Your Name <span className="text-[#FF0000]">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    type="text"
                    placeholder="Please enter your username"
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
            name="companyname"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-[500] text-[20px] leading-[24px]">
                  Company Name <span className="text-[#FF0000]">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    type="text"
                    placeholder="Please enter your username"
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
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-[500] text-[20px] leading-[24px]">
                  Web Site Url <span className="text-[#FF0000]">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    type="url"
                    placeholder="Please enter your website url"
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
            name="contactnumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-[500] text-[20px] leading-[24px]">
                  Contact number <span className="text-[#FF0000]">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    placeholder="Contact number"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="isCheck"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Checkbox
                    isSelected={field.value}
                    onValueChange={field.onChange}
                  >
                    By signing up, you agree to our Privacy Policy
                  </Checkbox>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <div className="flex flex-row justify-between">
            <div className=" flex gap-2 items-center">
             
            </div>
          </div>*/}
        </div>
        <div className="flex flex-col gap-2">
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full !mt-5 bg-[#6390D4] hover:bg-primary-600"
          >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Sign Up
          </Button>
          <div className="flex items-center justify-center">
            <p>
              Already have an Account?{" "}
              <Link href="/userlogin" className="text-[#4F5FF6]">
                {" "}
                Sign In{" "}
              </Link>
            </p>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default UserSingupform;
