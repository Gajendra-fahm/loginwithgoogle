import { Route, Routes } from "react-router-dom";
import Login from "./Componet/Pages/Login";
import Dashboard from "./Componet/Pages/Dashboard";
import { GoogleOAuthProvider } from "@react-oauth/google";

import DashboarHead from "./Componet/Common/DashboarHead";
import ProductList from "./Componet/Pages/ProductList";
import Home from "./Componet/Contextapi/Home";

function App() {
  const GoogleAuthWrapped = () => {
    return (
      <GoogleOAuthProvider clientId={`${process.env.REACT_APP_CLIENT_ID}`}>
        <Login></Login>
      </GoogleOAuthProvider>
    );
  };
  return (
    <div>
      <Routes>
        <Route path="/login" element={<GoogleAuthWrapped />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Home/>} />
        <Route 
          path="/product"
          element={
            <DashboarHead pageTitle="Product List">
              <ProductList/>
            </DashboarHead>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
