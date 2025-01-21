import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import AccountPage from "./AccountPage";

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <Router>
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route
            path="/login"
            element={
              <LoginPage users={users} setCurrentUser={setCurrentUser} />
            }
          />
          <Route
            path="/register"
            element={<RegisterPage setUsers={setUsers} />}
          />
          <Route
            path="/account"
            element={
              <AccountPage currentUser={currentUser} setUsers={setUsers} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
