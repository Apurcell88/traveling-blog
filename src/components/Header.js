import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthEurope } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="header">
      <FontAwesomeIcon className="header--globe" icon={faEarthEurope} />
      <h1 className='header--title'>my travel journal.</h1>
    </header>
  );
}
 
export default Header;