import "./navigation.css";
import logo from "./../../objects/logo_white.png";
const ROUTES = [
  {
    name: "Market/Buyer",
    route: "market",
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
};

function Navigation(props) {
  let username = sessionStorage.getItem("tmp_user_username");
  return (
    <div id="navigation">
      <div>
        <img
          src={logo}
          alt="Logo"
          style={{ width: "60%", display: "block", margin: "2px auto" }}
        />
      </div>
      <label id="hello" className="inline-block">
        Hi <span style={{ fontSize: "inherit" }}>&#128075;, </span>
        {username ?? "N?A"}
      </label>
      <hr style={HR_STYLE} />
      <div id="navigation-routes-container">
        {ROUTES.map((route, index) => {
          let temp = route.route ?? route.name.toLowerCase();
          let class_name =
            temp === props.CurrentRoute
              ? "navigation-route current-route"
              : "navigation-route";
          return (
            <div
              className={class_name}
              key={index}
              onClick={() => {
                props.Navigate(route.name.toLowerCase());
              }}
            >
              {/* <img src={route.icon} alt="icon"></img> */}
              <label className="inline-block">{route.name}</label>
            </div>
          );
        })}
      </div>
      <hr style={HR_STYLE} />
      <div
        id="logout"
        onClick={() => {
          sessionStorage.removeItem("tmp_user_id");
          sessionStorage.removeItem("tmp_user_username");
          props.Navigate("login");
        }}
      >
        Log Out
      </div>
    </div>
  );
}

export default Navigation;
