export const inputName = (state = '', action: any) => {
  switch(action.type){
    case 'INPUT_NAME':
      return action.name;
    default:
      return state;
  }
}

export const inputCount = (state = '', action: any) => {
  switch(action.type){
    case 'INPUT_COUNT':
      return action.count;
    default:
      return state;
  }
}
