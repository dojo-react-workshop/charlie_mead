import React from 'react';
import Link from './Link';
import { connect } from 'react-redux';

function mapStateToProps(state, props) {
    return {
        active: (state.visibilityFilter === props.filter)
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        onClick: () => dispatch({
            type: "SET_VISIBILITY_FILTER",
            filter: props.filter
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Link)