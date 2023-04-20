import { Link, Outlet } from "react-router-dom";
import "./Layout.scss";
import MiniCart from "../MiniCart";

function Layout() {
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <Link to="/">Logo</Link>
        </div>
        <div className="header__cart">
          <MiniCart />
        </div>
      </header>
      <div className="main">
        <Outlet />
      </div>
      <footer className="footer">
        Copyright 2023 by 28Tech
      </footer>
    </>
  )
}

export default Layout;