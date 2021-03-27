import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import {CgHome} from 'react-icons/cg';
// import {MdExplore} from 'react-icons/Explore';
import {FiPlus} from 'react-icons/fi';
import {FiUser} from 'react-icons/fi';

import {
    useHistory
} from 'react-router-dom';



const Position = styled.div`
`;

const Container = styled.div`
  position: fixed;
  bottom:0;
  left:50%;
  transform: translate(-50%, 0%);

  display: flex;
  flex-direction: column;
  padding-top: 5px;
  width:321px;
  height: 70px;
  justify-content: center;
  align-items: center;
  background-color: #1E1C21;
  border-radius: 15px 15px 0px 0px;
  border: 5px solid #000000;
`;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const IconContainer = styled.div`
  -webkit-transition: all 0.3s ease-out 0.1s;
  -moz-transition: all 0.3s ease-out 0.1s;
  -o-transition: all 0.3s ease-out 0.1s;
  transition: all 0.3s ease-out 0.1s;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 15px 20px;
  cursor: pointer;
  &:after {
    position: absolute;
    content: "";
    bottom: 8px;
    height: 5px;
    width: 50px;
    border-radius: 10px;
    color: white;
    background-color: white;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }
`;

const HomeCont = styled(IconContainer)`
  &:after {
    opacity: ${(props) => (props.active == 1 ? "1" : "0")};
  }
`;

// const ExploreCont = styled(IconContainer)`
//   &:after {
//     opacity: ${(props) => (props.active == 2 ? "1" : "0")};
//   }
// `;

const PlusCont = styled(IconContainer)`
  &:after {
    opacity: ${(props) => (props.active == 2 ? "1" : "0")};
  }
`;

const ProfileCont = styled(IconContainer)`
  &:after {
    opacity: ${(props) => (props.active == 3 ? "1" : "0")};
  }
`;

const HomeIcon = styled.div`
  filter: ${(props) =>
    props.active == 1
      ? "invert(.3) sepia(1) saturate(2) hue-rotate(10deg) drop-shadow(0 5px 0px #8B3B3A)"
      : ""};
`;

// const ExploreIcon = styled.img`
//   filter: ${(props) =>
//     props.active == 3
//       ? "invert(.3) sepia(1) saturate(2) hue-rotate(10deg) drop-shadow(0 5px 0px #8B3B3A)"
//       : ""};
// `;

const PlusIcon = styled.div`
  filter: ${(props) =>
    props.active == 2
      ? "invert(.3) sepia(1) saturate(2) hue-rotate(10deg) drop-shadow(0 5px 0px #8B3B3A)"
      : ""};
`;


const ProfileIcon = styled.div`
  filter: ${(props) =>
    props.active == 3
      ? "invert(.3) sepia(1) saturate(2) hue-rotate(10deg) drop-shadow(0 5px 0px #8B3B3A)"
      : ""};
`;
// const ProfileIcon = styled.img`
//   filter: ${(props) =>
//     props.active == 2
//       ? "invert(.3) sepia(1) saturate(2) hue-rotate(10deg) drop-shadow(0 5px 0px #8B3B3A)"
//       : "drop-shadow(0 5px 0px #8B3B3A)"};
// `;

const Text = styled.p`
  color: white;
  font-size:10px;
  margin: 13px 0px;
`;

const NavBar = ({ propActive }) => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    setActive(propActive);
  });

  const history = useHistory();

  return (
    <Position>
      <Container>
        <OptionContainer>


            {/* <HomeCont onClick={() => history.push("/Home")}  active={active}>
              <HomeIcon
                src="home.svg"
                active={active}
              ></HomeIcon>

            </HomeCont> */}


            <HomeCont onClick={() => history.push("/Home")}  active={active}>
              <HomeIcon>
              <CgHome size="24px" color="#F06449"/>
              </HomeIcon>
            </HomeCont>

            {/* <ExploreCont onClick={() => history.push("/AddSongs")}  active={active}>
              <ExploreIcon
                src="Explore.svg"
                active={active}
              ></ExploreIcon>

            </ExploreCont> */}

            {/* <PlusCont  onClick={() => history.push("/NewPlaylist")} active={active}>
              <PlusIcon
                src="plus.svg"
                active={active}
              ></PlusIcon>
            </PlusCont>  */}

            <PlusCont  onClick={() => history.push("/NewPlaylist")} active={active}>
              <PlusIcon>
                <FiPlus size="24px" color="#F06449"/>
              </PlusIcon>
            </PlusCont>


            {/* <ProfileCont  onClick={() => history.push("/Profile")} active={active}>
              <ProfileIcon
                src="user.svg"
                active={active}
              ></ProfileIcon>

            </ProfileCont> */}


            <ProfileCont  onClick={() => history.push("/Profile")} active={active}>
              <ProfileIcon>
                <FiUser size="24px" color="#F06449"/>
              </ProfileIcon>

            </ProfileCont>


        </OptionContainer>
      </Container>
    </Position>
  );
};

export default NavBar;
