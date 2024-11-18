import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "@/pages/Home";
import Header from "@/components/Header";
import Footer from '@/components/Footer';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:lang" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
