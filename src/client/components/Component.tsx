import * as React from 'react'
import { connect } from 'react-redux'

import * as actions from '../redux/actions'

export const Component = ({
	active,
	actions: {
		toggle,
	},
}) =>
	<div
		onClick={toggle}>
		{active.toString()}
	</div>

export const mapStateToProps = state => ({
	active: state,
})

export const mapDispatchToProps = dispatch => ({
	actions: {
		toggle: () => dispatch(actions.toggle()),
	},
})

export const ComponentContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Component)
