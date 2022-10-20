

import { useState } from 'react';
import TinderCard from 'react-tinder-card';


const Dashboard = () => {

  const characters = [
    {
      name: 'Richard Hendricks',
      url: './img/richard.jpg'
    },
    {
      name: 'Erlich Bachman',
      url: './img/erlich.jpg'
    },
    {
      name: 'Monica Hall',
      url: './img/monica.jpg'
    },
    {
      name: 'Jared Dunn',
      url: './img/jared.jpg'
    },
    {
      name: 'Dinesh Chugtai',
      url: './img/dinesh.jpg'
    }
  ]

  
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }
  return (
    <>
    
    <div className="tindercards">
    <div className="tinderCards_cardConteiner">
        {characters.map((person) => (
            <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir,person.name)}
            onCardLeftScreen={()=> outOfFrame(person.name)}
            
            >
                <div 
                className="card"
                style={{backgroundImage:"url("+person.imgUrl+")"}}
                
                >
            
<h3>{person.name}</h3>


                </div>
        </TinderCard>

      

        ))}
        </div>
        
        
    </div>
    </>
  );
};
export default Dashboard;