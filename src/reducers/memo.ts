const initial = [
  {id: 1, name: 'milk', count: 1, finished: false},
  {id: 2, name: 'coffe', count: 2, finished: true}
];

export const memoList = (state = initial, action: any) => {
  switch(action.type){
    case 'ADD_MEMO': {
      const newMemo: object = {
        id: Math.round(Math.random()*1000),
        name: action.name,
        count: action.count,
        finished: false,
      };

      return [...state, newMemo];
    }

    case 'TOGGLE_MEMO':
      return state.map(memo => {
        memo.finished =
          memo.id === action.id
            ? !memo.finished
            : memo.finished

        return memo;
      });

    default:
      return state;
  }
}
