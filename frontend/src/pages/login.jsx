import axios from "axios";
import { useState } from "react";

const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setData((prevProp) => ({ ...prevProp, [e.target.name]: e.target.value }))
    }

    // const validateCheck = () => {
    //     switch (key) {
    //         case value:

    //             break;

    //         default:
    //             break;
    //     }
    // }
    const handleSubmit = (e) => {
        e.preventDefault();
        let payload = {
            email: data.email,
            password: data.password
        }
        const response = axios.post("/login", payload);
        console.log("response=========", response);

    }

    return (
        <div className="">
            <div className="flex" style={{ alignItems: "center" }}>
                <h1>Login</h1>
            </div>
            <div className="">
                <form onSubmit={handleSubmit}>
                    <div className="">
                        <span><label>Email: </label></span>
                        <input className="" name="email" value={data.email} onChange={(e) => handleChange(e)} />
                    </div>
                    <div className="">
                        <span><label>Password: </label></span>
                        <input className="" name="email" value={data.email} onChange={(e) => handleChange(e)} />
                    </div>

                    <div className="">
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;