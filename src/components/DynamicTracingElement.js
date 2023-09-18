import React, { useState, useEffect } from "react";

export default function DynamicTracingElement(props) {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        function suivreCurseur(event) {
            setPosition({ x: event.clientX, y: event.clientY });
        }
        // Ajout de l'événement "mousemove" sur l'élément document
        document.addEventListener("mousemove", suivreCurseur);
        return () => {
            // Suppression de l'événement "mousemove" lors du démontage du composant
            document.removeEventListener("mousemove", suivreCurseur);
        };
    }, []);

    return (
        <div
            style={{ position: "absolute", left: position.x, top: position.y }}
        >
            <h1>{props.nom}</h1>
            <p>{props.description.slice(0, 150)+" ..."}</p>
        </div>
    );
}
