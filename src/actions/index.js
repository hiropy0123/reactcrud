
// Reducerでも使用するので、定数として外部でも利用できる形に定義しておく
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment = () => ({
  type: INCREMENT
})

export const decrement = () => ({
  type: DECREMENT
})
 
// Action Creator は increment, decrement の関数
// Action は type で宣言される INCREMENT, DECREMENT

// Action Creator を作成する
// const increment = () => {
//   return {
//     type: 'INCREMENT'
//   }
// }

// const decrement = () => {
//   return {
//     type: 'DECREMENT'
//   }
// }
// return を省略する