"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { CompanyRegistrationformSchema } from "../../lib/validations/form.validations";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
import { createCompany, getCitey, getState } from "@/app/action/login";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useState } from "react";

interface Props {
  countryData: {
    id: string;
    countryname: string;
  }[];
}

interface selectStateProps {
  stateid: number;
  statename: string;
}

interface selectCityProps {
  cityid: number;
  cityname: string;
}

const CompanyRegistration = ({ countryData }: Props) => {
  const { toast } = useToast();
  const [selectState, setSelectedSate] = useState<selectStateProps[]>();
  const [selectCity, setSelectCity] = useState<selectCityProps[]>();

  const form = useForm({
    resolver: zodResolver(CompanyRegistrationformSchema),
    defaultValues: {
      ownername: "",
      companyname: "",
      contactnumber: "",
      email: "",
      streetaddress: "",
      city: "",
      state: "",
      zipcode: "",
      country: "",
      website: "",
    },
  });

  async function onCountrySelect(
    e: string,
    fieldChnage: (value: string) => void
  ) {
    // const data = await getState({ countryid: e });
    // setSelectedSate(data);
    // fieldChnage(e);
  }

  async function onStateselect(
    e: string,
    fieldChnage: (value: string) => void
  ) {
    const data = await getCitey({ stateid: parseInt(e) });
    setSelectCity(data);
    fieldChnage(e);
  }

  async function onSubmit(
    values: z.infer<typeof CompanyRegistrationformSchema>
  ) {
    // const data = await createCompany({ value: values });
    // if (data.status === "fail" || data.status === "404") {
    //   toast({
    //     title: data.message,
    //     duration: 1000
    //   });
    // } else {
    //   form.reset();
    //   toast({
    //     title: "Successfully Create Company",
    //     duration: 1000
    //   });
    // }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 sm:w-[62%] w-full"
      >
        <FormField
          control={form.control}
          name="ownername"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Owner Name</FormLabel>
              <FormControl>
                <Input placeholder="Owner Name" {...field} />
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
              <FormLabel>Company name</FormLabel>
              <FormControl>
                <Input placeholder="Company name" {...field} />
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
              <FormLabel>Company Contact number</FormLabel>
              <FormControl>
                <Input placeholder="Contact number" type="number" {...field} />
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
              <FormLabel>Company Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="streetaddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Street address</FormLabel>
              <FormControl>
                <Input placeholder="Street address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                {/* <FormControl>
                    <Input placeholder="Country" {...field} />
                </FormControl> */}
                <Select
                  onValueChange={(e) => onCountrySelect(e, field.onChange)}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Country" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {countryData ? (
                      countryData.map((item) => (
                        <SelectItem value={item.id} key={item.id}>
                          {item.countryname}
                        </SelectItem>
                      ))
                    ) : (
                      <SelectItem
                        value="no"
                        disabled
                        className="flex text-center"
                      >
                        No Option for select
                      </SelectItem>
                    )}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State</FormLabel>
                {/* <FormControl>
                    <Input placeholder="State" {...field} />
                </FormControl> */}
                <Select
                  onValueChange={(e) => onStateselect(e, field.onChange)}
                  value={field.value}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select State" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="max-h-[200px]">
                    {selectState ? (
                      selectState.map((item) => (
                        <>
                          <SelectItem
                            value={item.stateid.toString()}
                            key={item.stateid}
                          >
                            {item.statename}
                          </SelectItem>
                        </>
                      ))
                    ) : (
                      <SelectItem
                        value="no"
                        disabled
                        className="flex text-center"
                      >
                        No Option for select (first select country)
                      </SelectItem>
                    )}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  {/* <Input placeholder="City" {...field} /> */}
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select City" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="max-h-[200px]">
                      {selectCity ? (
                        selectCity.map((item) => (
                          <>
                            <SelectItem
                              value={item.cityid.toString()}
                              key={item.cityid}
                            >
                              {item.cityname}
                            </SelectItem>
                          </>
                        ))
                      ) : (
                        <SelectItem value="no" disabled>
                          No Option for select (first select State)
                        </SelectItem>
                      )}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="zipcode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Zip code</FormLabel>
                <FormControl>
                  <Input placeholder="Zip code" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Web site</FormLabel>
              <FormControl>
                <Input placeholder="Web site" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default CompanyRegistration;
