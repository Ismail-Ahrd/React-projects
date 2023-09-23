import React from "react";
import "../style/Info.css"

export default function Info() {
    return(
        <div className="my-Info">
            <div className="my-photo"></div>
            <div className="my-name">
                <h1>Ismail Aharoud</h1>
                <h3>Frontend Developer</h3>
                <p>IsmailAharoud.website</p>
            </div>
            <div className="buttons">
                <button className="email-btn"><img src="../Email.png" alt="#" /> Email</button>
                <button className="linkedln-btn"><img src="../Linkedln.png" alt="#" /> Linkedln</button>
            </div>
        </div>
    )
}