const LastUsers = ({users}) => {
  return (
    <div>
        {users && users.map((user) => (
            <li key={user.name}>
            <img src={user.avatar} alt={user.name}/>          
            <div className="txt-user">
                <h2>{user.name}</h2>
                <h5>{user.comment}</h5>
            </div>
        </li>  
        ))}        
    </div>
  )
}

export default LastUsers