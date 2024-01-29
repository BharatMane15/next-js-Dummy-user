const { Fragment, useEffect, useState } = require("react");
import SearchBox from "@/components/search-box";
import classes from "./main.module.css";
import ListOfUsers from "@/components/ListOfUsers";
import SelectedUser from "@/components/selected-user";
function Home() {
  const [searchedValue, setSearchedValue] = useState("");

  const [searchedData, setSearchedData] = useState();

  const [selectedUser, setSelectedUser] = useState([]);

  useEffect(() => {
    if (searchedValue.trim() !== "") {
      fetch(`https://dummyjson.com/users/search?q=${searchedValue}`)
        .then((res) => res.json())
        .then((data) => setSearchedData(data.users));
    }
  }, [searchedValue]);

  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.firstDiv}>
          <SearchBox
            searchedValue={searchedValue}
            setSearchedValue={setSearchedValue}
          />
        </div>
        <div className={classes.midDiv}>
          <SelectedUser
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
          />
        </div>
        <div className={classes.secondDiv}>
          {(searchedValue.trim() !== "" && searchedData?.length !== 0) ||
          null ? (
            <ListOfUsers
              searchedData={searchedData}
              selectedUser={selectedUser}
              setSearchedValue={setSearchedValue}
              setSelectedUser={setSelectedUser}
            />
          ) : (
            <h1
              style={{
                color: "gray",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              Search For the User!
            </h1>
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
