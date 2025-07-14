"use client"

import React, { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

import Swal from 'sweetalert2';
import logo from "/public/images/logo.png";
import "./header.css";
import Image from 'next/image';

const Header = () => {
    const router = useRouter();
    const pathname = usePathname();
//   const location = useLocation();
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const user = localStorage.getItem('loggedInUser');
    if (user) {
      setLoggedInUser(user);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You will be logged out!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        router.push('/login');
        Swal.fire('Logged out!', 'You have been successfully logged out.', 'success');
      }
    });
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="image-container">
        <Image src={logo} height="100" width="100" alt="logo" />
        </div>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <nav>
            <ul>
              {["/", "/aboutus", "/quiz", "/blogs", "/writeastory", "/contactus", "/faqs"].map((path, index) => {
                const names = ["Home", "About Us", "Quiz", "Blogs", "Write A Story", "Contact Us", "FAQs"];
                return (
                  <li key={path}>
                    <Link href={path} className={pathname === path ? "active" : ""}>
                      {names[index]}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="navbar-right" ref={dropdownRef}>
          {loggedInUser ? (
            <div className="user-dropdown">
              <button className="navbar-button" onClick={() => setDropdownOpen(!dropdownOpen)}>
                Welcome, {loggedInUser.charAt(0).toUpperCase() + loggedInUser.slice(1)}
              </button>
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <button onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          ) : (
            <button type="button" onClick={() => router.push('/login')} className="navbar-button">
              LOGIN
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
