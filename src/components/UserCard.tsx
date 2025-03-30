export default function UserCard({
  name,
  profile,
  selected = false,
}: {
  name: string;
  profile: string;
  selected?: boolean;
}) {
  return (
    <div
      className={
        "flex flex-row items-center gap-2 p-2 rounded-sm hover:bg-zinc-800 cursor-pointer transition-all duration-150 ease-in-out" +
        (selected ? " bg-zinc-700" : "")
      }
    >
      <img src={profile} className="object-cover rounded-full size-6" />
      <p className="text-zinc-100">{name}</p>
    </div>
  );
}
