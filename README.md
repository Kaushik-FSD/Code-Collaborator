# 📝 Real-Time Collaborative Code Editor  

A **real-time collaborative code editor** built with **Node.js, react.js, Socket.IO, and micro-editor**, enabling multiple users to edit the same document simultaneously with instant updates across all connected clients.  

This project demonstrates how to build **real-time applications** from scratch, handling socket communication, client synchronization, and editor integration.  

---

## 🚀 Features  
- Real-time collaboration (multiple users can type simultaneously)  
- Instant synchronization using **Socket.IO**  
- Integrated **micro-editor** for a clean and lightweight coding experience  
- Support for syntax highlighting (customizable)  
- Simple UI for ease of testing and demo  
- Scalable architecture – can be extended into a full product  

---

## 🛠️ Tech Stack  

### Backend  
- **Node.js** → Backend server handling socket connections  
- **Express.js** → Basic web server setup  
- **Socket.IO** → Real-time communication between server & clients  

### Frontend  
- **React.js** → Client-side rendering  
- **micro-editor** → Lightweight, embeddable code editor  
- **socket.io-client** → Handles communication with the backend  

---
### Future Enhancements

- Multiple file tabs support
- Syntax highlighting for popular languages
- Unique room links for private collaboration
- User cursors with different colors
- Code execution sandbox
- Authentication for secure sessions

---
### Learnings

**Building this project taught me:**

- How WebSockets enable low-latency communication
- How to integrate an editor like micro-editor into a real-time environment
- Handling synchronization issues between multiple clients
