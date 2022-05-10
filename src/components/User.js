function User(props) {


  console.log(props)

  let result;

  if (props.isLoggedIn) {
    result = "yes"
  } else {
    result = "no"
  }


  return (
    <div>
      <h5>User... {props.userName} {props.surname} </h5>
      Age: {props.age} <br />
      Is logged in ?....  {result}
    </div>
  );
}

export default User;