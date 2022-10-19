
import Nav from "../components/Nav";


const Home = () => {

const authToken = false

const handleClick = () => {
  console.log("cliked");
}


  return (
   <>
   <div className="overlay">
    <Nav minimal={false} authToken={authToken}/>
    <div className="home">
      <h1>Swipe Right </h1>

      <button className="primary-button" onClick={handleClick}> 
      {authToken ? `sign out` : `Create Account`}
      </button>

    </div>
    </div>
    </>
  )
}
export default Home