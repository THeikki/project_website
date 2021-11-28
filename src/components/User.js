const User = ({ onClose, user, onDelete }) => {
    
    if(user.length === 0) {
        return (
            <div>

            </div>
        )
    }

    return (
        <> 
            
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
            <button className="logoutButton" onClick={onClose}> Log out </button>
            <br></br>
            <br></br>
            <button className="deleteButton" onClick={onDelete}> Delete account</button>
            
       </>
    )
}

export default User