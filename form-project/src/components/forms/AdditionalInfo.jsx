import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "@tanstack/react-form";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { resetForm, updateAdditionalInfo } from "@/redux/formSlice";

const AdditionalInfo = ({ onBack, onSubmit }) => {
  const dispatch = useDispatch();
  const formState = useSelector((state) => state.form);

  const form = useForm({
    defaultValues: formState.additionalInfo,
    onSubmit: async ({ value }) => {
      dispatch(updateAdditionalInfo(value));
      console.log("Final form submission:", {
        ...formState.personalInfo,
        ...formState.employmentInfo,
        ...value,
      });
      dispatch(resetForm());
      onSubmit();
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <CardContent className="space-y-4 pt-4">
        {/* Skills */}
        <div className="space-y-1">
          <Label htmlFor="skills" className="text-2xl">
            Skills
          </Label>
          <form.Field
            name="skills"
            validators={{
              onBlur: ({ value }) =>
                !value ? "Please enter your skills" : undefined,
            }}
          >
            {(field) => (
              <>
                <Input
                  id="skills"
                  placeholder="Enter your skills"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
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

        {/* About */}
        <div className="space-y-1">
          <Label htmlFor="about" className="text-2xl">
            About
          </Label>
          <form.Field
            name="about"
            validators={{
              onBlur: ({ value }) =>
                !value ? "Tell us something about yourself" : undefined,
            }}
          >
            {(field) => (
              <>
                <Textarea
                  id="about"
                  placeholder="Tell us about yourself"
                  rows={4}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
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

      <CardFooter className="flex justify-end gap-2 mt-4">
        <Button type="button" variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button type="submit" disabled={!form.state.isValid}>
          Submit
        </Button>
      </CardFooter>
    </form>
  );
};

export default AdditionalInfo;
