import Profile from "@/components/Profile";

export default function PropsChalange1() {
  const cientists = [
      {
          name: "Maria Skłodowska-Curie",
          imageId: "szV5sdG",
          profession: "physicist and chemist",
          awards: ["Nobel Prize in Physics", "Nobel Prize in Chemistry", "Davy Medal", "Matteucci Medal"],
          discoveries: ["polonium (chemical element)"]
      },
      {
        name: "Katsuko Saruhashi",
        imageId: "YfeOqp2",
        profession: "geochemist",
        awards: ["Miyake Prize for geochemistry", "Tanaka Prize"],
        discoveries: ["a method for measuring carbon dioxide in seawater"]
      }
  ]
  return (
    <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
      <h1>Notable Scientists</h1>
      {cientists.map((cientist, index) => (
          <Profile key={index} person={cientist}/>
        ))}
    </div>
  );
}
