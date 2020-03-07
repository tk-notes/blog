function makeFunction() {
  const name = 'TK';
  function displayName() {
    console.log(name);
  }
  return displayName;
};

const myFunction = makeFunction();
myFunction(); // TK

// ------------------------------

const makeFunction = () => {
  const name = 'TK';
  return () => console.log(name);
};

const myFunction = makeFunction();
myFunction(); // TK

// ------------------------------

const makeFunction = (name = 'TK') => {
  return () => console.log(name);
};

const makeFunction = (name = 'TK') => () => console.log(name);

const myFunction = makeFunction();
myFunction(); // TK

const myFunction = makeFunction('Dan');
myFunction(); // Dan
