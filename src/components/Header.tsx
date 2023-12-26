import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false);

  const menu = useRef<HTMLElement>(null);

  const handleKeyboardDisableMenu = (e: KeyboardEvent) => {
    if (isExpanded && e.key == "Escape") {
      setIsExpanded(false);
    }
  };

  const handleMouseDisableMenu = (e: MouseEvent) => {
    if (isExpanded && menu.current && !menu.current.contains(e.target as Node))
      setIsExpanded(false);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboardDisableMenu);
    document.addEventListener("click", handleMouseDisableMenu);

    return () => {
      document.removeEventListener("keydown", handleKeyboardDisableMenu);
      document.removeEventListener("click", handleMouseDisableMenu);
    };
  }, [isExpanded]);

  return (
    <header className="min-h-[35vh] bg-[url(assets/images/image-hero-mobile.jpg)] bg-no-repeat bg-cover pt-4 px-4 grid grid-cols-[1fr_auto] items-start">
      <img
        src="./assets/images/logo.svg"
        alt=""
        className="w-32 relative z-10"
      />
      <button
        type="button"
        aria-expanded={isExpanded}
        aria-controls="content"
        className="pl-2 pb-2"
        onClick={(event) => {
          event.stopPropagation();
          setIsExpanded((value) => !value);
        }}
      >
        {isExpanded ? (
          <img
            src="./assets/images/icon-close-menu.svg"
            alt=""
            className="size-4 relative z-10"
          />
        ) : (
          <img
            src="./assets/images/icon-hamburger.svg"
            alt=""
            className="size-4 relative z-10"
          />
        )}
      </button>
      <nav
        id="content"
        className={`font-primary bg-white absolute top-14 w-[calc(100%-2rem)] rounded-lg [box-shadow:0px_0px_0px_500rem_rgba(0,0,0,0.3)]  ${
          isExpanded ? "" : "hidden"
        }`}
        ref={menu}
      >
        <ul>
          <li className="w-full py-4 px-4 font-medium text-lg border-b border-neutral-dark-gray">
            <a href="" className="w-full">
              About
            </a>
          </li>
          <li className="py-4 px-4 font-medium text-lg border-b border-neutral-dark-gray">
            <a href="" className="w-full">
              Discover
            </a>
          </li>
          <li className="py-4 px-4 font-medium text-lg">
            <a href="" className="w-full">
              Get Started
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
