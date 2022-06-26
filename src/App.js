import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { NotFound } from "./components/NotFound";
import { Home } from "./components/pages/homes/Home";
import { Prouduct } from "./components/pages/sub/Product";
import { Globalstyle } from "./globalstyle";
import { homeSectionDb } from "./reactDb";

function App() {
  return (
    <Router>
      <Globalstyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home homedb={homeSectionDb} />} />
        <Route path="/sub" element={<Prouduct />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
