import { isType } from 'redux-typescript-actions'

import * as actions from './actions'

export const reducer = (state = false, action) => {
	if (isType(action, actions.toggle)) {
		return !state
	}

	return state
}
