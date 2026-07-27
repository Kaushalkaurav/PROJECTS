import React from 'react'
import { useSelector } from 'react-redux';
import { Outlet , Navigate} from 'react-router';

const PublicRoute = () => {
   const { loggedInUsers } = useSelector((state) => state.auth);

    

    if(loggedInUsers){
        return <Navigate to={"/main"}/>
    }

  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default PublicRoute