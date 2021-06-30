import React from "react";
import "./style.css";

function Footer() {
  return (
      <nav>
        <ul class="contact_footer bg-light">
            <li class="nav-item">
                <a class="nav-link" href="https://github.com/samuel6roth" target="_blank" rel="noreferrer">Github</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="https://www.linkedin.com/in/samuel-roth-40210415b/" target="_blank" rel="noreferrer">LinkedIn</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="mailto:samuel6roth@gmail.com">Email</a>
            </li>
        </ul>
    </nav>
  );
}

export default Footer;
