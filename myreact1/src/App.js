import Cart from "./component/Cart";
import CartProcess from "./component/CartProcess";
import CreateOrder from "./component/CreateOrder";
import Navbar from "./component/Navbar";
import MySteps from "./component/MySteps";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <MySteps/> */}
        <Routes>
          {/* <Route path="/CreateOrder" element={<CreateOrder/>}/> */}
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/CartProcess" element={<CartProcess/>}/>
          <Route path="/CreateOrder" element={<CreateOrder/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
