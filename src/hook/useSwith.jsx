import { useState } from "react";
export default function useSwitch (initialValue = false){           // Inizializza lo stato con il valore iniziale (default: false)
    const [isOn, setIsOn] = useState(initialValue);                  // Stato booleano per rappresentare lo stato On/Off

    const toggle = () => {                                          // Funzione per cambiare lo stato
        setIsOn(curr => !curr);                                     // Inverte il valore corrente dello stato
    };
    return [isOn, toggle];                                        // Ritorna lo stato e la funzione per cambiarlo
};