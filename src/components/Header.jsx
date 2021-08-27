import Button from "./Button";

function Header({ title = "React Task Tracker", onAdd }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button className="btn" text="Add" onClick={() => onAdd()} />
    </header>
  );
}

export default Header;
