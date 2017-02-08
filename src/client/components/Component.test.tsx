import { mount } from 'enzyme'
import * as React from 'react'
import { Provider } from 'react-redux'

import { create } from '../redux/store'
import { ComponentContainer } from './Component'

describe('<Component />', () => {
	it('toggles the text on click', () => {
		const store = create()
		const wrapper = mount(
			<Provider store={store}>
				<ComponentContainer />
			</Provider>,
		)
		const div = wrapper.find('div')

		expect(div.text()).toBe('false')

		div.simulate('click')
		expect(div.text()).toBe('true')
	})
})
