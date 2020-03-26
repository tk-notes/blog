const onboardingStepsContent = {
  alugar: {
    0: {
      Icon: Home,
      title: 'first step title',
      description: 'first step description',
    },
    // ...
  },
  vender: {
    0: {
      Icon: Home,
      title: 'first step title',
      description: 'first step description',
    },
    // ...
  },
};

export const getOnboardingStepContent = ({ businessContext = defaultBusinessContext, step = 0 } = {}) =>
  onboardingStepsContent[businessContext][step] ||
  onboardingStepsContent[businessContext][0];

const Content = ({ businessContext, step }) => {
  const {
    Icon,
    title,
    description,
  } = getOnboardingStepContent({ businessContext, step });

  return (
    <Fragment>
      <Icon />
      <h1>{title}</h1>
      <p>{description}</p>
    </Fragment>
  );
};
