import React from "react";
import {
  Navbar,
  Home,
  Info,
  Subscribers,
  Support,
  Travelers,
  Lounge,
  Footer,
  Search,
} from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Search />
      <Support />
      <Info />
      <Lounge />
      <Travelers />
      <Subscribers />
      <Footer />
    </div>
  );
};

export default App;
