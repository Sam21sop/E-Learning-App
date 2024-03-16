import { loaderIconStyle, loaderStyle } from "./loaderStyle"


function Loader() {
  return (
    <>
        <div className={loaderStyle}>
            <img 
                className={loaderIconStyle}
                src="https://cdn-icons-png.flaticon.com/512/4228/4228133.png" 
                alt="loader-icon" 
            />
        </div>
    </>
  )
}

export default Loader