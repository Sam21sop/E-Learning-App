import courseData from '../../CourseData/courses.json'
import Card from '../Card/Card'
import { courseHeading, courseHeadingh1, courseHeadingh4, courses, coursesCardContainer, coursesContainer } from './courseStyle';


function Courses() {
  return (
   <>
        <div className={coursesContainer}>
            <div className={courseHeading}>
                <h1 className={courseHeadingh1}>Popular Courses</h1>
                <h4 className={courseHeadingh4}>Choose your Katana ⚔️</h4>
            </div>

            <div className={courses}>
                {courseData.map((course, index) => {
                    return (
                        <div key={index} className={coursesCardContainer}>
                            <Card
                                key={course.id}
                                id={course.id}
                                title={course.title}
                                imgUrl={course.img}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
   </>
  )
}

export default Courses;