import { Route, Routes } from "react-router-dom";
import Login from "./Componet/Pages/Login";
import Dashboard from "./Componet/Pages/Dashboard";
import { GoogleOAuthProvider } from "@react-oauth/google";

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
      </Routes>
    </div>
  );
}

export default App;
