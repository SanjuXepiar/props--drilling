// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Message } from "./pages/Message";
import { Friends } from "./pages/Friends";
import { useState } from "react";
function App() {
  const [userName, setUsername] = useState("SANJU SARKAR");
  return (
    <div className="App">
      <Router>
        <Link to="/">Home </Link>
        <Link to="/profile"> Profile </Link>
        <Link to="/message"> Messages </Link>
        <Link to="/friends"> Friends </Link>

        <Routes>
          <Route path="/" element={<Home userName={userName} />} />
          <Route
            path="/profile"
            element={<Profile userName={userName} setUsername={setUsername} />}
          />
          <Route path="/message" element={<Message />} />
          <Route path="/friends" element={<Friends />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
