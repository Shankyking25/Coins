
import './App.css';
import { Routes, Route,  useLocation } from "react-router-dom";

import Wallets from "./Wallets/header"
import Coins from "./Lists/Coins"



function App() {
  return (
    <>
    
    <Routes>

          <Route path="/" element={<Wallets />} />

    

        <Route path="/coins" element={<Coins />} />

       
      

</Routes>
</>
  );
}

export default App;
