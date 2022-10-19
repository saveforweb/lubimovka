import { PROPERTY_TYPES } from "@babel/types";

export default function HeaderText(props) {
    return (
        <p className="header-text">{props.text}</p>
    )
}