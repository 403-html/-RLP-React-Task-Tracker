import Button from "./Button";

function Header({ title = "React Task Tracker", onAdd, showAdd }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        className={`btn ${showAdd ? "btn-hide" : "btn-show"}`}
        text={showAdd ? "Hide" : "Add"}
        onClick={() => onAdd()}
      />
    </header>
  );
}

export default Header;
