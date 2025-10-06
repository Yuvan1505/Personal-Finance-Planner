import React from 'react';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <div style={containerStyle}>
                <nav style={navStyle}>
                    <a href="/privacy" style={linkStyle}>Privacy Policy</a>
                    <a href="/terms" style={linkStyle}>Terms of Service</a>
                    <a href="/contact" style={linkStyle}>Contact Us</a>
                </nav>
                <p style={copyrightStyle}>© {new Date().getFullYear()} Personal Financial Planner. All rights reserved.</p>
            </div>
        </footer>
    );
};

const footerStyle = {
    backgroundColor: '#f8f9fa',
    padding: '20px 0',
    textAlign: 'center',
    borderTop: '1px solid #e9ecef',
};

const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
};

const navStyle = {
    marginBottom: '10px',
};

const linkStyle = {
    margin: '0 15px',
    textDecoration: 'none',
    color: '#007bff',
};

const copyrightStyle = {
    fontSize: '14px',
    color: '#6c757d',
};

export default Footer;