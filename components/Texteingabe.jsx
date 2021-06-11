/*Sophie Strittmatter */

import { Input } from '@chakra-ui/react';

/* Komponente Texteingabe mit Chakra-UI; der Placeholder, die Größe (klein, mittel,...) und die Breite des Texteingabefeldes sind je nach
   Verwendung verschieden und werden mitgegeben. das Grundtextfeld wird wie im Mockup mit den Grundfaben direkt in der Chakra-UI Komponente
   gestaltet. */
export default function Texteingabe ({ placeholder, size, width }) {
    return(
        <Input 
            placeholder={placeholder} 
            size={size} 
            width={width}
            variant="filled" 
            color="black"
            bgColor={"#EDECEC"}
            focusBorderColor={"#E3001B"}
            borderColor={"#5F6971"}
            borderRadius="10px"/>
    );
}