import Animal from "./components/Animal";
import useAnimals from "./hooks/getAnimals";
import Input from "@mui/material/Input";
import Box from "@mui/system/Box";

function App() {
  const { search, animals } = useAnimals();

  return (
    <>
      <main>
        <h1>Animal Farm</h1>
        <Box sx={{ display: "flex" }}>
          <div className="base-Input-root">
            <Input
              className="base-Input-input"
              type="text"
              placeholder="Search"
              onChange={(e) => search(e.target.value)}
            />
          </div>
          <ul>
            {animals &&
              animals.map((animal) => <Animal key={animal.id} {...animal} />)}
            {!animals || (animals.length === 0 && "No animals found")}
          </ul>
        </Box>
      </main>
    </>
  );
}

export default App;
