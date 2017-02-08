import actionCreatorFactory from 'redux-typescript-actions'

const actionCreator = actionCreatorFactory()

export const sentinel = actionCreator('sentinel')
export const toggle = actionCreator('toggle')
