import React, { useEffect } from "react";
import { Label } from "../ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { CompanyDetailsProps } from "@/app/(root)/cprofile/companydetails/edit/components/ClientComponents";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { getCitey, getState, postCompanyDetails } from "@/app/action/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { CompanyDetailForm } from "@/lib/validations/form.validations";
import { z } from "zod";
import { data } from "../chart/Doughnut";
import { useToast } from "../ui/use-toast";
import { usePathname } from "next/navigation";

interface selectStateProps {
  id: number;
  state_name: string;
}

interface selectCityProps {
  id: number;
  city_name: string;
}

const ProfileOverviewForm = ({ data, countryData }: CompanyDetailsProps) => {
  const { toast } = useToast();
  const path = usePathname();
  const [selectState, setSelectedSate] = React.useState<selectStateProps[]>();
  const [selectCity, setSelectCity] = React.useState<selectCityProps[]>();
  const [isLoading, setIsLoading] = React.useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const stateData = await getState({ countryid: data.Country_id });
      setSelectedSate(stateData);
      const citydata = await getCitey({ stateid: data.State_id });
      setSelectCity(citydata);
    };
    fetchData();
  }, []);

  const form = useForm({
    resolver: zodResolver(CompanyDetailForm),
    defaultValues: {
      name: data.name,
      designation: "CTO",
      email: data.email,
      contact_number: data.contact_no,
      street_address: data.streetaddress,
      CityId: data.City_id.toString(),
      CountryId: data.Country_id.toString(),
      StateId: data.State_id.toString(),
      zipcode: data.zipcode,
      CompanyName: data.company_name,
      website: data.website,
    },
  });

  async function onCountrySelect(
    e: string,
    fieldChnage: (value: string) => void
  ) {
    const data = await getState({ countryid: parseInt(e) });
    setSelectedSate(data);
    fieldChnage(e);
  }

  async function onStateselect(
    e: string,
    fieldChnage: (value: string) => void
  ) {
    const data = await getCitey({ stateid: parseInt(e) });
    setSelectCity(data);
    fieldChnage(e);
  }

  const onSubmit = async (value: z.infer<typeof CompanyDetailForm>) => {
    setIsLoading(true);
    const datas = await postCompanyDetails({
      id: data.id,
      type: 2,
      CityId: parseInt(value.CityId),
      CountryId: parseInt(value.CountryId),
      StateId: parseInt(value.StateId),
      CompanyName: value.CompanyName,
      contact_number: value.contact_number,
      email: value.email,
      name: value.name,
      street_address: value.street_address,
      website: value.website,
      zipcode: value.zipcode,
    });

    if (datas.status === "fail" || datas.status === "404") {
      toast({
        title: datas.message,
        duration: 1000,
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
    <div>
      <Form {...form}>
        <form
          //@ts-ignore
          onSubmit={form.handleSubmit(onSubmit)}
          onReset={() => form.reset()}
          className=" flex flex-col gap-2"
        >
          <div className="flex flex-wrap gap-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-[45%]">
                  <FormLabel>Profile Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      disabled={isLoading}
                      placeholder="Enter Profile Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="designation"
              render={({ field }) => (
                <FormItem className="w-[45%]">
                  <FormLabel>Designation</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      disabled={isLoading}
                      placeholder="Enter Designation"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-[45%]">
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      disabled
                      placeholder="Enter Email Address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contact_number"
              render={({ field }) => (
                <FormItem className="w-[45%]">
                  <FormLabel>Contact Number</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      disabled={isLoading}
                      placeholder="Enter Contact Number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="CompanyName"
              render={({ field }) => (
                <FormItem className="w-[45%]">
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      disabled={isLoading}
                      placeholder="Enter Contact Number"
                      {...field}
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
                <FormItem className="w-[45%]">
                  <FormLabel>website</FormLabel>
                  <FormControl>
                    <Input
                      type="url"
                      disabled={isLoading}
                      placeholder="Enter Contact Number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="street_address"
              render={({ field }) => (
                <FormItem className="w-[100%]">
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Textarea
                      disabled={isLoading}
                      placeholder="Enter Address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="CountryId"
              render={({ field }) => (
                <FormItem className="w-[32%]">
                  <FormLabel>Country</FormLabel>
                  <Select
                    onValueChange={(e) => onCountrySelect(e, field.onChange)}
                    defaultValue={field.value.toString()}
                    disabled={isLoading}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Country" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {countryData ? (
                        countryData.map((item) => (
                          <SelectItem value={item.id.toString()} key={item.id}>
                            {item.country_name}
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
              name="StateId"
              render={({ field }) => (
                <FormItem className="w-[32%]">
                  <FormLabel>State</FormLabel>
                  <Select
                    onValueChange={(e) => onStateselect(e, field.onChange)}
                    value={field.value.toString()}
                    defaultValue={field.value.toString()}
                    disabled={isLoading}
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
                              value={item.id.toString()}
                              key={item.id}
                            >
                              {item.state_name}
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
              name="CityId"
              render={({ field }) => (
                <FormItem className="w-[32%]">
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    {/* <Input placeholder="City" {...field} /> */}
                    <Select
                      onValueChange={field.onChange}
                      value={field.value.toString()}
                      defaultValue={field.value.toString()}
                      disabled={isLoading}
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
                                value={item.id.toString()}
                                key={item.id}
                              >
                                {item.city_name}
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
                <FormItem className="w-[32%]">
                  <FormLabel>Zip Code</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      type="text"
                      placeholder="Zip Code"
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
              disabled={isLoading}
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

export default ProfileOverviewForm;
