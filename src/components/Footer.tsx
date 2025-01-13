import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/leorxdxd" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://ph.linkedin.com/in/roel-de-los-reyes-3a5627251" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>A portfolio designed & built by <a href="https://github.com/leorxdxd/Portfolio" target="_blank" rel="noreferrer">Roel Delos Reyes</a> with 💜</p>
    </footer>
  );
}

export default Footer;
