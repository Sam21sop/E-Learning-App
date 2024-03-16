import coursesData from '../../CourseData/courses.json';
import { back, chapterBox, chapters, courseContainer, courses, heading, topHead } from './learnStyle';
import { useParams, Link, Outlet } from 'react-router-dom';

function Learn() {
    const {courseId} = useParams();
    
    // find course
    const course = coursesData.find((course) => (course.id === courseId));


    return (
        <>
            <div className={courseContainer}>
                <div className={topHead}>
                    {/* link for to go back on course pages  */}
                    <Link to={`/courses`}>
                        <h1 className={back}>{'<<'}</h1>
                    </Link>

                    {/* Title of the course  */}
                    <h1 className={heading}>{course.title}</h1>
                </div>

                <div className={chapterBox}>
                    <div className={chapters}>
                        <h1>Chapters</h1>
                        <hr />
                        <ul>
                            {/* list of all chapter  */}
                            {course.chapters.map((chap, index) => {
                                return(
                                    <div key={index}>
                                        <Link to={`chapter/${chap.chapter}`}>
                                            {chap.title}
                                        </Link>
                                    </div>
                                )
                            })}
                        </ul>
                    </div>

                    <div className={courses}>
                        <Outlet context={{...course}}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Learn;