import "./styles.css";
import Person from "@/models/person";
import { getImageUrl } from "@/app/utils"

interface AvatarProps {
    person: Person;
    size: number;
}

export default function Avatar(props: AvatarProps) {
  const imageSize = props.size < 90 ? "s" : "b"
  return (
        <img
            className="avatar"
            src={getImageUrl(props.person.imageId, imageSize)}
            alt={props.person.name}
            width={props.size}
            height={props.size}
        />
  );
}