
import logo from '../../../assets/logo.png';
import moment from 'moment';
const Header = () => {
    return (
        <div className='mx-auto w-full'>
            <img src={logo}></img>
            <p className=''>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM D, YYYY ")}</p>
        </div>
    );
};

export default Header;