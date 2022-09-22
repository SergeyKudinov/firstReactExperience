import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar_links'>
                <Link to="/about">О приложении</Link>
                <Link to="/posts">Посты</Link>
            </div>
        </div>
    );
};

export default Navbar;
