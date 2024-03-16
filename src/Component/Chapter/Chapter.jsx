import { chapterParagraph, chapterVideo } from "./chapterStyle";
import { useOutletContext, useParams } from "react-router-dom";

function Chapter() {

    // extract chapter id from params
    const {chapterId} = useParams();

    // get the course details/context from the outlet
    const course = useOutletContext();

    const chapter = course.chapters.find((chap) => (String(chap.chapter) === chapterId))

    return (
        <>
            <div>
                <h1>{chapter.title}</h1>
                <hr />
                {/* <h2>{chapter.description}</h2> */}
                <p
                    className={chapterParagraph}
                >
                    {chapter.details}
                </p>

                <br />

                <div className={chapterVideo}>
                    <iframe 
                        width="800"
                        height="560"
                        title="React Video"
                        src="" 
                        allowFullScreen
                        allow="accelerometer; 
                            autoplay; 
                            clipboard-write; 
                            encrypted-media; 
                            gyroscope;
                            picture-in-picture; 
                            web-share"
                    >
                    </iframe>
                </div>
            </div>
        </>
    )
}

export default Chapter;