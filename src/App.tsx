import "./App.css";
import Header from "./components/Header";
import UserContainer from "./components/UserContainer";
import ChatContainer from "./components/ChatContainer.tsx";
import ServerContainer from "./components/ServerContainer";

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
