import react, { useState } from "react"
import {Link} from "react-router-dom"
import "../Style/pages/login.css"

function Login()
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e){
        e.preventDefault();

        console.log({email, password});

        setEmail("");
        setPassword("");
        
    }
    
    return(
        <div>
            <div className="container">
            <div>
                <span>Witness</span>
                <span>⚖</span>
            </div>

            <h2>تسجيل الدخول إلى منصة شهادة</h2>

                <form onSubmit={handleSubmit}>
                    <p>البريد الالكتروني</p>
                    <input type="text" placeholder="ادخل بريدك الالكتروني" value = {email} onChange={(e) => setEmail(e.target.value)}/>
                    <br />
                    <p>كلمة السر</p>
                    <input type="password" placeholder = "ادخل كلمة المرور" value = {password} onChange={(e) => setPassword(e.target.value)}/>
                    <br />
                    <button type="submit">تسجيل الدخول</button>
                </form>
                <p>ليس لديك حساب؟</p>                <Link to = "/Register"> سجل الآن</Link>

            </div> 
        </div>
    )

}

export default Login