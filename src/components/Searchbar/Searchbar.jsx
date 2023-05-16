import { useState} from "react";
import { FaSearch } from 'react-icons/fa/';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

import styled from '@emotion/styled'
// import Searchbar from "components/Searchbar/Searchbar";


const StyledBtn = styled.button`
                height: 35px;
                border: none;
                font: inherit;
                color: inherit;
                background-color: #E186D6;
                color: white;
                :hover {
                        background-color: #dd9bd5
                    }
`

const Searchbar = ({ setSearchParams }) => {
    // const [searchParams, setSearchParams] = useSearchParams();
    // const query = searchParams.get("query");

    const [querySearch, setQuerySearch] = useState('')

    const onHandleCSubmit = (e) => {
        e.preventDefault()

        if (querySearch === "" ) {
            toast.error('The search field cannot be empty')
            return;
        }

        


        const normalizedQuery = querySearch.trim().toLowerCase()
        setSearchParams({ query: normalizedQuery })
        setQuerySearch('')
    }
    
    const onHandleChange = (e) => {
        const { value } = e.currentTarget
        setQuerySearch(value)
    }


        return (
            <form onSubmit={onHandleCSubmit} style={{
                display: 'flex',
               
                alignItems: 'center'
            }}>
                <input
                    type="text"
                    value={querySearch}
                    onChange={onHandleChange}
                    style={{
                        height: '30px',
                        width: '300px',
                        fontSize: '20px'
                    }}
                />
                <StyledBtn type="submit" >
                    <FaSearch style={{
                        height: '30px',
                        display: 'flex',
                        alignItems: 'center'

                    }} />
                </StyledBtn>

                <ToastContainer
                autoClose={3000}
                position="top-right"
                theme="colored"
                style={{ fontSize:'30px'}}
/>
            </form>

            
        )
    }


export default Searchbar;

Searchbar.propTypes = {
    setSearchParams: PropTypes.func.isRequired,
}