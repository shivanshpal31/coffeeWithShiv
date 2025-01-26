import React from "react";
import {
  FaFacebook,
  GaGppgle,
  GaInstagram,
  GaPhone,
  Fateegram,
  FaPhone,
  FaFacebookF,
  FaInstagram,
  FaTelegram,
  FaGoogle,
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
              iste laborum dolor autem recusandae repellat! Porro corrupti,
              repellendus quam quod numquam quisquam aperiam ipsam officiis
              itaque aspernatur eos praesentium soluta.
            </p>
            <div>
              <p className="flex item-center gap-2 mt-2">
                <FaPhone />
                +91 8887352496
              </p>
              <p className="flex item-center gap-2 mt-2">
                {" "}
                <FaMapLocation /> Noida, Uttar Pradesh
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
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>privacy Policy</li>
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
              <FaFacebookF className="text-3xl hover:scale-105 duration-300" />
              <FaInstagram className="text-3xl hover:scale-105 duration-300" />
              <FaTelegram className="text-3xl hover:scale-105 duration-300" />
              <FaGoogle className="text-3xl hover:scale-105 duration-300" />
            </div>
            <div>
              <h1 className="text-xl font-semibold mb-2">Payment Method</h1>
              <img src={CrediCards} alt="" />
            </div>
          </motion.div>
        </div>
        <p className="text-white text-center mt-8 pt-8 border-t-2">
          Copyright @ 2024 Company Name. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
