import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { signOutAction } from '../reducks/users/actions';
import {getUserId} from '../reducks/users/selectors';
import {getUsername} from '../reducks/users/selectors';
import {signOut} from '../reducks/users/operations';

const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector( state => state);
  const uid = getUserId(selector);
  const username = getUsername(selector);

  return(
    <div>
      <h2>Home</h2>
      <p>uid: {uid}</p>
      <p>username: {username}</p>
      <button onClick ={()=>dispatch(signOut())}>SIGN OUT</button>
    </div>
  )
}

export default Home;