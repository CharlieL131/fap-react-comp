import "./styles.css"
import {ReactNode} from "react";

interface CardProps {
    className?: string
    children: ReactNode;
}

export default function Card(props: CardProps) {
    return (
        <div className={`card ${props.className ? ` ${props.className}` : ""}`}>
            {props.children}
        </div>
    )
}