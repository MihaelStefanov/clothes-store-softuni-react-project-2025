import "./header.css";
import { Link } from 'react-router';
import { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="header-wrap background-header">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <h2>
                            Sixteen <em>Clothing</em>
                        </h2>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-controls="navbarResponsive"
                        aria-expanded={isOpen}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/products" className="nav-link">Our Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/registration" className="nav-link">Registration</Link>
                            </li>
                            <li className="nav-item add-item">
                                <Link to="/add-item" className="nav-link">Add Item</Link>
                            </li>
                                <li className="nav-item add-item">
                                <Link to="/users" className="nav-link">Users List</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
