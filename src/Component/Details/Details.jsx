import courseData from '../../CourseData/courses.json';
import { Link, useParams } from 'react-router-dom';
import { buttonStyle, cardContainer, cardContent, cardDescription, cardImg, cardTitle, coursesContainer, imageContainer } from './detailsStyle';

function Details() {

    // Third task: get course id and match with data
    const {courseId} = useParams(); 

    // find course
    const course = courseData.find((course) => (course.id === courseId));

    return (
        <>
            <div className={coursesContainer}>
                <div className={cardContainer}>
                    <div className={imageContainer}>
                        <div className={cardImg}>
                            <img src={course.img} alt="icon" />
                        </div>
                    </div>
                    <div className={cardContent}>
                        <h1 className={cardTitle}>
                            {course.title}
                        </h1>
                        <p className={cardDescription}>
                            {course.description}
                        </p>
                    </div>
                </div>
                <Link to={`/learn/${course.id}`}>
                    <button 
                        className={buttonStyle}
                    >
                        Start Learning
                    </button>
                </Link>
            </div>

        </>
    )
}

export default Details;