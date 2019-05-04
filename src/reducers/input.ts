export const inputName = (state = '', action: any) => {
  switch(action.type){
    case 'INPUT_NAME':
      return action.name;
    default:
      return state;
  }
}