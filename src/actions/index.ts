export const addMemo = (name: string, count: number) => ({
  type: 'ADD_MEMO',
  name,
  count
})

export const inputName = (name: string) => ({
  type: 'INPUT_NAME',
  name
})