import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import TCBReducer from "./reducers/TCBReducer";



const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 

    const saveLocalStorage =(state)=>{
        try{
          const localState = JSON.stringify(state)
          localStorage.setItem('state',localState)
        }catch(e){
          console.log(e)
        }
    }

    const loadDataFromLocalStorage =()=>{
        try{
          const localState = localStorage.getItem('state')
          if(localState === null) return undefined
           return JSON.parse(localState)

        } catch(e){
          console.log(e)
        }
    }


    const persistanceState = loadDataFromLocalStorage()

    const store = createStore(
      combineReducers({
          tvbDta:TCBReducer
      }),
      
      initialState,
      composeEnhancer(applyMiddleware(thunk)),
      persistanceState,
    );

 store.subscribe(()=> saveLocalStorage(store.getState()))

export default store;