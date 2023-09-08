import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangePasswordFormV } from "@/lib/validations/form.validations";
import { z } from "zod";
import { useToast } from "../ui/use-toast";
import { ChangePassword } from "@/app/action/login";

const ChangePasswordForm = ({ email }: { email: string }) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState(false);

  const form = useForm({
    resolver: zodResolver(ChangePasswordFormV),
    defaultValues: {
      oldpassword: "",
      newpassword: "",
      confirmpassword: "",
    },
  });

  const onSubmit = async (value: z.infer<typeof ChangePasswordFormV>) => {
    setIsLoading(true);
    const datas = await ChangePassword({
      email,
      oldpassword: value.oldpassword,
      newpassword: value.newpassword,
      confirmpassword: value.confirmpassword,
    });

    if (datas.status === "fail" || datas.status === "404") {
      toast({
        title: datas.message,
        duration: 3000,
      });
    } else {
      toast({
        title: "Successfully Update Company details",
        duration: 1000,
      });
      form.reset();
    }
    setIsLoading(false);
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" flex flex-col gap-4"
          onReset={() => form.reset()}
        >
          <div className="flex flex-wrap gap-2">
            <FormField
              control={form.control}
              name="oldpassword"
              render={({ field }) => (
                <FormItem className="w-[30%]">
                  <FormLabel>Old Password*</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      type="password"
                      placeholder="Enter Old Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="newpassword"
              render={({ field }) => (
                <FormItem className="w-[30%]">
                  <FormLabel>New Password*</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      type="password"
                      placeholder="Enter New Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmpassword"
              render={({ field }) => (
                <FormItem className="w-[30%]">
                  <FormLabel>Confirm Password*</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      type="password"
                      placeholder="Enter Confirm Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button
              disabled={isLoading}
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-700 rounded-md"
            >
              Update
            </Button>
            <Button
              disabled={isLoading}
              type="reset"
              className="bg-indigo-500 bg-opacity-20 hover:bg-indigo-500 hover:bg-opacity-30 rounded-md text-indigo-500 text-base font-semibold"
            >
              Cancel
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ChangePasswordForm;
