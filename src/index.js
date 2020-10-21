import {createStore, bindActionCreators} from 'redux';
import reducer from './reducer';
import * as actions from './actions';
import {Counter} from './counter';

//  создаем хранилище
let store = createStore(reducer);
const {dispatch} = store;

// actions = {
//   inc: inc,
//   dec: dec,
//   res: res
// }

const {inc, dec, res} = bindActionCreators(actions, dispatch);
// const decDispatch = bindActionCreators(dec, dispatch);
// const resDispatch = bindActionCreators(res, dispatch);

//  функция обновляет counter
const update = () => {
    
}

// при каждом изменении
store.subscribe(update);
