export default function Message({
  message,
  date,
  user,
  ownMessage = false,
}: {
  message: string;
  date: string;
  user: {
    profile: string;
    name: string;
  };
  ownMessage?: boolean;
}) {
  return (
    <div
      className={`flex items-start gap-2 ${
        ownMessage ? "flex-row-reverse" : ""
      }`}
    >
      <img
        src={user.profile}
        alt={user.name}
        className="w-8 h-8 rounded-full select-none text-zinc-600"
      />
      <div
        className={`flex flex-col p-2 rounded-sm max-w-[calc(100%-120px)] px-4 text-zinc-100 bg-zinc-800 ${
          ownMessage ? "ml-auto" : ""
        }`}
      >
        {!ownMessage && (
          <div className="flex justify-between gap-1 select-none">
            <span className="select-none text-zinc-400">{user.name}</span>
            <span className="text-zinc-400">{date}</span>
          </div>
        )}
        {message}
      </div>
    </div>
  );
}
