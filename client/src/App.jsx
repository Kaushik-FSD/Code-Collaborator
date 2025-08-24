import "./App.css";
import io from "socket.io-client";
import { useState } from "react";

const socket = io("http://localhost:9443");

const App = () => {
  const [joined, setJoined] = useState(false); // State to track if user has joined

  if (!joined) {
    return <div>User not joined</div>;
  }
  return <div>Welcome to Code Collaborator</div>;
};

export default App;
