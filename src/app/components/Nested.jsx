import React from "react";

const Nested = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Nested Routes</h1>
      <nav style={styles.nav}>
        <NavLink to="/" style={styles.link} activeStyle={styles.active}>
          Home
        </NavLink>
        <NavLink to="/about" style={styles.link} activeStyle={styles.active}>
          About
        </NavLink>
        <NavLink
          to="/about/team"
          style={styles.link}
          activeStyle={styles.active}
        >
          Team
        </NavLink>
        <NavLink
          to="/about/contact"
          style={styles.link}
          activeStyle={styles.active}
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default Nested;
