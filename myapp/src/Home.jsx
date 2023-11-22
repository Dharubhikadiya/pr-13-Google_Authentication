import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";

const Home = () => {
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await signOut(auth);
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            navigate('/')
        } catch (err) {
            console.log(err);
        }
    }
    const user = JSON.parse(localStorage.getItem('user'));
    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, []);

    return (
        <center>
            <h1 className="m-5">welcome to react firebase google <br></br> authentication</h1>
            <h2>{user && user.email}</h2>
            {user && (<img src={user.photoURL} />)}
            <img onClick={handleLogout} width="150" src="https://www.clker.com//cliparts/F/H/C/I/x/Q/logout-button-png-hi.png"></img>
        </center>
    )
}
export default Home;