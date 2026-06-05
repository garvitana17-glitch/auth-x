import React from "react";

// custom footer component
const Footer = () => {
  return (
    <div className="bg-black text-gray-500 text-xs py-3 text-center absolute bottom-8 flex items-center gap-8">
      <a href="/privacy">Privacy Policy</a>
      <a href="/terms">Terms of Service</a>
      <a href="/">Help Center</a>
    </div>
  );
};

export default Footer;
