import {types} from 'mobx-state-tree';
import TipStore from './TipStore';

const AppStore = types.model('AppStore', {
  tipStore: TipStore
})

export default AppStore;