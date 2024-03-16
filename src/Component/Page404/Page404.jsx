import { useLocation, useNavigate } from "react-router-dom";

function Page404() {
    const location = useLocation();
    const navigator = useNavigate();

    return (
        <>
            <div>
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>
                    The page <code>{location.pathname}</code> does not exist.
                </p>

                <button
                    onClick={() => (navigator('/'))}
                >
                    Go To Home
                </button>
            </div>
        </>
    )
}

export default Page404;