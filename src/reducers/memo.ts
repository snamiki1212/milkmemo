const l = [{id: 123, name: 'milk', count: 1}, {id: 3424, name: 'coffe', count:2}];

export const memoList = (state = l, action: any) => {
  switch(action.type){
    case 'ADD_MEMO':
      const new_memo = {
        id: Math.round(Math.random()*1000),
        name: action.name,
        count: action.count,
      }
      console.log(state, action, new_memo);
      return [...state, new_memo];
    default:
      console.log('qwe', state)
      return state;
  }
}