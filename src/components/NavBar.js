import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linksJSX = links.map(link => {
    return <a key={link} href={"#"+link}>{link}</a>
  })

  return <nav>{linksJSX}</nav>
}

export default NavBar;
