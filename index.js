import React from 'react'
import "./SearchBox.scss"


const Mysearchbox = (props) => {

    return (
        <div className="search-wrapper">
            <div className="search">
                <input type="text" className="searchTerm" placeholder={"Type your query....."} onChange={props.onChange} />
            </div>
        </div>


    )

}

export default Mysearchbox;