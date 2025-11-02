"use client"
import { useEffect } from "react";

const DefaultPage = () => {

    useEffect(() => {
        window.location.href = "/landing";
    })
    
    return ( 
        <div></div>
     );
}
 
export default DefaultPage