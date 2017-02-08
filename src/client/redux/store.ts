import { createStore } from 'redux'

import { reducer } from './reducer'

export const create = () => createStore(reducer)
