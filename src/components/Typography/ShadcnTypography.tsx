import type { ReactNode } from "react"


/////////////////////////////H1
type TypographyH1Props = {
    children: ReactNode
}



function TypographyH1({ children }: TypographyH1Props) {
    return (
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
            {children}
        </h1>
    )
}

/////////////////////////////H2
type TypographyH2Props = {
    children: ReactNode
}


function TypographyH2({ children }: TypographyH2Props) {


    return (
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            {children}
        </h2>
    )
}

/////////////////////////////H3
type TypographyH3Props = {
    children: ReactNode
}

function TypographyH3({ children }: TypographyH3Props) {
    return (
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            {children}
        </h3>
    )
}

/////////////////////////////p
type TypographyPProps = {
    children: ReactNode
}
function TypographyP({ children }: TypographyPProps) {

    return (
        <p className="leading-7 [&:not(:first-child)]:mt-6">
            {children}
        </p>
    )
}


export {
    TypographyH1,
    TypographyH2,
    TypographyH3,
    TypographyP
}

