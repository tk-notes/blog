type PersonAPI = {
  id: number,
  firstName: string,
  lastName: string,
  email: string
};

type Person = {
  id: number,
  name: string,
  email: string
};

const fromAPI = (person: PersonAPI): Person => ({
  id: person.id,
  name: `${person.firstName} ${person.lastName}`,
  email: person.email
});

const payloadAPI = {
  id: 1,
  firstName: 'TK',
  lastName: 'Kinoshita',
  email: 'tk@mail.com'
};

const person: Person = fromAPI(payloadAPI);

console.log(person);
