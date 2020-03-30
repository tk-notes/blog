type PersonAPI = {
  id: number,
  name: string,
  email: string
};

type Person = {
  id: number,
  name: string,
  email: string
};

const fromAPI = (person: PersonAPI): Person => ({
  id: person.id,
  name: person.name,
  email: person.email
});

const payloadAPI = {
  id: 1,
  name: 'TK',
  email: 'tk@mail.com'
};

const person = fromAPI(payloadAPI);
