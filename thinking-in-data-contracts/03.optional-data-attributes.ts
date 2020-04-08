type PersonAPI = {
  id: number,
  firstName: string,
  lastName?: string,
  email: string
};

type Person = {
  id: number,
  name: string,
  email: string
};

const buildPersonName = (person: PersonAPI): string =>
  person.lastName
    ? `${person.firstName} ${person.lastName}`
    : person.firstName;

const fromAPI = (person: PersonAPI): Person => {
  const name: string = buildPersonName(person);

  return {
    id: person.id,
    name,
    email: person.email
  };
};

const payloadAPI = {
  id: 1,
  firstName: 'TK',
  lastName: 'Kinoshita',
  email: 'tk@mail.com'
};

const person: Person = fromAPI(payloadAPI);

console.log(person);
