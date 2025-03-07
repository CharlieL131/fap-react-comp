import "./styles.css"
import Avatar from "@/components/Avatar";
import Card from "@/components/Card";

export default function Home() {
  const person = 
      {
        name: "Aklilu Lemma",
        imageId: "OKS67lh",
      }

  return (
    <div>
    <Card className="challange-card">
        <h1>Photo</h1>
        <Avatar person={person} size={70}/>
    </Card>
    <Card className="challange-card">
        <h1>About</h1>
        <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
    </Card>
    </div>

  );
}
