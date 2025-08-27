type ChevronRightProps = {
    width: string;
    height: string;
}
const ChevronRight = ({width, height} : ChevronRightProps) => {
    return (
        <svg 
            width={width} 
            height={height} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
        >
            <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
    )
}

export default ChevronRight