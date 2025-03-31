import "./App.css";
import Header from "./components/Header/Header";
import UserContainer from "./components/UserContainer/UserContainer";
import ChatContainer from "./components/ChatContainer/ChatContainer";
import ServerContainer from "./components/ServerContainer/ServerContainer";

function App() {
  return (
    <div className="flex flex-col w-screen max-h-screen h-fill bg-zinc-900">
      <Header />
      <main className="flex flex-row w-full h-full">
        <UserContainer />
        <ChatContainer />
        <ServerContainer />
      </main>
    </div>
  );
}

export default App;
