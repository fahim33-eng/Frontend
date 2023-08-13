import { createGlobalState } from "react-hooks-global-state";

const globalVariables = {
    cartItems : [
        {
            id : 1,
            name : "Beximco"
        },
        {
            id : 2,
            name : "Square"
        }
    ]
}

const { useGlobalState } = createGlobalState(globalVariables);
export { useGlobalState };