import {
  ADD_TODO
} from "../../actions/actionTypes";

const initialState = {
  list: []
};

export default function (state = initialState, action) {
  switch (action.type) {
  case ADD_TODO:
  {
    console.log(action);
    const { value } = action.payload;
    let list = [...state.list, {
      value: value
    }]
    return Object.assign({}, state, {
      list
    })
  }
  default:
    return state;
  }
}