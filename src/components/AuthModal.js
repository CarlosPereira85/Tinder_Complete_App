import { useState } from 'react'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
import ClearIcon from '@mui/icons-material/Clear';// import { useCookies } from 'react-cookie'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

import {useCookies} from 'react-cookie'

const AuthModal = ({ setShowModel,  isSignUp,  }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm_password, setConfirmPassword] = useState("")
    const [error, setError] = useState(null)
    const [cookie, setCookie, removeCookie] = useCookies(["user"])
    // const [ cookies, setCookie, removeCookie] = useCookies(null)

    let navigate = useNavigate()

    console.log(email, password, confirm_password)


    const handleClick = () => {
        setShowModel(false)
    }

    const postRequestHandler = async () => {
        const data = { email, password, confirm_password  };
       
       
        const response = await axios.post(
          `http://localhost:5000/${isSignUp ? "signup" : "login"}`,	
          data,
        );
       
        
        if (response.status === 200) {
          navigate("/onboarding");
        }
        const success = response.status === 200
        if (success && isSignUp) navigate ('/onboarding')
        if (success && !isSignUp) navigate ('/dashboard')
        // if (success) {
        //     navigate("/onboarding");
        // } else {
        //     setError("Something went wrong")
        // }
window.location.reload()
        
        setCookie(`UserId`, response.data.userId)
        setCookie(`AuthToken`, response.data.token)
        // setCookie(`Test`, response.data.token)
        // setCookie(`Test2`, response.data.user.id)
     
        // const success = response.data.token 
        // if (success && isSignUp) navigate ('/onboarding')
        // if (success && !isSignUp) navigate ('/dashboard')
    
        const results = (response.data.token);
        localStorage.setItem("token", results);
        console.log(results);
        
       ;
        setEmail("");
          setPassword("");
        setConfirmPassword("");
        
       
        
      //   setRepeatPassword("");
      };
      
    
    return (
        <div className="auth-modal">
            <div className="close-icon" onClick={handleClick}>

                <ClearIcon />
            </div>

            <h2>{isSignUp ? 'CREATE ACCOUNT': 'LOG IN'}</h2>
            <p>By clicking Log In, you agree to our terms. Learn how we process your data in our Privacy Policy and Cookie Policy.</p>
            
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email"
                    required={true}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <input
                    type="password"
                    id="password"
                    value={password}
                    name="password"
                    placeholder="password"
                    required={true}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {isSignUp && <input
                    type="password"
                    id="password-check"
                    name="password-check"
                    placeholder="confirm password"
                    required={true}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirm_password}
                />}
               
              
                <button className="secondary-button" onClick={postRequestHandler}>Submit</button>
                <p>{error}</p>
            <hr/>
            <h2>GET THE APP</h2>

        </div>
    )
}
export default AuthModal