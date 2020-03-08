const buildSelector = (element, attribute, value) =>
  `${element}[${attribute}="${value}"]`;

buildSelector('input', 'data-testid', 123); // input[data-testid="123"]

const get = (element) => {
  return {
    withAttribute: (attribute) => {
      return {
        andValue: (value) => `${element}[${attribute}="${value}"]`,
      }
    }
  };
};

get('input')
  .withAttribute('data-testid')
  .andValue(123); // input[data-testid="123"]

const get = (element) => ({
  withAttribute: (attribute) => ({
    andValue: (value) => `${element}[${attribute}="${value}"]`,
  }),
});

const selector = get('input')
  .withAttribute('data-testid')
  .andValue(123);

selector; // input[data-testid="123"]
