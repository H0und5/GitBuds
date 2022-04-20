import { useState } from 'react'; 

import classes from './SearchInput.module.css';


const SearchInput = ({searchEntered}) => {

  const [ enteredValue, setEnteredValue] = useState();

  const onChangeHandler = (event) => {

    setEnteredValue(event.target.value)
    
  }


  const onSubmitHandler = (event) => {
    event.preventDefault();

    searchEntered(enteredValue)

    event.target.reset();
  }

  return (
    <form onSubmit={onSubmitHandler} className={classes.searchContainer}>
      <input type="text" placeholder="Search for info on someone’s GitHub followers" onChange={onChangeHandler}></input>
      <input type="submit" className={classes.searchContainerSubmit} />
    </form>
  )
}

export default SearchInput;