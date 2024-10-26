import Avatar from "@/components/Avatar";

export default function Home() {
  const person = 
      {
        name: "Katsuko Saruhashi",
        imageId: "YfeOqp2",
        profession: "geochemist",
        awards: ["Miyake Prize for geochemistry", "Tanaka Prize"],
        discoveries: ["a method for measuring carbon dioxide in seawater"]
      }

  return (
    <Avatar person={person} size={100}/>
  );
}
