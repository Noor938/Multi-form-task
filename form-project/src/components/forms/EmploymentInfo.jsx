import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "@tanstack/react-form";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { updateEmploymentInfo } from "@/redux/formSlice";

const EmploymentInfo = ({ onNext, onBack }) => {
  const dispatch = useDispatch();
  const formState = useSelector((state) => state.form);

  const form = useForm({
    defaultValues: formState.employmentInfo,
    onSubmit: async ({ value }) => {
      dispatch(updateEmploymentInfo(value));
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
      <CardContent className="space-y-4 pt-4">
        {/* Company */}
        <div className="space-y-1">
          <Label htmlFor="company" className="text-2xl">
            Company
          </Label>
          <form.Field
            name="company"
            validators={{
              onBlur: ({ value }) =>
                !value ? "Company name is required" : undefined,
            }}
          >
            {(field) => (
              <>
                <Input
                  id="company"
                  placeholder="Enter your company name"
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

        {/* Position */}
        <div className="space-y-1">
          <Label htmlFor="position" className="text-2xl">
            Position
          </Label>
          <form.Field
            name="position"
            validators={{
              onBlur: ({ value }) =>
                !value ? "Position is required" : undefined,
            }}
          >
            {(field) => (
              <>
                <Input
                  id="position"
                  placeholder="Enter your position"
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

        {/* Years of Experience */}
        <div className="space-y-1">
          <Label htmlFor="yearsOfExperience" className="text-2xl">
            Years of Experience
          </Label>
          <form.Field
            name="yearsOfExperience"
            validators={{
              onBlur: ({ value }) =>
                !value ? "Years of experience is required" : undefined,
            }}
          >
            {(field) => (
              <>
                <Select
                  onValueChange={(value) => field.handleChange(value)}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                >
                  <SelectTrigger
                    id="yearsOfExperience"
                    className={`${
                      field.state.meta.errors ? "border-red-500" : ""
                    }`}
                  >
                    <SelectValue placeholder="Select years of experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-1">0-1 years</SelectItem>
                    <SelectItem value="1-3">1-3 years</SelectItem>
                    <SelectItem value="3-5">3-5 years</SelectItem>
                    <SelectItem value="5-10">5-10 years</SelectItem>
                    <SelectItem value="10+">10+ years</SelectItem>
                  </SelectContent>
                </Select>
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
        <Button type="button" variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button type="submit" disabled={!form.state.isValid}>
          Next
        </Button>
      </CardFooter>
    </form>
  );
};

export default EmploymentInfo;
