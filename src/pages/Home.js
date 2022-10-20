
import Nav from "../components/Nav";
import { useState } from "react";
import AuthModal from "../components/AuthModal";


const Home = () => {
  const [showModal, setShowModel] = useState(false);


  const authToken = false;

  const handleClick = () => {

    setShowModel(true);
  };


  return (
    <>
      <div className="overlay">

        <Nav minimal={false} authToken={authToken} setShowModel={ setShowModel } showModal={showModal} />



        <div className="home">
          <h1>Swipe Right </h1>

          <button className="primary-button" onClick={handleClick}>
            {authToken ? `sign out` : `Create Account`}
          </button>

          {showModal &&
            (<AuthModal setShowModel={setShowModel} />

            )}

        </div>

      </div>
    </>
  );
};
export default Home;