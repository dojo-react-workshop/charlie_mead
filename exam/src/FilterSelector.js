import React from 'react';
import { string, func, array } from 'prop-types';

const FilterSelector = ({ filters, onChange, selectedFilter }) => {
    if (filters.length < 1) { return null; }
    const options = filters.map((filter) => <option key={filter} value={filter}>{filter}</option>)

    return (
        <div className="row">
            <div className="columns large-6 large-centered medium-6 medium-centered small-10 small-centered">
                <label>Filter repos by primary language</label>
                <select value={selectedFilter} onChange={onChange}>
                    {options}
                </select>
            </div>
        </div>
    )
}

FilterSelector.propTypes = {
    filters: array.isRequired,
    onChange: func.isRequired,
    selectedFilter: string.isRequired
}

export default FilterSelector;