import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AccountPage({ currentUser, setUsers }) {
  const [email, setEmail] = useState(currentUser?.email || "");
  const [password, setPassword] = useState(currentUser?.password || "");
  const navigate = useNavigate();

  // Update function
  const handleUpdate = (e) => {
    e.preventDefault();
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.email === currentUser.email ? { ...user, email, password } : user
      )
    );
    alert("Account updated successfully!");
  };

  // Logout function
  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="card p-4">
      <h2 className="mb-4">Account Information</h2>

      {/* Account details form for update */}
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary me-2">
          Update
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleLogout}
        >
          Logout
        </button>
      </form>
    </div>
  );
}

export default AccountPage;
