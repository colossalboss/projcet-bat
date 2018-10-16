import {types} from 'mobx-state-tree';

const Tip = types.model({
  id: types.identifier,
  outcome: types.optional(types.boolean, false),
  message: types.string,
  bet: types.string,
  // user: types.optional(types.frozen, {}),
  // match: types.optional(types.frozen, {}),
  // comments: types.optional(types.map(Comment), {})
})

// const Match = types.model({
//   id: types.identifier,
//   homeTeam: types.string,
//   awayTeam: types.string,
//   score: types.optional(types.string, ''),
//   time: types.optional(types.string, ''),
// });

// const Comment = types.model({
//   id: types.identifier,
//   body: types.string,
//   user: types.optiona(types.map(User), {})
// })

// const Point = types.model({
//   id: types.identifier,
//   point: types.string,
//   category: types.string
// })

// const User = types.model({
//   id: types.identifier,
//   oauthId: types.optional(types.string, ''),
//   oauthType: types.optional(types.string, ''),
//   userName: types.string,
//   email: types.string,
//   tips: types.optional(types.map(Tip), {}),
//   comments: types.optional(types.map(Comment), {}),
//   points: types.optional(types.map(Point), {})
// })

// const Bookmaker = types.model({
//   id: types.identifier,
//   name: types.string,
//   review: types.string,
//   imageUrl: types.string,
//   url: types.string,
//   rating: types.number
// });

// const Offer = types.model({
//   id: types.identifier,
//   bookmaker: types.optional(types.map(Bookmaker), {}),
//   name: types.string,
//   amount: types.string,
//   message: types.string
// })



export default Tip
