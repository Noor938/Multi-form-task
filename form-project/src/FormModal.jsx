import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";

import PersonalInfoForm from "@/components/forms/PersonalInfoForm";
import EmploymentInfoForm from "@/components/forms/EmploymentInfoForm";
import AdditionalInfoForm from "@/components/forms/AdditionalInfoForm";

const FormModal = ({ isOpen, onOpenChange }) => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, 3)); 
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1)); 
  };

  const handleSubmit = () => {
    console.log("Form submitted!");
    onOpenChange(false); 
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalInfoForm onNext={handleNext} />;
      case 2:
        return <EmploymentInfoForm onNext={handleNext} onBack={handleBack} />;
      case 3:
        return <AdditionalInfoForm onBack={handleBack} onSubmit={handleSubmit} />;
      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">
            {step === 1 && "Personal Information"}
            {step === 2 && "Employment Information"}
            {step === 3 && "Additional Information"}
          </DialogTitle>
        </DialogHeader>

        <Card className="border-none shadow-none">{renderStep()}</Card>
      </DialogContent>
    </Dialog>
  );
};

export default FormModal;
