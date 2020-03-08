const add = (x, y) => x + y;
add(1, 2); // 3

const add = (x) => {
  function addY(y) {
    return x + y;
  }

  return addY;
}

add(10)(20); // 30

const add = (x) => {
  return (y) => {
    return x + y;
  }
}

add(10)(20); // 30

const add = (x) => (y) => x + y;

add(10)(20); // 30

const addTen = add(10);
addTen(20); // 30

const increment = add(1);
increment(9); // 10

