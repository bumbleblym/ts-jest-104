import * as actions from './actions'
import { reducer } from './reducer'

describe('reducer', () => {
	it('returns the initial state when given an undefined state', () => {
		expect(reducer(undefined, actions.sentinel())).toBe(false)
	})

	it('returns the initial state when given an unknown action', () => {
		expect(reducer(false, actions.sentinel())).toBe(false)
		expect(reducer(true, actions.sentinel())).toBe(true)
	})

	it('toggles the state', () => {
		expect(reducer(false, actions.toggle())).toBe(true)
		expect(reducer(true, actions.toggle())).toBe(false)
	})
})
