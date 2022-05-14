import "./navigation.css";
import logo from "./../../objects/logo_white.png";
const ROUTES = [
  {
    name: "Market",
    icon: "https://img.icons8.com/plasticine/60/000000/file.png",
  },
  {
    name: "Seller",
    icon: "https://img.icons8.com/fluency/60/000000/instagram-new.png",
  },
  {
    name: "Settings",
    icon: "https://img.icons8.com/fluency/60/000000/instagram-new.png",
  },
];

const HR_STYLE = {
    opacity: "0.5",
    width: "80%",
}

function Navigation(props) {
  return (
    <div id="navigation">
      <div>
        <img
          src={logo}
          alt="Logo"
          style={{ width: "60%", display: "block", margin: "2px auto" }}
        />
      </div>
      <label id="hello">
        Hi <span style={{ fontSize: "inherit" }}>&#128075;, </span>UserName
      </label>
      <hr style={HR_STYLE} />
      <div id="navigation-routes-container">
        {ROUTES.map((route, index) => {
          return (
            <div
              className="navigation-route"
              key={index}
              onClick={props.Navigate(route.name.toLowerCase())}
            >
              {/* <img src={route.icon} alt="icon"></img> */}
              <label>{route.name}</label>
            </div>
          );
        })}
      </div>
      <hr style={HR_STYLE} />
      <div>
        {/* <img src={route.icon} alt="icon"></img> */}
        <label>Log Out</label>
      </div>
    </div>
  );
}

export default Navigation;
