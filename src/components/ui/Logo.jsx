import logo from "../../assets/invento-wave-logo.png";
import PropTypes from "prop-types";

const Logo = ({ imgClass, titleClass }) => {
  return (
    <>
      <img className={`w-10 h-10 ${imgClass}`} src={logo} alt="" />
      <h2 className={`text-2xl font-semibold text-pink-600 ${titleClass}`}>
        Invento Wave
      </h2>
    </>
  );
};

Logo.propTypes = {
  imgClass: PropTypes.string,
  titleClass: PropTypes.string,
};

export default Logo;
