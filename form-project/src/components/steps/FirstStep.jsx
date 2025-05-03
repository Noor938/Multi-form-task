import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "@tanstack/react-form";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { updatePersonalInfo } from "@/redux/formSlice";

const FirstStep= ({ onNext }) => {
  const dispatch = useDispatch();
  const formState = useSelector((state) => state.form);

  const form = useForm({
    defaultValues: formState.personalInfo,
    onSubmit: async ({ value }) => {
      dispatch(updatePersonalInfo(value));
      onNext();
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <CardContent className="space-y-6 pt-4">
        <div className="space-y-1">
          <Label htmlFor="firstName" className="text-2xl">
            First Name
          </Label>
          <form.Field
            name="firstName"
            validators={{
              onBlur: ({ value }) =>
                !value ? "First name is required" : undefined,
            }}
          >
            {(field) => (
              <>
                <Input
                  id="firstName"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  placeholder="Enter your first name"
                  className={`!py-5 ${
                    field.state.meta.errors ? "border-red-500" : ""
                  }`}
                />
                {field.state.meta.errors && (
                  <p className="text-sm text-red-500 mt-1">
                    {field.state.meta.errors}
                  </p>
                )}
              </>
            )}
          </form.Field>
        </div>

        {/* Last Name */}
        <div className="space-y-1">
          <Label htmlFor="lastName" className="text-2xl">
            Last Name
          </Label>
          <form.Field
            name="lastName"
            validators={{
              onBlur: ({ value }) =>
                !value ? "Last name is required" : undefined,
            }}
          >
            {(field) => (
              <>
                <Input
                  id="lastName"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  placeholder="Enter your last name"
                  className={`${
                    field.state.meta.errors ? "border-red-500" : ""
                  }`}
                />
                {field.state.meta.errors && (
                  <p className="text-sm text-red-500 mt-1">
                    {field.state.meta.errors}
                  </p>
                )}
              </>
            )}
          </form.Field>
        </div>

        {/* Email */}
        <div className="space-y-1">
          <Label htmlFor="email" className="text-2xl">
            Email
          </Label>
          <form.Field
            name="email"
            validators={{
              onBlur: ({ value }) => {
                if (!value) return "Email is required";
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return !emailRegex.test(value)
                  ? "Enter a valid email address"
                  : undefined;
              },
            }}
          >
            {(field) => (
              <>
                <Input
                  id="email"
                  type="email"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  placeholder="Enter your email"
                  className={`${
                    field.state.meta.errors ? "border-red-500" : ""
                  }`}
                />
                {field.state.meta.errors && (
                  <p className="text-sm text-red-500 mt-1">
                    {field.state.meta.errors}
                  </p>
                )}
              </>
            )}
          </form.Field>
        </div>
      </CardContent>

      <CardFooter className="flex justify-end gap-2">
        <Button type="submit" className="mt-4" disabled={!form.state.isValid}>
          Next
        </Button>
      </CardFooter>
    </form>
  );
};

export default FirstStep;
