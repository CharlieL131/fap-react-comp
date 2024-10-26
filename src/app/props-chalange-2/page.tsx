import Avatar from "@/components/Avatar";

export default function Home() {
  const person = 
      {
        name: "Gregorio Y. Zara",
        imageId: "7vQD0f",
      }

  return (
    <Avatar person={person} size={100}/>
  );
}
