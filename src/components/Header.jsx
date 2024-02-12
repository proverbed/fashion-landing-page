import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "../assets/logo.png";
import { useState } from "react";

export default function Header() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  function ShowMobileNav() {
    if (!nav) {
      return null;
    }

    return (
      <>
        <CloseIcon
          sx={{ color: "black", fontSize: "2.5rem" }}
          onClick={openNav}
          className={styles.closeButton}
        />
        <nav className={styles.mobileNav}>
          <ul>
            <li>
              <Link to="/" onClick={openNav}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" onClick={openNav}>
                About
              </Link>
            </li>
            <li>
              <Link to="testimonials" onClick={openNav}>
                Testimonials
              </Link>
            </li>
            <li>
              <Link to="team" onClick={openNav}>
                Our Team
              </Link>
            </li>
            <li>
              <Link to="contacts" onClick={openNav}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </>
    );
  }

  return (
    <>
      <nav>
        <header>
          <div className={styles.logo}>
            <Link to="/">
              <img src={Logo} alt="Logo image"></img>
            </Link>
          </div>
          <nav className={styles.desktopNav}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="about">About</Link>
              </li>
              <li>
                <Link to="testimonials">Testimonials</Link>
              </li>
              <li>
                <Link to="team">Our Team</Link>
              </li>
              <li>
                <Link to="contacts">Contact</Link>
              </li>
            </ul>
          </nav>
          <ShowMobileNav />
          <MenuIcon
            sx={{ color: "black", fontSize: "2.5rem" }}
            onClick={openNav}
            className={styles.menuIcon}
          />
        </header>
      </nav>
    </>
  );
}
