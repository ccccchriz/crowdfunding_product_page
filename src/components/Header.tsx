import { useState } from "react";

export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <header className="min-h-[35vh] bg-[url(assets/images/image-hero-mobile.jpg)] bg-no-repeat bg-cover pt-4 px-4 grid grid-cols-[1fr_auto] items-start">
      <img src="./assets/images/logo.svg" alt="" className="w-32" />
      <button
        type="button"
        aria-expanded={isExpanded}
        aria-controls="content"
        className="pl-2 pb-2"
        onClick={() => setIsExpanded((value) => !value)}
      >
        {isExpanded ? (
          <img
            src="./assets/images/icon-close-menu.svg"
            alt=""
            className="size-4"
          />
        ) : (
          <img
            src="./assets/images/icon-hamburger.svg"
            alt=""
            className="size-4"
          />
        )}
      </button>
      <nav
        id="content"
        className={`font-primary bg-white ${isExpanded ? "" : "hidden"}`}
      >
        <ul>
          <li className="py-2 px-4 font-medium text-lg">
            <a href="" className="">
              About
            </a>
          </li>
          <li className="py-2 px-4 font-medium text-lg">
            <a href="" className="">
              Discover
            </a>
          </li>
          <li className="py-2 px-4 font-medium text-lg">
            <a href="" className="">
              Get Started
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
