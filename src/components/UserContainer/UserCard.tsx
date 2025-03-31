import { useSelection } from "../../store/selection";

export default function UserCard({
  name,
  profile,
  userId,
}: {
  name: string;
  profile: string;
  userId: string;
}) {
  const { setSelectedUser, selectedChat } = useSelection();

  return (
    <div
      onClick={() => setSelectedUser(userId)}
      className={`flex flex-row items-center gap-2 p-2 rounded-sm cursor-pointer transition-all duration-150 ease-in-out ${
        selectedChat !== null &&
        "user" in selectedChat &&
        selectedChat.user === userId
          ? "bg-zinc-700"
          : ""
      }`}
    >
      <img src={profile} className="object-cover rounded-full size-6" />
      <p className="text-zinc-100">{name}</p>
    </div>
  );
}
