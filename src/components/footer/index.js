import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp, } from "react-icons/fa";
import { StylizedFooter } from "./styles";

export default function Footer(){


    return(
         <StylizedFooter>
              <div>
                  <FaInstagram size={30}/> 
                  <FaFacebook size={30}/>
                  <FaLinkedin size={30}/>
                  <FaWhatsapp size={30}/>
              </div>
                      <p> Contato - Informações - Suporte </p>
                       
            

         </StylizedFooter>
    )
}