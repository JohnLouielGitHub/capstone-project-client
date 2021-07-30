import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import ActiveLink from "./ActiveLink";
import React from "react";
import styled from "styled-components";

const StyledBurger = styled.button`
top: 20px;
right: 30px;
position: absolute;
display: flex;
flex-direction: column;
justify-content: space-around;
width: 2rem;
height: 2rem;
background: transparent;
border: none;
cursor: pointer;
padding: 0;
z-index: 10;

&:focus {
  outline: none;
}

div {
  width: 2rem;
  height: 0.25rem;
  background: ${({ open }) => (open ? "#0D0C1D" : "#EFFFFA")};
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;

  :first-child {
    transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
  }

  :nth-child(2) {
    opacity: ${({ open }) => (open ? "0" : "1")};
    transform: ${({ open }) =>
      open ? "translateX(20px)" : "translateX(0)"};
  }

  :nth-child(3) {
    transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
  }
}
`;


const StyledMenu = styled.nav`
display: flex;
flex-direction: column;
background: #effffa;
transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-200%)")};
width: 50vw;
height: 100vh;
text-align: left;
position: absolute;
top: 0;
right: 0;
transition: transform 0.5s ease-in-out;

@media (max-width: 576px) {
  width: 50vw;
}
`;



const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  const router = useRouter();


  const Menu = ({ open }) => {
    return (
      <StyledMenu className="styled-menu bg-dark" open={open}>
        <div className="col-12">
          <div className="hamburger-menu"></div>
        <ul className="nav-menu bg-dark h-100 justify-content-lg-between align-items-center px-4 py-3">
              <li className="list-unstyled mb-3">
                <ActiveLink
                  passHref href="/"
                  className="text-decoration-none text-white"
                >
                  Home
                </ActiveLink>
              </li>
              <li className="list-unstyled mb-3">
                <ActiveLink
                  passHref href="/about"
                  className="text-decoration-none text-white"
                >
                  About Us
                </ActiveLink>
              </li>
              <li className="list-unstyled mb-3">
                <ActiveLink
                  passHref href="/Law Updates"
                  className="text-decoration-none text-white"
                >
                  Law Updates
                </ActiveLink>
              </li>
              <li className="list-unstyled mb-3">
                <ActiveLink
                  passHref href="/profile"
                  className="text-decoration-none text-white"
                >
                  Our lawyers
                </ActiveLink>
              </li>
              <li className="list-unstyled mb-3">
                <ActiveLink
                  passHref href="/blogs"
                  className="text-decoration-none text-white"
                >
                  Everyday Law
                </ActiveLink>
              </li>
              <li className="list-unstyled mb-3">
                <ActiveLink
                  passHref href="/Contact Us"
                  className="text-decoration-none text-white"
                >
                  Contact Us
                </ActiveLink>
              </li>
            </ul>

        </div>

      </StyledMenu>
    );
  };
  const Burger = ({ open, setOpen }) => {
    return (
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    );
  };

  return (
    <nav
      className="gray-bg position-fixed top-0 w-100 border-bottom border-2 border-dark"
      style={{ zIndex: 10 }}
    >
      <div className="container-md h-100">
        <div className="row h-100">
          <div className="col-6 col-md-3 col-lg-4">
            <div className="logo d-flex h-100 justify-content-center justify-content-md-start align-items-center">
              <div className="me-0 me-md-2 mb-0">
                <Image src="/Logo.png" width={60} height={60} alt="Logo" />
              </div>
              <h1 className="mb-0 ms-1 lexyellow"> Men of Law Corporate</h1>
            </div>
          </div>
          <div className="col-6 d-md-none position-relative">
            <div className="h-100 d-flex justify-content-center align-items-center">
              <div ref={node}>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
              </div>
            </div>
          </div>
          <div className="col-md-7 col-lg-6 d-none d-md-block ">
            <ul className="nav-menu d-md-flex h-100 justify-content-lg-between align-items-center p-0">
              <li className="text-center list-unstyled">
                <ActiveLink
                  passHref href="/"
                  className="text-decoration-none text-white"
                >
                  Home
                </ActiveLink>
              </li>
              <li className="text-center list-unstyled">
                <ActiveLink
                  passHref href="/about"
                  className="text-decoration-none text-white"
                >
                  About Us
                </ActiveLink>
              </li>
              <li className="text-center list-unstyled">
                <ActiveLink
                  passHref href="/Law Updates"
                  className="text-decoration-none text-white"
                >
                  Law Updates
                </ActiveLink>
              </li>
              <li className="text-center list-unstyled">
                <ActiveLink
                  passHref href="/profile"
                  className="text-decoration-none text-white"
                >
                  Our lawyers
                </ActiveLink>
              </li>
              <li className="text-center list-unstyled">
                <ActiveLink
                  passHref href="/blogs"
                  className="text-decoration-none text-white"
                >
                  Everyday Law
                </ActiveLink>
              </li>
              <li className="text-center list-unstyled">
                <ActiveLink
                  passHref href="/Contact Us"
                  className="text-decoration-none text-white"
                >
                  Contact Us
                </ActiveLink>
              </li>
            </ul>
          </div>
          <div className="col-md-2 d-none d-md-block">
            <div className="d-flex h-100 w-100 justify-content-center align-items-center">
              <Link passHref href="/login">
                <button className="login-btn rounded-pill border-0 px-5 py-1 font-main fw-bold">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
