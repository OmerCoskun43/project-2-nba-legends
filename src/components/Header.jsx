import nbaImg from "../assets/nba-logo.png";
const Header = () => {
  return (
    <div className="text-center header_nba">
      <img className="d-block m-auto py-3" width="15%" src={nbaImg} alt="nba" />
      <h1 className="mt-2 header_nba_h">NBA LEGENDS</h1>
    </div>
  );
};

export default Header;
