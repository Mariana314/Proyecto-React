
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home/Home";
import { Class1 } from "./components/Pages/Class1/Class1";
import { NotFound } from "./components/Pages/NotFound/NotFound";
import { Header } from "./components/Layouts/Header/Header";
import { Class2 } from "./components/Pages/Class2/Class2";
import { Class3 } from "./components/Pages/Class3/Class3";

export const App = () => {
  return (
 <>
 <Header />
  <Routes>
    <Route path="/" element ={<Home />}/>
    <Route path="/class1" element ={<Class1 />}/>
    <Route path="/class2" element ={<Class2 />}/>
    <Route path="/class3" element ={<Class3 />}/>
    <Route path="*" element ={<NotFound />}/>
  </Routes>
 </>
  )
}
