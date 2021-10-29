import { FormControl, InputGroup } from 'react-bootstrap'

import './InputSearch.scss'

const InputSearch = ({ onSearch, search }) => {

    return (
        <InputGroup className="input-wrapper">
            <div className="input-wrapper__icon">
                <img src="https://img.icons8.com/material-outlined/24/000000/search--v1.png" alt='' />
            </div>
            <FormControl 
                className="input-wrapper__search"
                placeholder="Filter by author..."
                aria-label="Author"
                aria-describedby="basic-addon1"
                onChange={(e) => onSearch(e.target.value)}
                value={search}
            />
        </InputGroup>
    )
}

export default InputSearch
