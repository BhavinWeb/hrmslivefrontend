"use client";

import { UserUpdatedformSchema } from "@/lib/validations/form.validations";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
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
import { useToast } from "../ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { UserUpdate, getRoles } from "@/app/action/login";
import { useParams, useRouter } from "next/navigation";
import { useUserModal } from "@/hooks/userModal";

interface GetRole {
  id: number;
  name: number;
  status: number;
}

const UserUpdateForm = ({
  data,
}: {
  data: { name: string; email: string; role_id: number } | null;
}) => {
  const [getRole, setRole] = useState<GetRole[]>();
  const { toast } = useToast();
  const params = useParams();
  const router = useRouter();
  const userModal = useUserModal();

  useEffect(() => {
    const fetchData = async () => {
      const role = await getRoles();
      setRole(role);
    };
    fetchData();
  }, []);

  const form = useForm({
    resolver: zodResolver(UserUpdatedformSchema),
    defaultValues: {
      name: data?.name || "",
      email: data?.email || "",
      roleid: data?.role_id.toString() || "",
    },
  });

  const onSubmit = async (value: z.infer<typeof UserUpdatedformSchema>) => {
    let data;
    data = await UserUpdate({
      name: value.name,
      email: value.email,
      roleid: value.roleid,
    });
    if (data.status !== "200") {
      toast({
        title: data.message,
        duration: 1000
      });
    } else {
      form.reset();
      userModal.onClose();
      toast({
        title: "Update Employe successful",
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
                <Input type="email" placeholder="E-mail" {...field} disabled />
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
                  {/* <Input type="number" placeholder="Role Id" {...field} /> */}
                  <SelectTrigger>
                    <SelectValue
                      defaultValue={field.value}
                      placeholder="Select Role"
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {getRole &&
                    getRole.map((item) => (
                      <SelectItem value={item.id.toString()} key={item.id}>
                        {item.name}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full !mt-7">
          Update user
        </Button>
      </form>
    </Form>
  );
};

export default UserUpdateForm;
