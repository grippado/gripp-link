export const state = {
  input: 'Type your command here',
  history: [],
  isHistory: false,
  isNotFound: false,
  isDorme: false
}

export const getters = {
  getInput (state: any) {
    return state.input
  },
  getHistory (state: any) {
    return state.history
  },
  isHistory (state: any) {
    return state.isHistory
  },
  isNotFound (state: any) {
    return state.isHistory
  },
  isDorme (state: any) {
    return state.isDorme
  }
}

export const mutations = {
  setInput (state: any, input: string) {
    state.input = input
  },
  pushToHistoy (state: any, input: string) {
    const actualHistory = state.history
    actualHistory.push(input)
    state.history = actualHistory
  },
  setHistory (state: any, history: boolean) {
    state.isHistory = history
  },
  setNotFound (state: any, notFOund: boolean) {
    state.isNotFound = notFOund
  },
  setDorme (state: any, DormeDorme: boolean) {
    state.isDorme = DormeDorme
  }
}
