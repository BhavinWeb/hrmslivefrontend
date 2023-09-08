import Image from "next/image";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { ScrollArea } from "../ui/scroll-area";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SocialLinklFormV } from "@/lib/validations/form.validations";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { z } from "zod";
import { postCompanyDetails } from "@/app/action/login";
import { CompanyDetailsProps } from "@/app/(root)/cprofile/companydetails/edit/components/ClientComponents";
import { useToast } from "../ui/use-toast";
import { Trash2, XCircle } from "lucide-react";

interface Props {
  SOCIALMEDIA: {
    icon: string;
    bgColor: string;
    href: string;
  }[];
  data: {
    id: number;
    company_name: string;
    name: string;
    email: string;
    streetaddress: string;
    Country_id: number;
    State_id: number;
    City_id: number;
    zipcode: string;
    contact_no: string;
    website: string;
    password: string;
    status: number;
    company_type: string;
    social_links: string;
  };
}

const SocialLink = ({ SOCIALMEDIA, data }: Props) => {
  const { toast } = useToast();

  const [isLoading, setIsLoading] = React.useState(false);

  const defaultValues = {
    Links: SOCIALMEDIA.filter((item) => {
      return { value: item.href };
    }),
  };

  const form = useForm({
    resolver: zodResolver(SocialLinklFormV),
    defaultValues,
  });

  const { fields, append, remove } = useFieldArray({
    name: "Links",
    control: form.control,
  });

  const onSubmit = async (value: z.infer<typeof SocialLinklFormV>) => {
    setIsLoading(true);
    const datas = await postCompanyDetails({
      id: data.id,
      type: 1,
      Links: value.Links,
    });
    if (datas.status === "fail" || datas.status === "404") {
      toast({
        title: datas.message,
        duration: 2000,
      });
    } else {
      toast({
        title: "Successfully Update Company details",
        duration: 1000,
      });
    }
    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <ScrollArea className="h-[350px] w-[100%]">
          {/* {SOCIALMEDIA.map((item) => (
          <>
            <div className="flex w-full gap-3">
              <div>
                <div
                  className={cn(
                    "rounded-full flex items-center justify-center w-10 h-10",
                    item.bgColor
                  )}
                >
                  <Image
                    src={item.icon}
                    alt="social mdeia"
                    width={22}
                    height={22}
                  />
                </div>
              </div>
              <div className="w-full">
                <Input type="text" value={item.href} />
              </div>
            </div>
          </>
        ))} */}
          {fields.map((field, index) => (
            <div key={field.id} className="flex w-full gap-3 m-2">
              <div>
                <div
                  className={cn(
                    "rounded-full flex items-center justify-center w-10 h-10",
                    field.bgColor
                  )}
                >
                  <Image
                    src={field.icon}
                    alt="social mdeia"
                    width={22}
                    height={22}
                  />
                </div>
              </div>
              <FormField
                control={form.control}
                key={field.id}
                name={`Links.${index}.href`}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input {...field} disabled={isLoading} type="url" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button onClick={() => { remove(index) }} size='icon' variant='ghost' type="button" className="mr-[7px]">
                  <XCircle className="w-6 h-6 text-indigo-500" />
              </Button>
            </div>
          ))}
        </ScrollArea>
        <div className="flex w-full justify-between">
          <Button
            disabled={isLoading}
            onClick={() =>
              append({
                href: "",
                bgColor: "bg-rose-500",
                icon: "/svg/globe.svg",
              })
            }
            className="flex gap-3 items-center bg-indigo-500 hover:bg-indigo-700 rounded-md"
          >
            Add New Link{" "}
            <Image src={"/svg/add.svg"} alt="add" width={14} height={14} />
          </Button>
          <Button
            disabled={isLoading}
            className="flex gap-3 items-center bg-indigo-500 hover:bg-indigo-700 rounded-md"
          >
            Save{" "}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SocialLink;
