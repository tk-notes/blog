describe('Content', () => {
  describe('in the rental context', () => {
    const defaultProps = {
      businessContext: BUSINESS_CONTEXT.RENTAL
    };

    it('renders the title and description for the first step', () => {
      const step = 0;
      const { getByText } = render(<Content {...defaultProps} step={step} />);

      expect(getByText('the first step title')).toBeInTheDocument();
      expect(getByText('the first step description')).toBeInTheDocument();
    });

    it('renders the title and description for the forth step', () => {
      const step = 3;
      const { getByText } = render(<Content {...defaultProps} step={step} />);

      expect(getByText('the last step title')).toBeInTheDocument();
      expect(getByText('the last step description')).toBeInTheDocument();
    });
  });

  describe('in the sales context', () => {
    const defaultProps = {
      businessContext: BUSINESS_CONTEXT.SALE
    };

    it('renders the title and description for the first step', () => {
      const step = 0;
      const { getByText } = render(<Content {...defaultProps} step={step} />);

      expect(getByText('the first step title')).toBeInTheDocument();
      expect(getByText('the first step description')).toBeInTheDocument();
    });

    it('renders the title and description for the last step', () => {
      const step = 6;
      const { getByText } = render(<Content {...defaultProps} step={step} />);

      expect(getByText('the last step title')).toBeInTheDocument();
      expect(getByText('the last step description')).toBeInTheDocument();
    });
  });

  it('has not accessibility violations', async () => {
    const props = {
      businessContext: BUSINESS_CONTEXT.SALE,
      step: 0,
      theme,
    };

    const { container } = render(<Content {...props} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
