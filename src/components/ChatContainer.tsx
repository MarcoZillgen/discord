import { User } from "feather-icons-react";
import Message from "./Message";
import Searchbar from "./Searchbar";

const messages = [
  {
    user: {
      profile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMaBHbJ1s1YmIRv6VPLvKPUlYnwEsyF7bLbg&s",
      name: "JuliaYuli",
    },
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "Today",
  },
  {
    user: {
      profile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMaBHbJ1s1YmIRv6VPLvKPUlYnwEsyF7bLbg&s",
      name: "Marco",
    },
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "Today",
  },
  {
    user: {
      profile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMaBHbJ1s1YmIRv6VPLvKPUlYnwEsyF7bLbg&s",
      name: "JuliaYuli",
    },
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "Today",
  },
  {
    user: {
      profile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMaBHbJ1s1YmIRv6VPLvKPUlYnwEsyF7bLbg&s",
      name: "Marco",
    },
    message:
      "Lorem ipsum dolorLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit sit amet, consectetur adipiscing elit.",
    date: "Today",
  },
];

export default function ChatContainer() {
  return (
    <section className="flex flex-col w-3/5 h-full gap-2 p-2">
      <div className="flex items-center w-full gap-2 p-2 text-xl select-none text-zinc-100">
        <User className="text-zinc-400 size-4" />
        JuliaYuli
      </div>
      <div className="flex flex-col-reverse w-full h-[calc(100vh-172px)] gap-2 overflow-y-auto">
        {[...messages, ...messages, ...messages, ...messages]
          .reverse()
          .map((message, index) => (
            <Message
              key={index}
              message={message.message}
              date={message.date}
              user={message.user}
              ownMessage={message.user.name == "Marco"}
            />
          ))}
      </div>
      <Searchbar />
    </section>
  );
}
