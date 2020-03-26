const getOnboardingStepContentV1 = ({ businessContext, step }) => {
  const content = onboardingStepsContent[businessContext][step];

  return content
    ? content
    : onboardingStepsContent[businessContext][0];
};

const getOnboardingStepContentV2 = ({ businessContext, step }) =>
  onboardingStepsContent[businessContext][step] ||
  onboardingStepsContent[businessContext][0];
