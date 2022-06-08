import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link to="/">
      <img
        style={{
          height: "7em",
          width: "15em",
        }}
        src={require("../Assets/logo.png")}
        alt=""
      />
    </Link>
  );
};

export default Logo;
