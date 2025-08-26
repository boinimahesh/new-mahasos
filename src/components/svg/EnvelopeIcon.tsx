type EnvelopeIconProps = {
    width: string;
    height: string;
}
const EnvelopeIcon = ({width, height} : EnvelopeIconProps) => {
    return (
        <svg 
            width={width} 
            height={height}
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="none" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
        >
            <path fill="currentColor" stroke="none" strokeWidth="0" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline fill="none" stroke="#000" strokeWidth="1" points="22,6 12,13 2,6"></polyline>
        </svg>
    )
}

export default EnvelopeIcon