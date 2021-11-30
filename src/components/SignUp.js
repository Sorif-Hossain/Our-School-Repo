function SignUp() {
  return (
    <div className='container mt-5 d-flex flex-column align-items-center shadow p-4'>
      <h2 className='fw-bold'>Creat an account</h2>
      <input type="text" className="form-control w-50 " placeholder="First Name"/>
      <input type="text" className="form-control w-50 mt-3" placeholder="Last Name"/>
      <input type="text" className="form-control w-50 mt-3" placeholder="Choose a Username"/>
      <input type="email" className="form-control w-50 mt-3" placeholder="Email"/>
      <input type="password" className="form-control w-50 mt-3" placeholder="Password"/>
      <button className='btn btn-outline-success mt-4'>Sign Up</button>
    </div>
  );
}

export default SignUp;
