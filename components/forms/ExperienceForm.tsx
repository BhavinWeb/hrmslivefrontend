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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const ExperienceForm = () => {
  const form = useForm();
  return (
    <div>
      <Form {...form}>
        <form className=" flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            <FormField
              control={form.control}
              name="jobtitle"
              render={({ field }) => (
                <FormItem className="w-[100%]">
                  <FormLabel>Job Title</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter Job Title"
                      {...field}
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
                <FormItem className="w-[46%]">
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter Company Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="experienceyear"
              render={({ field }) => (
                <FormItem className="w-[20%]">
                  <FormLabel>Experience Year</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Year" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="2021">2021</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="To"
              render={({ field }) => (
                <FormItem className="w-[20%] flex items-end justify-end gap-3">
                  <FormLabel className="mb-4">To</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Year" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="2021">2021</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="jobdescription"
              render={({ field }) => (
                <FormItem className="w-[100%]">
                  <FormLabel>Job Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter Job Description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-between">
            <div>
              <Button
                type="button"
                className="text-white text-base font-semibold bg-red-400 hover:bg-red-500 rounded-md"
              >
                Add New
              </Button>
            </div>
            <div className="flex gap-3">
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
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ExperienceForm;
