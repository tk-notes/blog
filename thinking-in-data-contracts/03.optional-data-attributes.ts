type PersonAPI = {
  id: number,
  nome: string,
  sobrenome?: string,
  email: string
};

type Person = {
  id: number,
  name: string,
  email: string
};

const buildPersonName = (person: PersonAPI): string =>
  person.sobrenome
    ? `${person.nome} ${person.sobrenome}`
    : person.nome;

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
  nome: 'TK',
  sobrenome: 'Kinoshita',
  email: 'tk@mail.com'
};

const person: Person = fromAPI(payloadAPI);
