const ProfileHeader = (props) => (
  <div className="header">
    <h1 style={{fontSize: '34px'}}>Welcome back</h1>
    <h2 style={{fontSize: '34px', lineHeight: 1.2}}>{`${props.firstName} ${props.lastName}`}</h2>
    <button className="edit-button">Edit Name</button>
  </div>
)

export default ProfileHeader