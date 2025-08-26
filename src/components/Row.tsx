import type { ReactNode } from "react"

type RowProps = {
    children: ReactNode
}

const Row = ({children} : RowProps) => {
    return (
        <div className="row">
            {children}
        </div>
    )
}

export default Row