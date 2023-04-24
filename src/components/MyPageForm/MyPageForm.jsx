import React from "react";
import { InfoBox, InfoButton, SideMenus } from "./MyPage";
import { useState } from "react";
import DetailsForm from "./BoxPages/DetailsForm";
import ChangePwForm from "./BoxPages/ChangePwForm";
import ViewForm from "./BoxPages/ViewForm";

const MyPageForm = () => {
  const [infoBoxContent, setInfoBoxContent] = useState(<DetailsForm />);

  const handleButtonClick = (content) => {
    setInfoBoxContent(content);
  };
  return (
    <>
      <SideMenus>
        <ul>
          <InfoButton onClick={() => handleButtonClick(<DetailsForm />)}>
            <span class="material-symbols-outlined">
              info
              <span
                style={{
                  fontSize: "17px",
                  position: "relative",
                  bottom: "5px",
                  left: "10px",
                }}
              >
                내 정보
              </span>
            </span>
          </InfoButton>
          <InfoButton onClick={() => handleButtonClick(<ChangePwForm />)}>
            <span class="material-symbols-outlined">
              lock
              <span
                style={{
                  fontSize: "17px",
                  position: "relative",
                  bottom: "5px",
                  left: "10px",
                }}
              >
                비밀번호 변경
              </span>
            </span>
          </InfoButton>
          <InfoButton onClick={() => handleButtonClick(<ViewForm />)}>
            <span class="material-symbols-outlined">
              order_approve
              <span
                style={{
                  fontSize: "17px",
                  position: "relative",
                  bottom: "5px",
                  left: "10px",
                }}
              >
                이력 관리
              </span>
            </span>
          </InfoButton>
          <InfoButton>
            <span class="material-symbols-outlined">
              logout
              <span
                style={{
                  fontSize: "17px",
                  position: "relative",
                  bottom: "5px",
                  left: "10px",
                }}
              >
                로그아웃
              </span>
            </span>
          </InfoButton>
        </ul>
      </SideMenus>
      <InfoBox>{infoBoxContent}</InfoBox>
    </>
  );
};

export default MyPageForm;
