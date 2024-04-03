import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-gray-800 text-white py-4 px-6 flex items-center justify-between">
            <div>
                <Link to="/" className="text-xl font-bold">My Logo</Link>
            </div>
            <header className="hidden md:flex space-x-4">
                <Link to="/home" className="hover:text-gray-300">Home</Link>
                <Link to="/products" className="hover:text-gray-300">Products</Link>
                <Link to="/about" className="hover:text-gray-300">About</Link>
                <Link to="/contact" className="hover:text-gray-300">Contact</Link>
            </header>
            <div className="md:hidden">
            </div>
        </header>
    );
}

export default Header;
