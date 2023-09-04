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

const ChangePasswordForm = () => {
  const form = useForm();
  return (
    <div>
      <Form {...form}>
        <form className=" flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            <FormField
              control={form.control}
              name="oldpassword"
              render={({ field }) => (
                <FormItem className="w-[30%]">
                  <FormLabel>Old Password*</FormLabel>
                  <FormControl>
                    <Input
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
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-700 rounded-md"
            >
              Update
            </Button>
            <Button
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
