import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Content() {
  return (
    <div className="bg-[#1f1f1f] text-white h-full w-full flex flex-col justify-between px-6 md:px-16 py-10">
      <FooterTop />
      <FooterBottom />
    </div>
  );
}

/* ===============================
   TOP SECTION
================================ */
const FooterTop = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
      {/* LOGO + QR */}
      <div className="">
        <img
          src="https://b2b.priyoshopretail.com/wp-content/uploads/2025/09/PriyoShop-Logo-Full-White-Transparent-BG-for-Red-BG-300x79.png"
          alt="logo"
          width={150}
          height={60}
          className="mb-6"
        />

        <img
          src="https://b2b.priyoshopretail.com/wp-content/uploads/2025/09/scanner-1-300x300.jpg"
          alt="QR"
          width={140}
          height={140}
          className="rounded-lg border border-white/10"
        />
      </div>

      {/* USEFUL LINKS */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
        <ul className="space-y-2 text-sm text-gray-300">
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Return Policy</li>
          <li>Career</li>
          <li>Contact Us</li>
          <li>Join Us</li>
          <li>Unsubscribe</li>
        </ul>
      </div>

      {/* CONTACT US */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>

        <p className="text-sm text-gray-300 leading-relaxed">
          Singapore Office: 160 Robinson Road #24-09
          <br />
          Singapore 068914
        </p>

        <p className="text-sm text-gray-300 mt-3 leading-relaxed">
          Bangladesh Office: 31/A, Dhanmondi-8,
          <br />
          Dhaka-1209
        </p>

        <p className="text-sm text-gray-300 mt-3">Phone: 09610989922</p>
        <p className="text-sm text-gray-300">Email: support@priyoshop.com</p>
      </div>

      {/* COMPANY INFO */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Company Information</h3>
        <ul className="space-y-2 text-sm text-gray-300">
          <li>Registered Name: PriyoShop.Com Limited</li>
          <li>Incorporation No: C-144267/2018</li>
          <li>Trade License: TRAD/DSCC/012676/2022</li>
          <li>VAT: BIN 001196687-0201</li>
          <li>E-TIN: 132236527140</li>
        </ul>
      </div>
    </div>
  );
};

/* ===============================
   BOTTOM SECTION
================================ */
const FooterBottom = () => {
  return (
    <div className="mt-10 text-center flex flex-col items-center">
      {/* Social Icons */}
      <div className="flex gap-4 mb-4">
        {[
          { icon: <Facebook size={18} />, name: "facebook" },
          { icon: <Twitter size={18} />, name: "twitter" },
          { icon: <Instagram size={18} />, name: "instagram" },
          { icon: <Youtube size={18} />, name: "youtube" },
          { icon: <Linkedin size={18} />, name: "linkedin" },
        ].map((item) => (
          <div
            key={item.name}
            className="w-10 h-10 bg-white/10 rounded-md flex items-center justify-center hover:bg-white/20 transition"
          >
            {item.icon}
          </div>
        ))}
      </div>

      {/* Copyright */}
      <p className="text-xs text-gray-400">
        © {new Date().getFullYear()} All Rights Reserved | PriyoShop.com Ltd.
      </p>
    </div>
  );
};
