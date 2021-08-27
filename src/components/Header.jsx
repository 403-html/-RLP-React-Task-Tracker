import Button from "./Button";

function Header({ title = "React Task Tracker" }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button className="btn" text="Add" />
    </header>
  );
}

export default Header;
