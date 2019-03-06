import React from 'react'
import { connect } from 'react-redux'
import { clubSelector } from './Selectors';

const Output = ({ clubName }) => (
    clubName ? <h2>{clubName}</h2> : null
)

export default connect(state => ({
    clubName: clubSelector(state)
}))(Output)