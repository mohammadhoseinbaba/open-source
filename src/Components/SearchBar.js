
function SearchBar({onSubmit}) {
const handleClick = ()=>{
    onSubmit(`cars`)
}

    return (
      <div>
        <input />
        <button onClick={handleClick}>Click me</button>

      </div>

    );
  }
  
  export default SearchBar;
  