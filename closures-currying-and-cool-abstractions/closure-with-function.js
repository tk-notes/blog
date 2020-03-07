const makeFunction = (name = 'TK') => {
  const display = () => console.log(name);
  return () => display();
};

const myFunction = makeFunction();
myFunction(); // TK
