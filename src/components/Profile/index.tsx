import "./styles.css";
import Avatar from "@/components/Avatar";
import Card from "@/components/Card";
import Person from "@/models/person";

interface ProfileProps {
    person: Person
}

export default function Profile(props: ProfileProps) {
    return (
        <section className="profile">
            <Card>
                <h2>{props.person.name}</h2>
                <Avatar person={props.person} size={70}/>
                <ul>
                <li>
                    <b>Profession: </b> 
                    {props.person.profession}
                </li>
                <li>
                    <b>Awards: {props.person.awards.length} </b> 
                    ({props.person.awards.join(", ")})
                </li>
                <li>
                    <b>Discovered: </b>
                    {props.person.discoveries.join(", ")}
                </li>
                </ul>
            </Card>
        </section>
    )
}
