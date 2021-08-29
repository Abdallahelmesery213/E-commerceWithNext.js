import Link from 'next/link';
import  Style  from '../styles/Navbar.module.css';
const Navbar = () => {
    return ( 
        <nav className={Style.nav}>

            <ul className="list-inline">
                <li className="list-inline-item">
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>

                <li className="list-inline-item">
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>

                <li className="list-inline-item">
                    <Link href="/cart">
                        <a>Cart</a>
                    </Link>
                </li>           

            </ul>
        </nav>
     );
}
 
export default Navbar;