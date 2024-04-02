import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-gray-800 text-white py-4 px-6 flex items-center justify-between">
            <div>
                <Link to="/" className="text-xl font-bold">Your Logo</Link>
            </div>
            <nav className="hidden md:flex space-x-4">
                <Link to="/home" className="hover:text-gray-300">Home</Link>
                <Link to="/products" className="hover:text-gray-300">Products</Link>
                <Link to="/about" className="hover:text-gray-300">About</Link>
                <Link to="/contact" className="hover:text-gray-300">Contact</Link>
            </nav>
            <div className="md:hidden">
                {/* Hamburger menu icon */}
            </div>
        </header>
    );
}

export default Header;
