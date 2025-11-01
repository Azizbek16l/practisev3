import './Login.css'
function Login() {
  return (
    <div className='login-body'>
    
      <div className='form-container'>
        <div className='form-header'>
          <img src="https://static.tildacdn.one/tild3432-3930-4437-a537-613839623733/tild6463-6663-4161-a.png" />

          <h3>📄Offerta</h3>
        </div>
        <h3 id='welcome-title' style={{textAlign:'center',fontSize:'22px',fontWeight:'400'}}>Space ga  xush kelibsiz</h3>
      <form>
      <input type="text" placeholder='space id'/>
      <input type="text" placeholder='space parol'/>
      <button type="submit">Login</button>
      </form>
      </div>
     

    </div>
  )
}

export default Login