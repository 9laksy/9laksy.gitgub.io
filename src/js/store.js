import { createStore } from 'framework7/lite';
import { removeInHistory, resetAllHistory, setInHistory } from '../utils/functions';

let localHistory = [];
let data = localStorage.getItem("history");
//console.log("data", data);
if (data !== null && data !== '') {
  localHistory = JSON.parse(data);
}
//console.log("localHistory", localHistory);

const store = createStore({
  state: {
    history: localHistory
  },
  getters: {
    history({ state }) {
      //console.log(state.history);
      return state.history;
    }
  },
  actions: {
    addHistory({ state }, history) {
      //console.log("State", state);
      //console.log("History", history);
      state.history = [...state.history, history];

      //to store in browser local storage
      setInHistory(history);
    },
    removeHistory({ state }, index) {
      console.log(index);
      state.history = [
        ...state.history.slice(0, index),
        ...state.history.slice(index + 1)
      ];

      removeInHistory(index);
    },
    deleteAllHistory({ state }) {
      console.log("State", state.history);
      //reset history in redux
      state.history = [];

      //reset history in browser local storage
      resetAllHistory();
    },
  },
})



export default store;
