import React, {useContext} from "react";
import {Dropin} from "braintree-web-drop-in";

export const Braintree = React.createContext<Promise<Dropin>>(null)

export function useBraintree (){
    return useContext(Braintree);
}

