import "./UserCard.css";
function UserCard({ user }) {
  return (
    <div className="user">
      <h2 id="name">{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
    </div>
  );
}

export default UserCard;
