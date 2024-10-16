import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  Navbar,
  NavbarToggle,
  TextInput,
} from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Header() {
  const path = useLocation().pathname;
  const { currentUser } = useSelector((state) => state.user);
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-2 bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 rounded-lg text-white">
          Versatile
        </span>
        Vault
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray">
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline " pill>
          <FaMoon />
        </Button>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="user" img={currentUser.profilePicture} rounded />}
          >
            <Dropdown.Header>
                <span className="block text-sm">@{currentUser.username}</span>
                <span className="block text-sm font-medium truncate">@{currentUser.email}</span>

            </Dropdown.Header>
            <Link to={'/dashboard?tab=profile'}>
            <DropdownItem>Profile</DropdownItem></Link>
            <Dropdown.Divider/>
            <DropdownItem>Sign Out</DropdownItem>
          </Dropdown>
        ) : (
          <Link to="/sign-in">
            <Button
              className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 rounded-lg text-white"
              outline
            >
              Sign In
            </Button>
          </Link>
        )}

        <NavbarToggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/" className="font-bold text-xl">
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about" className="font-bold text-xl">
            About
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link to="/projects" className="font-bold text-xl">
            Projects
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
