export const inputName = (state = '', action: any) => {
  switch(action.type){
    case 'INPUT_NAME':
      return action.name;
    case 'CLEAR_INPUT':
      return '';
    default:
      return state;
  }
}

export const inputCount = (state = '', action: any) => {
  switch(action.type){
    case 'INPUT_COUNT':
      return action.count;
    case 'CLEAR_INPUT':
      return '';
    default:
      return state;
  }
}
