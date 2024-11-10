import React, { useState } from 'react';
import './Footer.css'; // Import CSS cho footer

const Footer = () => {
  const [email, setEmail] = useState('');

  // Dữ liệu cho các mục trong footer
  const footerSections = [
    {
      title: 'Product',
      items: [
        { name: 'iPhone 16 Pro Max', link: '/#' },
        { name: 'Samsung Galaxy S21', link: '/#' },
        { name: 'iPhone 14 Pro Max', link: '/#' },
        { name: 'Men\'s T-Shirt', link: '/#' }
      ]
    },
    {
      title: 'Company',
      items: [
        { name: 'About Us', link: '/about' },
        { name: 'Contact', link: '/contact' },
        { name: 'Careers', link: '/careers' }
      ]
    },
    {
      title: 'Support',
      items: [
        { name: 'FAQ', link: '/faq' },
        { name: 'Help Center', link: '/help' },
        { name: 'Returns', link: '/returns' }
      ]
    }
  ];

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`You have subscribed with: ${email}`);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Map over footerSections để tạo các mục */}
        {footerSections.map((section, index) => (
          <div className="footer-section" key={index}>
            <h3>{section.title}</h3>
            <ul>
              {section.items.map((item, idx) => (
                <li key={idx}>
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Subscribe Section */}
        <div className="footer-section">
          <h3>Subscribe to Our Newsletter</h3>
          <form onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
