import { chapterParagraph, chapterVideo } from "./chapter";


function Chapter() {
  return (
    <>
        <div>
            <h1>Chapter Title</h1>
            <h2>Chapter Description</h2>
            <p
                className={chapterParagraph}
            >Chapter</p>
            <br />

            <div className={chapterVideo}>
                <iframe 
                    width="800"
                    height="560"
                    title="React Video"
                    src="" 
                    frameborder="1"
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