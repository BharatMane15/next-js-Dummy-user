import classes from "../pages/main.module.css";
function SearchBox({ searchedValue, setSearchedValue }) {
  return (
    <form>
      <input
        className={classes.input}
        type="search"
        id="search"
        value={searchedValue}
        onChange={(e) => {
          setSearchedValue(e.target.value);
        }}
        placeholder=" search and choose "
      />
    </form>
  );
}

export default SearchBox;
