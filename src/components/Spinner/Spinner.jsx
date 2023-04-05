import React from "react";
import "./styles.css";

export default function Spinner() {
    return (
        <div className="lds-ring">
            <div className="heart-shape"></div>
            <div className="heart-shape"></div>
            <div className="heart-shape"></div>
            <div className="heart-shape"></div>
        </div>
    );
}
