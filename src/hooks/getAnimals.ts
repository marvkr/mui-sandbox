import { useState, useEffect } from "react";

type AnimalType = {
  id: string;
  type: string;
  name: string;
  age: number;
};

const useAnimals = () => {
  const [animals, setAnimals] = useState<AnimalType[] | null>(null);

  useEffect(() => {
    const lastQuery = localStorage.getItem("lastQuery") || "";
    search(lastQuery);
  }, []);

  const search = async (q: string) => {
    const response = await fetch(
      "http://localhost:8080?" + new URLSearchParams({ q })
    );
    const data = await response.json();
    setAnimals(data);

    localStorage.setItem("lastQuery", q);
  };
  return { search, animals };
};

export default useAnimals;
