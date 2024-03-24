import PropTypes from "prop-types";
import "../styles/Welcome.css";
// import Age from "./Age";

export default function Welcome({ name }) {
  // const age = 22;

  return (
    <div className="welcome">
      <p>
        Welcome, <strong>{name}</strong>!
      </p>

      {/*<Age age={age} />
      {age > 18 && <Age age={age} />}
      {age !== undefined && <Age age={age} />}
      {18 < age < 65 && <Age age={age} />}
      he declarado el nombre en App.jsx
      se ve como: <Welcome name="Ayla" />
      {18 < age < 65 && name === "John" && <Age age={age} />} */}
    </div>
  );
}

Welcome.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};

Welcome.defaultProps = {
  name: "usuario",
};
