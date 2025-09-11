import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white py-6">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {currentYear} Mohamed Noor Adan. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
