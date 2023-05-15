import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
import styled from '@emotion/styled'

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  margin-left: 20px;

  &.active {
    color: #E186D6;
  }
`;

const SharedLayout = () => {
    return (
         <div>
            <header>
        
        <nav>
          <StyledLink to="/" end>Home</StyledLink>
        <StyledLink to="/movies" >Movies</StyledLink>
        </nav>
        </header>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
          </Suspense>
    </div>
    )
}

export default SharedLayout