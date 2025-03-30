import BlackBox from "./BlackBox";
import CategoryCard from "./CategoryCard";
import UserCard from "./UserCard";

const exampleUsers = [
  {
    name: "JuliaYuli",
    profile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMaBHbJ1s1YmIRv6VPLvKPUlYnwEsyF7bLbg&s",
  },
  {
    name: "JuliaYuli",
    profile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMaBHbJ1s1YmIRv6VPLvKPUlYnwEsyF7bLbg&s",
  },
  {
    name: "JuliaYuli",
    profile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMaBHbJ1s1YmIRv6VPLvKPUlYnwEsyF7bLbg&s",
  },
  {
    name: "JuliaYuli",
    profile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMaBHbJ1s1YmIRv6VPLvKPUlYnwEsyF7bLbg&s",
  },
  {
    name: "JuliaYuli",
    profile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMaBHbJ1s1YmIRv6VPLvKPUlYnwEsyF7bLbg&s",
  },
  {
    name: "JuliaYuli",
    profile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMaBHbJ1s1YmIRv6VPLvKPUlYnwEsyF7bLbg&s",
  },
  {
    name: "JuliaYuli",
    profile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMaBHbJ1s1YmIRv6VPLvKPUlYnwEsyF7bLbg&s",
  },
  {
    name: "JuliaYuli",
    profile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMaBHbJ1s1YmIRv6VPLvKPUlYnwEsyF7bLbg&s",
  },
];

export default function UserContainer() {
  return (
    <section className="flex flex-col w-1/5 h-[calc(100vh-56px)] gap-2 p-2 select-none">
      {/* call users */}
      <BlackBox className="flex-col w-full max-h-1/3">
        <CategoryCard name="Call" open>
          {exampleUsers.map((user, index) =>
            index == 0 ? (
              <UserCard
                key={index}
                name={user.name}
                profile={user.profile}
                selected
              />
            ) : (
              <UserCard key={index} name={user.name} profile={user.profile} />
            )
          )}
        </CategoryCard>
      </BlackBox>
      {/* all users */}
      <BlackBox className="flex-col flex-grow">
        <CategoryCard name="Online" open>
          {exampleUsers.map((user, index) => (
            <UserCard key={index} name={user.name} profile={user.profile} />
          ))}
        </CategoryCard>
        <CategoryCard name="Offline" open>
          {exampleUsers.map((user, index) => (
            <UserCard key={index} name={user.name} profile={user.profile} />
          ))}
        </CategoryCard>
      </BlackBox>
    </section>
  );
}
