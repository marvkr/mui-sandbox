import { Typography } from "@mui/material";
import Animal from "./components/Animal";
import useAnimals from "./hooks/getAnimals";
import Input from "@mui/material/Input";
import Box from "@mui/system/Box";

function App() {
  const { search, animals } = useAnimals();

  return (
    <>
      <main>
        <Box
          sx={{
            width: "100vw",
            display: "flex",
            justifyContent: "center",
          }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}>
            <Typography variant="h2" sx={{ color: "primary.main", my: 2 }}>
              Animal Farm
            </Typography>
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
        </Box>
      </main>
    </>
  );
}

export default App;
