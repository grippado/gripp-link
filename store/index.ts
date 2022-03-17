export const state = {
  input: 'Type your command here',
  history: [],
  modalShow: true,
  initialInput: true,
  isHistory: false,
  isNotFound: false,
  isDorme: false,
  isGeneral: false
}

export const getters = {
  getInput (state: any) {
    return state.input
  },
  getHistory (state: any) {
    return state.history
  },
  getModal (state: any) {
    return state.modalShow
  },
  isHistory (state: any) {
    return state.isHistory
  },
  isNotFound (state: any) {
    return state.isHistory
  },
  isDorme (state: any) {
    return state.isDorme
  },
  isGeneral (state: any) {
    return state.isGeneral
  }
}

export const mutations = {
  setInput (state: any, input: string) {
    state.input = input
  },
  pushToHistoy (state: any, input: string) {
    const actualHistory = state.history
    console.log(state.history)
    actualHistory.push(input.toLowerCase())
    state.history = actualHistory
  },
  setInputInitial (state: any, InitialInput: boolean) {
    state.initialInput = InitialInput
  },
  setHistory (state: any, historie: boolean) {
    state.isHistory = historie
  },
  setNotFound (state: any, notFOund: boolean) {
    state.isNotFound = notFOund
  },
  setDorme (state: any, DormeDorme: boolean) {
    state.isDorme = DormeDorme
  },
  setGeneral (state: any, GeneRal: boolean) {
    state.isGeneral = GeneRal
  }
}
