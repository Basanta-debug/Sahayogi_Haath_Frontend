

const clientId =
  "806401067505-oqa1qchkj98iuj9chd9ghb1tka6c9171.apps.googleusercontent.com";

export default function Register() {
  const responseSuccessGoogle = (response) => {
    console.log(response);
    localStorage.setItem("googletoken", response.tokenId);
    navigate("/");
  };



  let navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const registerUser = (e) => {

    const userData = {
      firstname,
      lastname,
      password,
      username,
      email,
    };

  };



 
  return (
    <div>

    </div>
  );
}
