import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Overview from "./components/pages/Overview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/overview" exact element={<Overview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
