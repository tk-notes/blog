# Typescript Learnings

## Object destructuring

It's a common feature to destructure objects in JavaScript. For example, imagine we have a `Person` object. It looks like:

```javascript
const person = {
  firstName: 'TK',
  age: 24,
  email: 'tk@mail.com',
  isLearning: true
};
```

And when we use it, sometimes we want to destructure the object to get the attributes.

```javascript
const { firstName, age, email, isLearning } = person;
```

In Typescript, it works the same way. But with types. So let's type the attributes. At first I thought I could add the type after each attribute. Something like:

```typescript
const { firstName: string, age: number, email: string, isLearning: boolean } = person;
```

But it actually doesn't compile that way. We don't specify a type for each attribute, we specify the object type. We could add this way:

```typescript
const {
  firstName,
  age,
  email,
  isLearning
}: {
  firstName: string,
  age: number,
  email: string,
  isLearning: boolean
} = person;
```

Or we could have a `Person` type (or interface) to handle these types.

```typescript
type Person = {
  firstName: string,
  age: number,
  email: string,
  isLearning: boolean
};
```

And use it in the object destructuring:

```typescript
const { firstName, age, email, isLearning }: Person = person;
```

Implementing a `type` is cool because we could also use it in the `person` definition:

```typescript
const person: Person = {
  firstName: 'TK',
  age: 24,
  email: 'tk@mail.com',
  isLearning: true
};
```

### Resources

- [StackOverflow: Types in object destructuring](https://stackoverflow.com/a/39672914/3159162)
