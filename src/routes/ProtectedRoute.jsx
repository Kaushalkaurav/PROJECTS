import React from 'react'
import { useSelector } from 'react-redux';
import { Outlet , Navigate} from 'react-router';

const ProtectedRoute = () => {


    const { loggedInUsers } = useSelector((state) => state.auth);

    if(!loggedInUsers){
        return <Navigate to={"/"}/>
    }

  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default ProtectedRoute