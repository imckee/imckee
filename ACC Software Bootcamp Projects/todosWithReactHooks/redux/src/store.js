import {createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
        TODO_COMPLETION_TOGGLE, 
        TODO_ADD, 
        TODO_INPUT_CHANGE,
        // TODO_DELETE
    } from './actionTypes'

 // it is a POJO (plain old javascript object)
 const initialState = {
    todos: [{id: 1, description: "Call mom", isComplete: false}],
    newTodo: ""
  }

const reducer = (state = initialState, action) => {
    switch(action.type){
        case TODO_INPUT_CHANGE:
            return {...state, newTodo: action.payload}
        case TODO_ADD:
            return {
                ...state, 
                todos: [
                    ...state.todos, 
                    {
                        id: Date.now(), 
                        description: state.newTodo, 
                        isComplete: false
                    }
                ],
                newTodo: ""
            }
        case TODO_COMPLETION_TOGGLE:
            {
                let s = {...state}
                let this_t = s.todos.find(t => t.id === action.payload)
                // flip the status
                this_t.isComplete = !this_t.isComplete;
                return s;
            }
        default:
            return state
    }
}

export const store = createStore(reducer, composeWithDevTools());