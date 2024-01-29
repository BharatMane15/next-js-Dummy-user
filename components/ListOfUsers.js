import Image from "next/image";
import classes from "../pages/main.module.css";
function ListOfUsers({
  searchedData,
  selectedUser,
  setSearchedValue,
  setSelectedUser,
}) {
  const filteredData = searchedData?.filter(
    (data) => !selectedUser.find((user) => user.id === data.id)
  );
  return (
    <>
      <div className={classes.listWrapper}>
        {filteredData?.map((data) => (
          <div
            className={classes.list}
            onClick={() => {
              setSelectedUser([...selectedUser, data]);
              setSearchedValue("");
            }}
          >
            <div style={{ width: "20%" }}>
              <img src={data.image} style={{ width: "100%", height: "100%" }} />
            </div>

            <div style={{ width: "80%", alignItems: "center" }}>
              <h1>
                {data.firstName} &nbsp;
                {data.lastName}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default ListOfUsers;
