import LogoutButton from "./LogoutButton"

const User = ({ onClose, user }) => {

    const onLogout = (e) => {

        e.preventDefault()
        window.localStorage.clear()

        onClose()
    }

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
                        <th> Highscore </th>
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
            <LogoutButton text="Log out" handleClick={onLogout}/>

       </>
    )
}

export default User