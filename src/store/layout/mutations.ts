
export function updateCollapse(state, value?) {
  console.log(value)
  state.collapse = value === undefined ? !state.collapse : value
}
