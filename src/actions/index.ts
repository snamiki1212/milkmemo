export const addMemo = (name: string, count: number) => ({
  type: 'ADD_MEMO',
  name,
  count
})

export const inputName = (name: string) => ({
  type: 'INPUT_NAME',
  name
})

export const inputCount = (count: number) => ({
  type: 'INPUT_COUNT',
  count
})

export const toggleMemo = (id: number) => ({
  type: 'TOGGLE_MEMO',
  id
})

export const clearInput = () => ({
  type: 'CLEAR_INPUT'
})
