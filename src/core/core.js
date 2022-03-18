export function useState(initialState){
  const state = {
    value: initialState
  }

  const setState = (newState) => {
    state.value = newState
  }

  return [state.value, setState]
}

export function render() {
  
}