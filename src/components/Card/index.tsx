import "./styles.css"
import React, {ReactElement} from "react";

interface CardProps {
    children: ReactElement;
}

export default function Card(props: CardProps) {
    return (
        <div className="card">
            {props.children}
        </div>
    )
}