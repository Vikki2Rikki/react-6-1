import { initialState } from './initialState';

export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'createToDos':
      return {
        ...state,
        todo: payload,
      };
    case 'updateTodos':
      return {
        ...state,
        todo: [...state.todo, payload],
      };

    default:
      return state;
  }
};
