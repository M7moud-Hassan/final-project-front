import axios from 'axios';

let Check_email = () => {
  const { uid, token } = useParams();

  useEffect(() => {
    const url = "http://localhost:8000/auth/activate/"+{uid}+"/"+{token}+"/";
    axios.post(url)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
      console.log(err)
      });
  }, [uid, token]);

}
export default Check_email




