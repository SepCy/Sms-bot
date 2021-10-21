import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function headerView() {
  // Checking location

  const lcoation = useLocation();
  return (
    <nav>
      <div>
        <Link to={""}> Accueil</Link>
      </div>
      <div></div>
    </nav>
  );
}
