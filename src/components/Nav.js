
import whitelogo from '../images/tinder_logo_white.png';
import colorLogo from '../images/color-logo-tinder.png'

const Nav = ({minimal, setShowModel, showModal, setIsSignUp}) => {


const handleClick = () => {
    setShowModel(true)
    setIsSignUp(false)
}

const authToken = false

return (
    <nav>
    <div className="logo-container">
    <img src={minimal ?   colorLogo : whitelogo} alt="logo" className="logo" />
    
    </div>
    {!authToken && !minimal  && <button className='nav-button' onClick={handleClick } disabled={showModal} > 
    
    
    Log in</button>}
    </nav>
)





}
export default Nav