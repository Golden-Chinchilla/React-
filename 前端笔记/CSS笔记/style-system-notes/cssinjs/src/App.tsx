import "./App.css";
import { Button } from "./components/Button";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Button type="primary" size="small">
        Primary
      </Button>
    </>
  );
}

export default App;
