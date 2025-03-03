
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Class1 } from "./Pages/Class1/Class1";
import { NotFound } from "./Pages/NotFound/NotFound";
import { Header } from "./Layouts/Header/Header";


export const App = () => {
  return (
 <>
 <Header />
  <Routes>
    <Route path="/" element ={<Home />}/>
    <Route path="/class1" element ={<Class1 />}/>
    <Route path="*" element ={<NotFound />}/>
  </Routes>
 </>
  )
}
