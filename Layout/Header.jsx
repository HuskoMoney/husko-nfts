import React from "react";

export default function Header() {
  return (
    <header className="bg-slate-500">
      <nav className="header__nav  flex justify-center sm:justify-start">
        {/* <div className="header__nav--mobile h-8">
          <span className="menu_text">Menu</span>
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </div> */}
        <ul className="flex font-bold text-white ">
          <li>
            <a className="active" href="http://#">
              {" "}
              Home
            </a>
          </li>
          <li>
            <a href="http://#"> About</a>
          </li>
          <li>
            <a href="http://#"> News</a>
          </li>
          <li>
            <a href="http://#"> Exchanges</a>
          </li>
          <li>
            <a href="http://#"> Dapps</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
