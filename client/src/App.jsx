import "./App.css";
import io from "socket.io-client";
import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";

const socket = io("http://localhost:9443");

const App = () => {
  const [joined, setJoined] = useState(false); // State to track if user has joined
  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("// start code here");
  const [copySuccess, setCopySuccess] = useState("");
  const [users, setUsers] = useState([]);
  const [typing, setTyping] = useState("");

  const joinRoom = () => {
    console.log("Joining room: roomId", roomId, ", user-name", userName);
    if (roomId && userName) {
      socket.emit("join", { roomId, userName }); //send roomId and userName to server
      setJoined(true);
    }
  };

  const copyRoomId = () => {
    navigator.clipboard.writeText(roomId);
    setCopySuccess("Room Code Copied");
    setTimeout(() => setCopySuccess(""), 2000);
  };

  const leaveRoom = () => {
    console.log("Leaving room:", roomId);
  };

  const handleCodeChange = (newCode) => {
    // console.log("Code changed:", code);
    setCode(newCode);
  };

  if (!joined) {
    return (
      <div className="join-container">
        <div className="join-form">
          <h1>Join Code Room</h1>
          <input
            type="text"
            placeholder="Room Id"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
          />
          <input
            type="text"
            placeholder="Your Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button onClick={joinRoom}>Join Room</button>
        </div>
      </div>
    );
  }
  return (
    <div className="editor-container">
      <div className="sidebar">
        <div className="room-info">
          <h2>Code Room: {roomId}</h2>
          <button onClick={copyRoomId} className="copy-button">
            Copy Id
          </button>
          {copySuccess && <span className="copy-success">{copySuccess}</span>}
        </div>
        <h3>Users in Room:</h3>
        <ul>
          {/* {users.map((user, index) => (
            <li key={index}>{user.slice(0, 8)}...</li>
          ))} */}
          <li>Kaushik M</li>
        </ul>
        <p className="typing-indicator">user typing</p>
        <select
          className="language-selector"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="cpp">C++</option>
        </select>
        <button className="leave-button" onClick={leaveRoom}>
          Leave Room
        </button>
      </div>

      <div className="editor-wrapper">
        <Editor
          height={"100%"}
          defaultLanguage={language}
          language={language}
          value={code}
          onChange={handleCodeChange}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
          }}
        />
      </div>
    </div>
  );
};

export default App;
