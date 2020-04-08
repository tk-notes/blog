type PersonAPI = {
  id: number,
  firstName: string,
  lastName?: string,
  email: string,
  status: string,
  lastVisit: Date
};

type Person = {
  id: number,
  name: string,
  email: string,
  active: boolean
};

enum PersonStatus {
  Active = 'active',
  Inactive = 'inactive'
};

const buildPersonName = (person: PersonAPI): string =>
  person.lastName
    ? `${person.firstName} ${person.lastName}`
    : person.firstName;

const getWeekAgo = (): Date => {
  const oneDayInMilliseconds: number = 24 * 3600 * 1000;
  const sevenDaysInMilliseconds: number = oneDayInMilliseconds * 7;

  return new Date(Date.now() - sevenDaysInMilliseconds);
};

const isActive = (person: PersonAPI): boolean => {
  const weekAgo: Date = getWeekAgo();
  const hasActiveStatus: boolean = person.status === PersonStatus.Active;
  const lastVisitInSevenDays: boolean = person.lastVisit >= weekAgo;

  return hasActiveStatus && lastVisitInSevenDays;
};

const fromAPI = (person: PersonAPI): Person => {
  const { id, email }: PersonAPI = person;
  const name: string = buildPersonName(person);
  const active: boolean = isActive(person);

  return {
    id,
    name,
    email,
    active
  };
};

const payloadAPI = {
  id: 1,
  firstName: 'TK',
  lastName: 'Kinoshita',
  email: 'tk@mail.com',
  status: 'active',
  lastVisit: new Date()
};

const person: Person = fromAPI(payloadAPI);

console.log(person);
