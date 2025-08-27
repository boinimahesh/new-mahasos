type ChevronLeftProps = {
    width: string;
    height: string;
}
const ChevronLeft = ({width, height} : ChevronLeftProps) => {
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
            <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
    )
}

export default ChevronLeft