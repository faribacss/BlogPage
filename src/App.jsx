import "@/App.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostById from "@/pages/PostById";
import Home from "@/pages/Home";
import PostIdByTrending from "@/pages/PostIdByTrending";


const basename = import.meta.env.BASE_URL;

function App() {
  return (
    <>
      <BrowserRouter basename={basename}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/postId/:id" element={<PostById />} />
          <Route path="/postTrending/:id" element={<PostIdByTrending />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
