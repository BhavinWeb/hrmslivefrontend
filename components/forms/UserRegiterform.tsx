"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { useToast } from "../ui/use-toast";

import { UserRegiterformSchema } from "@/lib/validations/form.validations";
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
import * as z from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { UserRegister, getRoles } from "@/app/action/login";
import { useUserModal } from "@/hooks/userModal";

interface GetRole {
  id: number;
  name: number;
  status: number;
}
const UserRegisterform = () => {
  const [getRole, setRole] = useState<GetRole[]>();
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();
  const userModal = useUserModal();

  const toggleVisibility = () => setIsVisible(!isVisible);

  useEffect(() => {
    const fetchData = async () => {
      const role = await getRoles();
      setRole(role);
    };
    fetchData();
  }, []);

  const form = useForm({
    resolver: zodResolver(UserRegiterformSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      roleid: "",
    },
  });

  const onSubmit = async (value: z.infer<typeof UserRegiterformSchema>) => {
    const data = await UserRegister(value);
    if (data.status !== "200") {
      toast({
        title: data.message,
        duration: 1000
      });
    } else {
      form.reset();
      userModal.onClose();
      toast({
        title: "Employe regiter successful",
        duration: 1000
      });
    }
  };

  return (
    <Form {...form}>
      <form
        // @ts-ignore
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-2"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="E-mail" {...field} />
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
              <FormLabel>Password</FormLabel>
              <FormControl>
                <div className="group flex flex-col data-[has-helper=true]:pb-4 w-full border-[1px] rounded-md hover:bg-none">
                  <div className="flex flex-col">
                    <div
                      className="relative w-full inline-flex flex-row items-center shadow-sm px-3 gap-3 data-[hover=true]:bg-default-200 group-data-[focus=true]:bg-default-100 h-unit-10 min-h-unit-10 rounded-medium transition-background motion-reduce:transition-none !duration-150 outline-none group-data-[focus-visible=true]:z-10 group-data-[focus-visible=true]:ring-2 group-data-[focus-visible=true]:ring-focus group-data-[focus-visible=true]:ring-offset-2 group-data-[focus-visible=true]:ring-offset-background hover:bg-none"
                      style={{ cursor: "text" }}
                    >
                      <div className="inline-flex h-full items-center w-full gap-1.5 box-border hover:bg-none">
                        <input
                          className="w-full h-full font-normal !bg-transparent outline-none placeholder:text-foreground-500 text-small hover:bg-none"
                          placeholder="Password"
                          type={isVisible ? "text" : "password"}
                          {...field}
                        />
                        <button
                          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 bg-none hover:bg-none"
                          type="button"
                          onClick={toggleVisibility}
                        >
                          {isVisible ? <Eye /> : <EyeOff />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="roleid"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role id</FormLabel>
              <Select
                onValueChange={field.onChange}
                value={field.value}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Role" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {getRole &&
                    getRole.map((item) => {
                      if (item.status == 2) return null;
                      return (
                        <SelectItem value={item.id.toString()} key={item.id}>
                          {item.name}
                        </SelectItem>
                      );
                    })}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full !mt-7">
          Register
        </Button>
      </form>
    </Form>
  );
};

export default UserRegisterform;
