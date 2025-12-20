import "@/App.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecentPostById from "@/pages/RecentPostById";
import Home from "@/pages/Home";
import TrendPostById from "@/pages/TrendPostById";


const basename = import.meta.env.BASE_URL;

function App() {
  return (
    <>
      <BrowserRouter basename={basename}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/postId/:documentId" element={<RecentPostById />} />
          <Route path="/postTrending/:documentId" element={<TrendPostById />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
