import { useContext, createContext, ReactNode, useReducer, Dispatch } from "react";

interface CreateStoreOption<State, Actions> {
    state: State,
    mutations: (state: State, actions: Actions) => State
}


export function createState<State, Actions>(options: CreateStoreOption<State, Actions>) {
    function useSource(): [
        State,
        Dispatch<Actions>
    ] {
        const reducer = useReducer(options.mutations, options.state);
    
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

