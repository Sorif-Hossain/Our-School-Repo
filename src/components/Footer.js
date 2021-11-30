function Footer() {
  return (
    <footer className='bg-danger'>
      <div className='container py-3 mt-5 bg-custom' >
      <div className='row row-cols-3'>
        <div>
           <h4 className='mb-3 text-white'>Our School</h4>
           <br />
            <i className="bi bi-telephone-fill text-white"> +6-856-928-5723</i>
            <br />
            <i className="bi bi-envelope-fill text-white"> contact@Ourschool.org</i>
            
        </div>
        <div>
          <div>
          <i className="bi bi-facebook me-3 fs-4"></i>
          <i className="bi bi-twitter me-3 fs-4"></i>
          <i className="bi bi-linkedin me-3 fs-4"></i>
          <i className="bi bi-youtube fs-4"></i>
          <p className='my-4 text-white'> Copyright &copy; Our school 2021</p>
          </div>
        </div>
        <div>
          <h4 className="text-white">News Letter</h4>
          <input type="text" className="form-control" placeholder="Enter your email"/>
          <button className='btn btn-primary mt-3'>Submit</button>
        </div>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
