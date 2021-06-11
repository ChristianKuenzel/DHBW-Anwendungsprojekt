import { Input } from '@chakra-ui/react';

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