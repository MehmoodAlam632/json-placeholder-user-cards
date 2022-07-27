export default function Card(props) {
  const { user } = props;

  return (
    <div className="container">
      <div
        className="main-div"
        style={{
          border: "1px solid #ccc",
          margin: "100px",
          borderRadius: "12px",
        }}
      >
        <div className="heading-div">
          <h1>User Data</h1>
        </div>
        <div className="detail-div">
          <h2>Name : {user.name}</h2>
          <h2>Username : {user.username}</h2>
          <h2>Phone : {user.phone}</h2>
          <h2>Website : {user.website}</h2>
          <h2>City : {user.address.city}</h2>
          <h2>Street : {user.address.street}</h2>
          <h2>Zip Code : {user.address.zipcode}</h2>
          <h2>Company Name : {user.company.name}</h2>
        </div>
      </div>
    </div>
  );
}
