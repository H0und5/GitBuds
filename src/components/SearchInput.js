import { useRef } from 'react'; 

import classes from './SearchInput.module.css';


const SearchInput = ({searchEntered}) => {

  const enteredValue = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    

    searchEntered(enteredValue)

    event.target.reset();
  }

  return (
    <form onSubmit={onSubmitHandler} className={classes.searchContainer}>
      <input type="text" placeholder="Search for info on someone’s GitHub followers" ref={enteredValue}></input>
      <input type="submit" className={classes.searchContainerSubmit} />
    </form>
  )
}

export default SearchInput;