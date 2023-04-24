import React, { useState } from "react";
import {
  Button,
  Click,
  Nav,
  Search,
  UserList,
  UserListForm,
} from "./NavBarSty";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      text: "공지사항",
      onClick: () => {
        navigate("/notice");
      },
    },
    {
      text: "인기 레시피",
      onClick: () => {
        navigate("/best");
      },
    },
    {
      text: "AI추천",
      onClick: () => {
        navigate("/ai");
      },
    },
  ];

  const [view, setView] = useState(false);

  return (
    <Nav>
      <Search>
        <input type="text" placeholder="만들고싶은 요리를 검색해보세요." />
        <button
          style={{ border: "none", backgroundColor: "transparent" }}
          className="material-icons"
        >
          search
        </button>
      </Search>
      <Button>
        <div>
          <ul
            onClick={() => {
              setView(!view);
            }}
          >
            <span className="material-symbols-outlined">menu</span>
            {view && (
              <>
                <UserListForm>
                  <Click>
                    {menuItems.map((item, index) => {
                      return (
                        <UserList key={index} onClick={item.onClick}>
                          {item.text}
                        </UserList>
                      );
                    })}
                  </Click>
                </UserListForm>
              </>
            )}
          </ul>
        </div>
      </Button>
    </Nav>
  );
};

export default NavBar;
