export default function ({ store, redirect }: any) {
  // If the user is not authenticated
  const getPassword = store.state.password

  if (!store.state.auth) {
    console.log('--->', getPassword)

    return redirect('/login')
  }
}
