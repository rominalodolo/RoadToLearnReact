import '../App.css';

function Users(){
    const title = "USERS: ";
    const user = {'firstName': 'Romina', 'lastName': 'Lodolo'};
  
    function formatName(user) {
      return user.firstName + ' ' + user.lastName;
    }
 return (
      <div className="App">
          <h2>{title}</h2>
          <p>Hello {formatName(user)}</p>
      </div>
    );
}

export default Users;