import { Route, Routes } from "react-router";
import Home from "./pages/home";
import UserDetails from "./pages/user-details";
import NotFound from "./pages/not-found";
import "./css/main.css";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user-details/:id" element={<UserDetails />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
