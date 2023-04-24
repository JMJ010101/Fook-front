import React from "react";

import { Link } from "react-router-dom";
import logo from "../Image/fook_logo3.png";
import { Button } from "../NavBar/NavBarSty";
import { BnContainer, Brand, LButtonBox, RButtonBox } from "./BotNavSty";

const BotNav = () => {
  return (
    <>
      <Link to="/">
        <Brand src={logo} alt=""></Brand>
      </Link>
      <BnContainer>
        <LButtonBox>
          <Link to="/mypage">
            <Button style={{ float: "right" }}>
              <span class="material-symbols-outlined">
                settings_accessibility
              </span>
            </Button>
          </Link>
        </LButtonBox>

        <RButtonBox>
          <Link to="/login">
            <Button>
              <span class="material-symbols-outlined">login</span>
            </Button>
          </Link>
        </RButtonBox>
      </BnContainer>
    </>
  );
};

export default BotNav;
