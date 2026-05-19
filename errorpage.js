import {useRouteError} from "react-router";
let Error = () =>
    {
        let error = useRouteError();
        return (
            <>
            <div id="error">
                <h1>OPPS!! Sorry!!</h1>
                <h2>{error?.status || 404}</h2>
                <h2>Page {error?.statusText || "Not Found"}</h2>
            </div>
            </>
        );
    }
export default Error;