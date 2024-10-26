import Avatar from "@/components/Avatar";
import Card from "@/components/Card";

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
    <Card>
      <Avatar person={person} size={100}/>
    </Card>
  );
}
