import { CounterProvider } from "./counter"

export default function store({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <CounterProvider >
            {children}
        </CounterProvider>
    )
}

/*
HOW TO USE
1. Create your global state. see counter.tsx 
2. import the provider here and do nested wrapping here. (Dont worry about how much nesting this can be)

3. To use it inside a component. refer ../pages/home.tsx
*/