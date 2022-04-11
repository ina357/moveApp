function Header(props){
    return (
      <header>
        <h1><a href="/">{ props.title}</a></h1>
      </header>
    )
}

export default Header;

{/* <h1><a href="/" onClick={(event) =>{
          event.preventDefault();
          props.onChangeMode();
      }}>{props.title}</a></h1> */}