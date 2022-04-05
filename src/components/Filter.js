import React from 'react'

const Filter = (props) => {
    return (
        <div>
            <input 
            value={props.newFilter} 
            onChange={props.handleFilterChange}
            placeholder="Search for book title..."/>
        </div>
    )
}

export default Filter