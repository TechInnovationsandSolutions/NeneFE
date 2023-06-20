import { useState } from "react";

export function useCreateProduct(formSteps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function nextPage() {
    setCurrentStepIndex((index) => {
      if (index >= formSteps.length - 1) return index;
      return index + 1;
    });
  }

  function prevPage() {
    setCurrentStepIndex((index) => {
      if (index <= 0) return index;
      return index - 1;
    });
  }

  function goToPage(index) {
    setCurrentStepIndex(index);
  }

  return {
    currentStepIndex,
    currentForm: formSteps[currentStepIndex],
    prevPage,
    nextPage,
    formSteps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === formSteps.length - 1,
    goToPage,
  };
}
