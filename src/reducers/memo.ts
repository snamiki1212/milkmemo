const initial = [
  {id: 1, name: 'milk', count: 1},
  {id: 2, name: 'coffe', count: 2}
];

export const memoList = (state = initial, action: any) => {
  switch(action.type){
    case 'ADD_MEMO':
      const new_memo = {
        id: Math.round(Math.random()*1000),
        name: action.name,
        count: action.count,
      }
      return [...state, new_memo];
    default:
      return state;
  }
}