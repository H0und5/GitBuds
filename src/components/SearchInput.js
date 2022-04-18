import classes from './SearchInput.module.css';


const SearchInput = () => {



  return (
    <div className={classes.searchContainer}>
      <input placeholder="Search for info on someone’s GitHub followers"></input>
    </div>
  )
}

export default SearchInput;