import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram } from '@mui/icons-material';
import './Footer.css'; // Importing the CSS file for styling

export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-social-icons">
                    <Link to="https://www.instagram.com" target="_blank" className="footer-icon">
                        <Instagram style={{ fontSize: '2rem', color: '#E4405F' }} />
                    </Link>
                    <Link to="https://www.facebook.com" target="_blank" className="footer-icon">
                        <Facebook style={{ fontSize: '2rem', color: '#1877F2' }} />
                    </Link>
                </div>
                <div className="footer-text">
                    <p>&copy; 2024 copy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
