import { userContextData } from "../context/auth/authContext";
export default function Setting() {
  const { users } = userContextData();
  console.log(users, "setings data");
  return (
    <div>
      <p>
        first name : {users.fName}
        last name : {users.lName}
      </p>
    </div>
  );
}
