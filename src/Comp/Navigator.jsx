import React from "react";
import { Navbar, Container, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Navigator = () => {
  const navigate = useNavigate();
  const options = [
    { value: "", label: "Home" },
    { value: "ParamAStates", label: "ParamsAndSates" },
    { value: "Forum", label: "Forum" },
  ];

  return (
    <Navbar className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/");
          }}
        >
          Navigator
        </Navbar.Brand>
        <Dropdown>
          <Dropdown.Toggle variant="warning" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {options.map((x) => (
              <Dropdown.Item
                onClick={() => {
                  navigate(x.value);
                }}
              >
                {x.label}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigator;
