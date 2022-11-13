import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../components/ui/buttons/Button";

const Header = () => {
  const [menu, setMenu] = useState(false);

  // If user resize the window, close the menu
  const handleResize = () => {
    if (window.innerWidth < 768 && menu) {
      setMenu(false);
    }
  };

  // Detect toggler click
  useEffect(() => {
    if (menu) {
      document.body.classList.add("noScroll");
    } else {
      document.body.classList.remove("noScroll");
    }
    window.addEventListener("resize", handleResize);
  }, [menu]);

  return (
    <header>
      <div className="z-50 hidden w-full px-24 pt-8 pb-8 transition-all duration-300 ease-out md:block">
        <div className="flex items-center justify-between mx-auto max-w-screen-xl">
          <Link to="/">
            <div
              aria-label="Homepage"
              className="font-bold text-grey-500 text-xl"
            >
              NFTSea.io
            </div>
          </Link>
          <nav>
            <ul className="space-x-12 text-base font-medium text-grey-300">
              <li className="inline-block text-grey-500">
                <Link to="/">Home</Link>
              </li>
              <li className="inline-block">
                <Link to="/">Explore</Link>
              </li>
              <li className="inline-block">
                <Link to="/">Marketplace</Link>
              </li>
              <li className="inline-block">
                <Link to="/">Community</Link>
              </li>
              <li className="inline-block">
                <Link to="/">
                  <Button title="Connect Wallet" href="" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="z-50 block w-full px-4 sm:px-8 pt-8 pb-8 transition-all duration-300 ease-out md:hidden ">
        <div className="flex items-center justify-between mx-auto max-w-screen-3xl">
          <div className="z-50 flex cursor-pointer">
            <Link to="/">
              <div
                aria-label="Homepage"
                className="font-bold text-grey-500 text-xl"
              >
                NFTSea.io
              </div>
            </Link>
          </div>
          <div className="z-50 flex cursor-pointer">
            <button
              aria-label="Toggle main menu"
              aria-haspopup="menu"
              aria-expanded={menu ? "true" : "false"}
              title={menu ? "Close main menu" : "Open main menu"}
              className="flex flex-col items-center justify-center w-12 h-12 space-y-1.5"
              onClick={() => setMenu(!menu)}
            >
              <span
                className={`h-[0.25rem] w-8 bg-swipey-blue transition-all duration-300 ease-in-out rounded-md ${
                  menu && "translate-y-[7px] -rotate-45"
                }`}
              ></span>
              <span
                className={`h-[0.25rem] w-8 bg-swipey-blue transition-all duration-300 ease-in-out rounded-md ${
                  menu && "opacity-0"
                }`}
              ></span>
              <span
                className={`h-[0.25rem] w-8 bg-swipey-blue transition-all duration-300 ease-in-out rounded-md ${
                  menu && "-translate-y-[12px] rotate-45"
                }`}
              ></span>
            </button>
          </div>
          <div
            className={`fixed z-10 top-0 -right-full flex flex-col transition-all duration-500 justify-between h-full bg-swipey-white mt-auto bottom-0 ease-in-out ${
              menu && "!w-full right-0 left-0"
            }`}
          >
            <div className="flex justify-between h-[65%] mt-auto bottom-0 flex-col">
              <nav>
                <ul className="flex flex-col m-8 space-y-8 font-sans text-2xl font-medium text-swipey-blue">
                  <li
                    className={`mr-auto underline-offset-8 ${
                      menu && "animate-[menu_0.5s_ease-in-out] duration-100"
                    }`}
                    onClick={() => setMenu(!menu)}
                  >
                    <Link to="/">Home</Link>
                  </li>
                  <li
                    className={`mr-auto underline-offset-8 ${
                      menu && "animate-[menu_0.75s_ease-in-out] duration-200"
                    }`}
                    onClick={() => setMenu(!menu)}
                  >
                    <Link to="/">Explore</Link>
                  </li>
                  <li
                    className={`mr-auto underline-offset-8 ${
                      menu && "animate-[menu_1s_ease-in-out] duration-300"
                    }`}
                    onClick={() => setMenu(!menu)}
                  >
                    <Link to="/">Marketplace</Link>
                  </li>
                  <li
                    className={`mr-auto underline-offset-8 ${
                      menu && "animate-[menu_1s_ease-in-out] duration-400"
                    }`}
                    onClick={() => setMenu(!menu)}
                  >
                    <Link to="/">Community</Link>
                  </li>
                </ul>
              </nav>
              <div className="m-8">Button here</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
