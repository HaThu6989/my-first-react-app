function Header(props) {
  return (
    <>
      <h1>This is the header</h1>
      <nav>
        <a href="">Home</a> |
        <a href="">About</a> |
        <a href="">Contact</a>
      </nav>

      {props.children}
    </>
  );
}

export default Header;