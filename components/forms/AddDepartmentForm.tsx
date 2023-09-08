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
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddDepartmentFormV } from "@/lib/validations/form.validations";
import { z } from "zod";
import { useToast } from "../ui/use-toast";
import { AddDepartment } from "@/app/action/login";

const AddDepartmentForm = ({ onClose }: { onClose: () => void; }) => {
    const { toast } = useToast();
    const [isLoading, setIsLoading] = React.useState(false);
  const form = useForm({
    resolver: zodResolver(AddDepartmentFormV),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (value: z.infer<typeof AddDepartmentFormV>) => {
    setIsLoading(true);
    const datas = await AddDepartment({
      name: value.name
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
      onClose();
    }
    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-2"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-[500] text-[20px] leading-[24px]">
                Add Department Name <span className="text-[#FF0000]">*</span>
              </FormLabel>
              <FormControl>
                <Input
                disabled={isLoading}
                  type="text"
                  placeholder="enter add department name"
                  {...field}
                  className="h-[50px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="px-6 bg-[#4F5FF6] hover:bg-primary-600"
          disabled={isLoading}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default AddDepartmentForm;
