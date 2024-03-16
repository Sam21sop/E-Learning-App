import CourseData from '../../CourseData/courses.json';
import { useParams } from 'react-router-dom';
import { buttonStyle, cardContainer, cardContent, cardDescription, cardImg, cardTitle, coursesContainer, imageContainer } from './detailsStyle';

function Details() {

    // Third task: get course id and match with data 

    return (
        <>
            <div className={coursesContainer}>
                <div className={cardContainer}>
                    <div className={imageContainer}>
                        <div className={cardImg}>
                            <img src="" alt="" />
                        </div>
                    </div>
                    <div className={cardContent}>
                        <h1 className={cardTitle}>Title</h1>
                        <p className={cardDescription}>Description</p>
                    </div>
                </div>
                <button className={buttonStyle}>
                    Start Learning
                </button>
            </div>

        </>
    )
}

export default Details;