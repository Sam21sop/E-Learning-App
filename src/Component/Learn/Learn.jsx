import coursesData from '../../CourseData/courses.json';
import { back, chapterBox, chapters, courseContainer, courses, heading, topHead } from './learnStyle';


function Learn() {
  return (
    <>
        <div className={courseContainer}>
            <div className={topHead}>
                <h1 className={back}>{'<<'}</h1>
                <h1 className={heading}>{'Title'}</h1>
            </div>

            <div className={chapterBox}>
                <div className={chapters}>
                    <h1>Chapter</h1>
                    <hr />
                    <ul>
                        {/* list of all chapter  */}
                    </ul>
                </div>

                <div className={courses}>

                </div>
            </div>
        </div>
    </>
  )
}

export default Learn;