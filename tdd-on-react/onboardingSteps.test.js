describe('getOnboardingStepContent', () => {
  describe('when it receives existent businessContext and step', () => {
    it('returns the correct content for the step in "alugar" businessContext', () => {
      const businessContext = 'alugar';
      const step = 0;

      expect(getOnboardingStepContent({ businessContext, step })).toMatchObject({
        Icon: Home,
        title: 'first step title',
        description: 'first step description',
      });
    });

    it('returns the correct content for the step in "vender" businessContext', () => {
      const businessContext = 'vender';
      const step = 5;

      expect(getOnboardingStepContent({ businessContext, step })).toMatchObject({
        Icon: ContractSign,
        title: 'last step title',
        description: 'last step description',
      });
    });
  });

  describe('when it receives inexistent step for a given businessContext', () => {
    it('returns the first step of "alugar" businessContext', () => {
      const businessContext = 'alugar';
      const step = 7;

      expect(getOnboardingStepContent({ businessContext, step })).toMatchObject({
        Icon: Home,
        title: 'first step title',
        description: 'first step description',
      });
    });

    it('returns the first step of "vender" businessContext', () => {
      const businessContext = 'vender';
      const step = 10;

      expect(getOnboardingStepContent({ businessContext, step })).toMatchObject({
        Icon: Home,
        title: 'first step title',
        description: 'first step description',
      });
    });
  });
});
