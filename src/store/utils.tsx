import { useContext, createContext, ReactNode, useReducer, Dispatch } from "react";


export function createState<Type, Actions = undefined>(state: Type, actions: (state: Type, actions: Actions) => Type) {
    function useSource(): [
        Type,
        Dispatch<Actions>
    ] {
        const reducer = useReducer(actions, state);
    
        return reducer
    }

    const Context = createContext<ReturnType<typeof useSource>>(
        {} as unknown as ReturnType<typeof useSource>
    )

    function useState() {
        return useContext(Context)
    }

    function Provider({
        children,
    }: {
        children: ReactNode
    }) {
        return (
            <Context.Provider value={useSource()}>
                {children}
            </Context.Provider>
        )
    }

    return {
        provider: Provider,
        context: useState
    }
}

