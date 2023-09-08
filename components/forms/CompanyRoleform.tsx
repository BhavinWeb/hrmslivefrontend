"use client";

import { CompanyRoleformSchema } from "@/lib/validations/form.validations";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import * as z from "zod";
import { useToast } from "../ui/use-toast";
import { CreateRole, updateRole } from "@/app/action/login";
import { userListColums } from "@/app/(root)/rolelist/components/columns";
import { useRoleModal } from "@/hooks/roleModal";
import { Switch } from "../ui/switch";

interface Props {
  data?: userListColums;
}

const CompanyRoleform: React.FC<Props> = ({ data }) => {
  const { toast } = useToast();
  const roleModal = useRoleModal();

  const form = useForm({
    resolver: zodResolver(CompanyRoleformSchema),
    defaultValues: {
      name: data?.name || "",
      status: data?.status.toString() || "1",
    },
  });

  const onSubmit = async (value: z.infer<typeof CompanyRoleformSchema>) => {
    let repos;

    if (data && data.id != 0) {
      repos = await updateRole({
        name: value.name,
        status: value.status,
        id: data.id,
      });
    } else {
      repos = await CreateRole(value);
    }

    if (repos.status === "fail" || repos.status === "404") {
      toast({
        title: repos.message,
        duration: 1000
      });
    } else {
      toast({
        title: data && data.id != 0 ? "Successfully Update role" : "Successfully Create role",
        duration: 1000
      });
    }
    roleModal.onClose();
  };

  return (
    <Form {...form}>
      <form
        //@ts-ignore
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-full"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Role name</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Enter Company Role"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <FormControl>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <Label htmlFor="RoleOnOff" className="cursor-pointer">OFF</Label>
                  <Switch
                    id="RoleOnOff"
                    checked={field.value === "1" ? true : false}
                    onCheckedChange={(e) => {
                      e ? field.onChange("1") : field.onChange("2");
                    }}
                  />{" "}
                  <Label htmlFor="RoleOnOff" className="cursor-pointer">ON </Label>
                </FormItem>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          {data && data.id != 0 ? "Updated" : "Submit"}
        </Button>
      </form>
    </Form>
  );
};

export default CompanyRoleform;
