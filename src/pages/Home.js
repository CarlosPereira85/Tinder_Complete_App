
import Nav from "../components/Nav";
import { useState } from "react";
import AuthModal from "../components/AuthModal";


const Home = () => {
  const [showModal, setShowModel] = useState(false);
  const [isSignUp,setIsSignUp] = useState(true);



  const authToken = false;

  const handleClick = () => {

    setShowModel(true);
    setIsSignUp(true);
  };


  return (
    <>
      <div className="overlay">

        <Nav
         minimal={false} 
          setShowModel={ setShowModel } 
          showModal={showModal}
          setIsSignUp={setIsSignUp}
          />



        <div className="home">
          <h1>Swipe Right </h1>

          <button className="primary-button" onClick={handleClick}>
            {authToken ? `sign out` : `Create Account`}
          </button>

          {showModal &&
            (<AuthModal setShowModel={setShowModel} setIsSignUp={setIsSignUp}  isSignUp={isSignUp}/>

            )}

        </div>

      </div>
    </>
  );
};
export default Home;