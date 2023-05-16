import styled from '@emotion/styled'
import { NavLink } from "react-router-dom";

export const NavigationContainer = styled.header`
  /* border-bottom: 1px solid; */
  display: flex;
  align-items: center;
  
  width: 100vw;
  height: 60px;
  /* margin-bottom: 30px; */
  padding: 0px;
  
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  /* background-color: black; */
`

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  margin-left: 40px;

  &.active {
    color: #E186D6;
  }
`;