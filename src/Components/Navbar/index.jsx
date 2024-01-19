import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../Context";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useScrollPosition } from "../../Utils/useScrollPosition";

// refactored code to avoid repetition. activeStyle was getting repeated.
const NavItem = ({ to, children, setSearchByCategory }) => {
  const activeStyle = "underline text-gray-500 underline-offset-4";
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? activeStyle : undefined)}
        onClick={() => setSearchByCategory && setSearchByCategory(to.slice(1))}
      >
        {children}
      </NavLink>
    </li>
  );
};

const Navbar = () => {
  const context = useContext(AppContext);

  function classNamesNavBarScroll(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const scrollPosition = useScrollPosition();
  // console.log(scrollPosition);

  return (
    <header
      className={classNamesNavBarScroll(
        scrollPosition > 0
          ? "md:shadow md:bg-white md:-translate-y-6 md:h-auto"
          : "md:shadow-none md:bg-none md:translate-y-0 md:h-none",
        "absolute md:fixed top-2 inset-x-0 z-40 md:transition-shadow-xl md:shadow-black md:transition-color duration-500 md:-translate-y-6 md:h-20 lg:h-14"
      )}
    >
      <nav className="hidden sm:flex flex-col sm:flex-row justify-between items-center fixed z-10 w-full py-5 px-8 text-md font-light top-0">
        <ul className="flex flex-col sm:flex-row items-center gap-3">
          <li className="font-semibold text-lg">
            <NavLink to="/" onClick={() => context.setSearchByCategory(null)}>
              Shopi
            </NavLink>
          </li>
          <NavItem to="/" setSearchByCategory={context.setSearchByCategory}>
            All
          </NavItem>
          <NavItem
            to="/clothes"
            setSearchByCategory={context.setSearchByCategory}
          >
            Clothes
          </NavItem>
          <NavItem
            to="/electronics"
            setSearchByCategory={context.setSearchByCategory}
          >
            Electronics
          </NavItem>
          <NavItem
            to="/furnitures"
            setSearchByCategory={context.setSearchByCategory}
          >
            Furnitures
          </NavItem>
          <NavItem to="/toys" setSearchByCategory={context.setSearchByCategory}>
            Toys
          </NavItem>
        </ul>

        <ul className="hidden sm:flex items-center gap-3">
          <NavItem to="/my-orders">My Orders</NavItem>
          {/* <NavItem to="/sign-in">Sign In</NavItem>
          <NavItem to="/my-account">My Account</NavItem> */}
          <li>
            <NavLink
              to="/card"
              className={`flex justify-center items-center ${({ isActive }) =>
                isActive ? activeStyle : undefined}`}
            >
              <HiOutlineShoppingCart className="mr-1" />
              <p>{context.cartProducts.length}</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
