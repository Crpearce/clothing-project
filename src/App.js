import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const Shop = () => {
    return <h1>I am the shop page</h1>;
  };

  return (
    <Routes>
      <Route path="/home" element={<Home />}>
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
