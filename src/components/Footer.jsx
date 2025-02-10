import React from "react";
import {
  FaPhone,
  FaInstagram,
  FaTelegram,
  FaGoogle,
  FaLinkedin,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import CrediCards from "../assets/website/credit-cards.webp";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-primaryDark pt-12 pb-8 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Company Details Section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              //   type: "spring",
              //   stiffness: 100,
              //   damping: 10,
              delay: 0.2,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold uppercase">Coder Cafe</h1>
            <p className="text-sm max-w-[300px]">
              Indulge in the perfect blend of aroma, taste, and warmth. We serve
              freshly brewed coffee crafted from the finest beans, offering
              everything from bold espressos to creamy lattes and refreshing
              cold brews. Whether you need a morning boost or a relaxing break,
              our café is your go-to destination. Order online, earn rewards,
              and savor every sip.
            </p>
            <div>
              <p className="flex item-center gap-2 mt-2">
                <FaPhone /><a href="tel: +91 8887352496" >+91 8887352496</a>                
              </p>
              <p className="flex item-center gap-2 mt-2">
                {" "}
                <FaMapLocation /> Bengaluru, Karnataka
              </p>
            </div>
          </motion.div>
          {/* Footer Details Section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              //   type: "spring",
              //   stiffness: 100,
              //   damping: 10,
              delay: 0.4,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Quick Links</h1>
            <div className="grid grid-cols-2 gap-3">
              {/* First Column section */}
              <div>
                <ul>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>privacy Policy</li>
                </ul>
              </div>
              {/* Second Column section */}
              <div>
                <ul>
                  <li>Black  Coffee</li>
                  <li>Cold Coffee</li>
                  <li>Hot Coffee</li>
                  <li>Galäo Coffee</li>
                </ul>
              </div>
            </div>
          </motion.div>
          {/* Social Details Section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              //   type: "spring",
              //   stiffness: 100,
              //   damping: 10,
              delay: 0.6,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Follow Us</h1>
            <div className="flex item-center gap-3">
              <a href="https://www.linkedin.com/in/shivansh-pal-ase/" rel="noreferrer" target="_blank"><FaLinkedin className="text-3xl hover:scale-105 duration-300 cursor-pointer" /></a>
              <a href="https://www.instagram.com/shiv_ansh_31?igsh=NzgybjZrYWZ1d2c4" rel="noreferrer" target="_blank"><FaInstagram className="text-3xl hover:scale-105 duration-300" /></a>
              <a href="https://t.me/shivtheduce" rel="noreferrer" target="_blank"><FaTelegram className="text-3xl hover:scale-105 duration-300" /></a>
              <a href="mailto:shivanshpal31@gmail.com" rel="noreferrer" target="_blank"><FaGoogle className="text-3xl hover:scale-105 duration-300" /></a>
            </div>
            <div>
              <h1 className="text-xl font-semibold mb-2">Payment Method</h1>
              <img src={CrediCards} alt="" />
            </div>
          </motion.div>
        </div>
        <p className="text-white text-center mt-8 pt-8 border-t-2">
          Copyright @ 2025 Shivansh Pal. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
