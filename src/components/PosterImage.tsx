import useResponsive from '../hooks/responsive.hook';

type item = {
    src: string;
    name: string;
}

type PosterImageProps = {
    posterlists: item[];
}

const PosterImage = ({posterlists} : PosterImageProps) => {
    const {isMobile} = useResponsive();
    return (
        <div className="row">
            {posterlists.map(function(item, index){
                return (
                    <div key={index} className={isMobile ? 'w_6 mb4' : 'w_4 mb5'}>
                        <img src={item.src} alt={item.name} className="img-full img-fluid" />
                    </div>
                    )
            })}
        </div>
    )
}

export default PosterImage