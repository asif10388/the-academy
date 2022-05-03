import { Routes, Route } from "react-router-dom";

import Home from "./routes/home";
import Courses from "./routes/courses";
import Checkout from "./routes/checkout";
import Authentication from "./routes/auth";

import Header from "./comps/Header";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="courses/*" element={<Courses />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
