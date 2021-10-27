import LogoutButton from "./LogoutButton"
import DeleteButton from "./DeleteButton"

const User = ({ onClose, user, onDelete }) => {
    
    if(user.length === 0) {
        return (
            <div>

            </div>
        )
    }

    return (
        <>
            <h2>Player statistics</h2>
            <table className="userInfo">
                <thead>
                    <tr>
                        <th> User name </th>
                    </tr>
                    
                </thead>
                <tbody>
                        <tr>
                            <td> { user.username } </td>
                        </tr>  
                    </tbody>
                <thead>
                    <tr>
                        <th> Playtimes </th>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                            <td> { user.gameTimes } </td>
                        </tr>
                    </tbody>
                <thead>
                        <tr>
                        <th> High score </th>
                    </tr> 
                </thead>
                <tbody>
                        <tr>
                            <td> { user.highScore } </td>
                         </tr>
                    </tbody>
                <thead>
                    <tr>
                        <th> Overall points </th>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                            <td> { user.overallPoints } </td>
                        </tr>
                    </tbody>
            </table>
            <LogoutButton text="Log out" handleClick={onClose}/>
            <p>Here you can delete user account</p>
            <DeleteButton text="Delete user" handleClick={onDelete}/>
       </>
    )
}

export default User