type PersonAPI = {
  id: number,
  name: string,
  lastname: string,
  email: string
};

type Person = {
  id: number,
  name: string,
  email: string
};

const fromAPI = (person: PersonAPI): Person => ({
  id: person.id,
  name: `${person.name} ${person.lastname}`,
  email: person.email
});

const payloadAPI = {
  id: 1,
  name: 'TK',
  lastname: 'Kinoshita',
  email: 'tk@mail.com'
};

const person = fromAPI(payloadAPI);
