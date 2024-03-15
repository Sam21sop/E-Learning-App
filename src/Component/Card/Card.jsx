import { cardContainer, cardContent, cardImageContainer, cardImg, cardTitle } from './cardStyle';

function Card(props) {

    const {title, imgUrl, id} = props;

    return (
        <>
            <div key={id} className={cardContainer}>
                
                <div className={cardImageContainer}>
                    <img className={cardImg} src={imgUrl} alt="icon" />
                </div>

                <div className={cardContent}>
                    <h1 className={cardTitle}>
                        {title}
                    </h1>
                </div>
            </div>
        </>
    )
}

export default Card;