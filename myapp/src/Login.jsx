import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "./firebase";
import { json, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {

    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            const result = await signInWithPopup(auth, googleAuthProvider);
            console.log(result.user);
            localStorage.setItem('token', result.user.accessToken);
            localStorage.getItem('user', JSON.stringify(result.user));
            navigate('/home');
        } catch (err) {
            console.log(err);
        }
    }

    const user = JSON.parse(localStorage.getItem('user'));
    useEffect(() => {
        if (user) {
            navigate('/home');
        }
    }, [])

    return (
        <div >
            <center>
                <h1 className="pt-5 m-5 fw-bold">Sign in With Google <br></br> in React</h1>
                <div className='d-flex justify-content-center align-items-center'>
                    <div>
                        <img onClick={handleSubmit} src='https://miro.medium.com/v2/resize:fit:1400/1*u0bwdudgoyKjSLntsRcqiw.png' className='' width="300"></img>
                    </div>
                </div>
            </center>
        </div>
    )
}
export default Login;