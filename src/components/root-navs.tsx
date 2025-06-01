import { Routes, Route } from "react-router";
import Home from "../pages/home";
import CategoryPage from "../pages/category-page";
import PlatformPage from "../pages/platform-page";
import SortByPage from "../pages/sortby-page";
import DetailPage from "../pages/detail-page";
// import About from "../pages/about";



const RootNavs = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="category/:id" element={<CategoryPage />} />
      <Route path="platform/:id" element={<PlatformPage />} />
      <Route path="sort-by/:id" element={<SortByPage />} />
      <Route path="detail/:id" element={<DetailPage />} />

    </Routes>

  )
}

export default RootNavs