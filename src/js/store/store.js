import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import fbConfig from '../../configs/fbConfig';
import thunk from "redux-thunk";

// const initialiseSagaMiddleware = createSagaMiddleware();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig),
    storeEnhancers()
  )
);

// initialiseSagaMiddleware.run(apiSaga);

export default store;
