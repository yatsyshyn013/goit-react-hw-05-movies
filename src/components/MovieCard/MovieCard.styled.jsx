import styled from '@emotion/styled'
import { Link, useParams, Outlet, useLocation } from "react-router-dom";

export const GoBackBtn = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #E186D6;
    color: white;
    font-size: 40px;
    text-decoration: none;
    border-radius: 50%;
    width: 40px;
    padding: 10px;
    margin: 20px;
    margin-left: 0px;
`;

export const MovieContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* padding-left: 20px; */
    padding-right: 150px;
`

export const MovieInfo = styled.div`
    margin-left: 30px;
    /* height: 600px; */
`

export const AdditionalInfo = styled.div`
    display: flex;
    /* flex-direction: column; */
    /* justify-content: center; */
    align-items: center;
    margin-top: 20px;
    
`

export const PageLink = styled(Link)`
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
    
    
    margin-top: 20px;
    font-size: 40px;
    text-decoration: none;
    border-radius: 6px;
    width: 150px;
    padding: 10px;
    /* margin: 20px; */

    background-color: #E186D6;
    color: white;

    :last-of-type{
        margin-left: 50px;
    }

    
    
`
export const MovieName = styled.div`
margin-bottom: 20px;
`

export const MovieGenres = styled.div`
margin-bottom: 20px;
`
export const MovieOverview = styled.div`
margin-bottom: 20px;
`

