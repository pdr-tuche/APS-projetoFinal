import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BasePages } from "./Pages/BasePages";
import { Home } from "./Pages/Home";
import { MinhasReservas } from "./Pages/MinhasReservas";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BasePages />}>
            <Route path="/" element={<Home />} />
            <Route path="/MinhasReservas" element={<MinhasReservas />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;