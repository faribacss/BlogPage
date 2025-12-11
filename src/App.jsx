import "@/App.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BrowserRouter, Route, Routes } from "react-router";
import PostById from "@/pages/PostById";
import Home from "@/pages/Home";
import PostIdByTrending from "@/pages/PostIdByTrending";

function App() {
  return (
    <>
      <BrowserRouter>
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
