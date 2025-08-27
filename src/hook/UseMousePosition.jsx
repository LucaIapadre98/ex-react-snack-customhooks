import { useEffect, useState } from "react";

export default function UseMousePosition(component) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    useEffect(() => {                                                             // Effettua il tracking della posizione del mouse
        const handleMouseMove = event => {                                        // Funzione per gestire il movimento del mouse
            setPosition({ x: event.clientX, y: event.clientY });                  // Aggiorna lo stato con la nuova posizione
        };
        document.addEventListener('mousemove', handleMouseMove);                 // Aggiunge l'evento di ascolto per il movimento del mouse
        return () =>document.removeEventListener('mousemove', handleMouseMove);  // Pulisce l'evento di ascolto quando il componente viene smontato
    }, []);
    return (
        <div
            style={{ position: 'fixed', top: position.y, left: position.x, transform: 'translate(-50%, -50%)', cursor: 'none' }}
        >
            {component}
        </div>
    )
}
