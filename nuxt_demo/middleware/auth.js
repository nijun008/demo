export default function({ store, redirect }){
  if(!store.state.user.loginState) {
    return redirect('/login')
  }
}