import React from 'react'
import users from './assets/user.json';
import UserList from './components/UserList';


function App() {
  return (
    <div>
      <UserList users ={users}/>
    </div>
  )
}

export default App