import "./header.css";

const Header = (props) => {
  return (
    <header className="header-content" id="header">
      <div>
        <div className="logo-div" id="">
          <img src={props.logo} alt="Company Logo" id="logo" />
        </div>
        <div className="banner">
          <h1 className="header-text">
            የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ-ክርስቲያን የጸሎት ቅዱሳት መጻሕፍት ማንበቢያ
          </h1>
        </div>
      </div>
    </header>
  );
};
export default Header;