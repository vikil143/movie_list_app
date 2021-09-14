import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

interface Props {
  title: string;
}

export default function Header({ title }: Props) {
  return (
    <div>
      {/* {title} */}
      <Navbar color="light" light className="cust-nav" style={{}}>
        <NavbarBrand href="/" className="mr-auto">
          {title}
        </NavbarBrand>
      </Navbar>
    </div>
  );
}
