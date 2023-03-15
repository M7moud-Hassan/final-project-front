import { useParams } from "react-router";


let PleaseActivate = () => {
    const {email} = useParams();
    return (
        <div>
           check email  {email}
        </div>
    )
}
export default PleaseActivate;