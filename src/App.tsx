import React from "react";
import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";

const App: React.FC = () => (
  <ChatEngine
    height="100vh"
    projectID={process.env.REACT_APP_PROJECT_ID}
    userName={process.env.REACT_APP_USER_NAME}
    userSecret={process.env.REACT_APP_USER_SECRET}
    renderChatFeed={(chatAppProps: any) => <ChatFeed {...chatAppProps} />}
  />
);

export default App;
