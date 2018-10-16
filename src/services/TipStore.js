import {flow, types} from 'mobx-state-tree'
import Tip from '../models/Tip'
import getTips from './apis/tips';

const TipStore = types.model('TipStore', {
  tips: types.optional(types.map(Tip), {})
}).actions((self) => {
  const fetchTips = flow(function* () {
    console.log('i am getting here')
    const tips = yield getTips();
    console.log('returned', tips[0])
    console.log('before', self.tips)
    tips.forEach((tip) => addTip(tip))
    console.log('after', self.tips)
    return self.tips;
  });

  const addTip = (tip) => {
    self.tips.set(tip.id, tip)
  }
  return {fetchTips}
})

export default TipStore;