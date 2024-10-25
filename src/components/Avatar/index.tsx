import "./styles.css";
import Person from "@/models/person";
import { getImageUrl } from "@/app/utils"

interface AvatarProps {
    person: Person;
    size: number;
}

export default function Avatar(props: AvatarProps) {

  return (
        <img
            className="avatar"
            src={getImageUrl(props.person)}
            alt={props.person.name}
            width={props.size}
            height={props.size}
        />
  );
}