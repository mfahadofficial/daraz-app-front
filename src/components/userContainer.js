import React, {useEffect} from "react";
import { connect } from "react-redux";
import { fetchUsers } from './redux/index';
import { useSelector, useDispatch } from 'react-redux';

// {userData, fetchUsers}
function UserContainer(){

    
    const dispatch = useDispatch()
    const userData = useSelector(state => state.user)

    useEffect(() => {

        console.log(userData, '1');

        dispatch(fetchUsers())
        // fetchUsers() 
        console.log(userData, '2');
        

    }, [])

   


    return userData.loading ? (
        
        <h1>Loading......</h1>
        
    ) : userData.error ? (
        <h2> {userData.error}, 'error' </h2>
        

    ) : (
         <div>
             <h2>User List</h2>
         <div>
             
            {
                
                userData.users.map(user => <p>{user.name}<p>{user.id}</p></p>)}
        </div>
         </div>
 

    )
}

// const mapStateToProps = state => {
//     // console.log(state.user.users)
//     return{
//         userData: state.user
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return{
//         fetchUsers: () => dispatch(fetchUsers())
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps )(UserContainer);

export default UserContainer
