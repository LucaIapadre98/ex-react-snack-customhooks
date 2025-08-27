import { useState, useEffect } from "react";

export default function useDate (){
    const [currentDate, setCurrentDate] = useState(new Date());          // Inizializza lo stato con la data corrente
    useEffect(() => {
        const intervalId = setInterval(() => {                           // Aggiorna la data ogni secondo
            setCurrentDate(new Date());                                  // Imposta la data corrente
        }, 1000);
        return () => clearInterval(intervalId);                          // Pulisce l'intervallo quando il componente viene smontato
    }, []);
    return currentDate;
};
