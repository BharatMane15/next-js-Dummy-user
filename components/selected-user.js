import { IoCloseCircleSharp } from "react-icons/io5";
function SelectedUser({ selectedUser, setSelectedUser }) {
  console.log("selectedUser", selectedUser);

  const handleClickCancleButton = (id) => {
    let data = selectedUser.filter((user) => user.id !== id);
    setSelectedUser(data);
  };

  return (
    <>
      {selectedUser?.map((user) => (
        <div
          style={{
            width: "18%",
            backgroundColor: "white",
            height: "6vh",
            marginLeft: "2vh",
            borderRadius: "20%",
            position: "relative",
          }}
        >
          <IoCloseCircleSharp
            onClick={() => {
              handleClickCancleButton(user.id);
            }}
            style={{
              position: "absolute",
              color: "red",
              fontSize: "4.5vh",
              right: "-2",
              top: "-5",
              cursor: "pointer",
            }}
          />

          <div
            style={{
              display: "flex",
              color: "black",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "20%" }}>
              <img src={user.image} style={{ width: "100%", height: "60%" }} />
            </div>

            <div
              style={{
                width: "80%",
              }}
            >
              <h2
                style={{
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                {user.firstName} &nbsp; {user.lastName}
              </h2>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
export default SelectedUser;
