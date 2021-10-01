const User = ({ user }) => {

    if(user.length === 0) {
        return (
            <div>

            </div>
        )
    }

    return (
        <div>
            <h3> User Name </h3>
            <p> { user.username } </p>
            <h3> Times Played </h3>
            <p> { user.gameTimes }</p>
            <h3> High Score </h3>
            <p> { user.highScore } </p>
            <h3> Overall Points </h3>
            <p> { user.overallPoints } </p>
        </div>
    )
}

export default User