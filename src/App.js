import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import HomeThai from "./components/HomeThai"
import About from "./components/About"
import AboutThai from "./components/AboutThai"
import Affiliates from "./components/Affiliates"
import AffiliatesThai from "./components/AffilatesThai"
import MyCart from "./components/MyCart"
import MyCartThai from "./components/MyCartThai"
import SelfcollectKit from "./components/SelfcollectKit"
import Faq from "./components/Faq";
import FaqThai from "./components/FaqThai"
import SelfCollectKitsHPVProduct from "./components/self_collect_kits/SelfCollectKitsHPVProduct";
import SelfCollectKitsHPV from "./components/self_collect_kits/SelfCollectKitsHPV";
import SelfCollectKitsSTIKit from "./components/self_collect_kits/SelfCollectKitsSTIKit";
import SelfCollectKitsSTIOpen from "./components/self_collect_kits/SelfCollectKitsSTIOpen";
import Knowledge from "./components/Knowledge";
import KnowledgeThai from "./components/KnowledgeThai"
import KnowledgeBlog from "./components/KnowledgeBlog";
import KnowledgeBlogThai from "./components/KnowledgeBlogThai"

function App() {
  const language = localStorage.getItem("language");
  console.log(language + "=====language app")
  return (

    <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/affiliates" element={<Affiliates />} />
          <Route path="/mycart" element={<MyCart />} />
          <Route path="/knowledge" element={<Knowledge />} />
          <Route path="/knowledge/blog" element={<KnowledgeBlog />} />
          <Route path="/selfcollectkit" element={<SelfcollectKit />} />
          <Route path="/faqs" element={<Faq />} />
          <Route path="/selfcollectkit/hpv/product" element={<SelfCollectKitsHPVProduct />} />
          <Route path="/selfcollectkit/hpv" element={<SelfCollectKitsHPV />} />
          <Route path="/selfcollectkit/sti/kit" element={<SelfCollectKitsSTIKit />} />
          <Route path="/selfcollectkit/sti_open" element={<SelfCollectKitsSTIOpen />} />
      
          <Route path="/th" element={<HomeThai />} />
          <Route path="/th/aboutus" element={<AboutThai />} />
          <Route path="/th/affiliates" element={<AffiliatesThai />} />
          <Route path="/th/faqs" element={<FaqThai />} />
          <Route path="/th/knowledge" element={<KnowledgeThai />} />
          <Route path="/th/knowledge/blog" element={<KnowledgeBlogThai />} />
          <Route path="/th/mycart" element={<MyCartThai />} />
        </Routes>
      

    </BrowserRouter>

  )
}

export default App