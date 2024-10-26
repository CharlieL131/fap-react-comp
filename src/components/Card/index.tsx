import "./styles.css"
import {ReactNode} from "react";

interface CardProps {
    children: ReactNode;
}

export default function Card(props: CardProps) {
    return (
        <div className="card">
            {props.children}
        </div>
    )
}