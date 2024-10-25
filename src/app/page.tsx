import Avatar from "@/components/Avatar";
import Card from "@/components/Card";

export default function Home() {

  return (
    <div>    
          <Card>
            <Avatar person={{name: "Katsuko Saruhashi", imageId: "YfeOqp2"}} size={100}/>
          </Card>
    </div>
  );
}
