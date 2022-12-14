

import axios from 'axios';
import { useState } from 'react';
import TinderCard from 'react-tinder-card';
import ChatContainer from '../components/ChatContainer';
import {useCookies} from 'react-cookie'
import {useEffect } from 'react'



const Dashboard = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"])
  const [genderedUsers, setGenderedUsers] = useState(null)
  const [user, setUser] = useState(null);
  const userId = cookies.UserId

  console.log(userId);
  
const getUser = async () => {
  
    try {
      const response = await axios.get(`http://localhost:5000/user/${userId}`);
      console.log(response);
      setUser(response.data.profile);
    } catch (err) {
      console.log(err);
    }

 
}



const getGenderedUser = async () => {
  try {
    const response = await axios.get(`http://localhost:5000/user/gendered-users?.gender_interest`);
    console.log(response);
    setGenderedUsers(response.data);
  } catch (err) {
    console.log(err);
  }


}

useEffect(() => {
  getUser();
  getGenderedUser();
}, [user, genderedUsers]);
console.log(genderedUsers);
console.log(user)


  const genderedUser= [
    {
      name: 'Hellen',
      url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
    },
    {
      name: 'Erlich Bachman',
      url: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
      name: 'Monica Hall',
      url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
      name: 'Jared Dunn',
      url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
      name: 'Dinesh Chugtai',
      url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
    }
  ];


  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!');
  };
  return (
    <>
        {
          user &&

        <div className="dashboard">
            <ChatContainer user={user}/>
            <div className="swipe-container">
                <div className="card-container">

                    {genderedUser?.map((genderedUser) =>
                        <TinderCard
                            className="swipe"
                            key={genderedUser.user_id}
                            onSwipe={(dir) => swiped(dir, genderedUser.user_id)}
                            onCardLeftScreen={() => outOfFrame(genderedUser.name)}>
                            <div
                                style={{backgroundImage: "url(" + genderedUser.url + ")"}}
                                className="card">
                                <h3>{genderedUser.name}</h3>
                            </div>
                        </TinderCard>
                    )}
                    <div className="swipe-info">
                        {lastDirection ? <p>You swiped {lastDirection}</p> : <p/>}
                    </div>
                </div>
            </div>
        </div>}
    </>
)
}
export default Dashboard