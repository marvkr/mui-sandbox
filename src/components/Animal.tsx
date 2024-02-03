interface AnimalProps {
  type: string;
  name: string;
  age: number;
}

function Animal({ type, name, age }: AnimalProps) {
  return (
    <li className="mb-2">
      <strong className="mr-2">{type}</strong>
      {name} ({age} years old)
    </li>
  );
}

export default Animal;
