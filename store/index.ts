export const state = {
  auth: false,
  password: ''
}

export const mutations = {
  setPwd (state: any, pwd: string) {
    state.password = pwd
  },
  logIn (state: any): false | undefined {
    if (state.password === '0090-') {
      state.auth = true
      return false
    }
    state.auth = false
  }
}
