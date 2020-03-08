const json = {
  "users": [
    {
      "id": 1,
      "name": "TK",
      "age": 25,
      "email": "tk@mail.com"
    },
    {
      "id": 2,
      "name": "Kaio",
      "age": 11,
      "email": "kaio@mail.com"
    },
    {
      "id": 3,
      "name": "Daniel",
      "age": 28,
      "email": "dani@mail.com"
    }
  ]
};

const startEngine = (json) => (attributes) => ({ from: from(json, attributes) });

const buildAttributes = (node) => (acc, attribute) => ({ ...acc, [attribute]: node[attribute] });

const executeQuery = (attributes, attribute, value) => (resultList, node) =>
  node[attribute] === value
    ? [...resultList, attributes.reduce(buildAttributes(node), {})]
    : resultList;

const where = (json, attributes) => (attribute, value) =>
  json
    .reduce(executeQuery(attributes, attribute, value), []);

const from = (json, attributes) => (node) => ({ where: where(json[node], attributes) });

const select = startEngine(json);

const result = select(['id', 'name'])
  .from('users')
  .where('id', 1);

result; // [{ id: 1, name: 'TK' }]
