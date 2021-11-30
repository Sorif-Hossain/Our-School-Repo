import image from '../images/image1.jpg';

function ContactUs() {
  return (
    <div className='container d-flex my-3'>
      <div className='w-50 mt-5'>
          <h2 className='mt-4 fw-bold'>Contact Us</h2>
        <div>
          <input type="text" className="form-control " placeholder="First Name"/>
          <input type="text" className="form-control my-3" placeholder="Last Name"/>
          <input type="email" className="form-control" placeholder="Email"/>
          <div className="input-group  my-3">
            <span className="input-group-text text-muted">Your Message</span>
            <textarea className="form-control" aria-label="With textarea"></textarea>
          </div>
          <button className='btn btn-outline-primary'>Submit</button>
        </div>
      </div>
      <div className='w-50 m-3'>
        <img src={image} alt="contactus" />
      </div>
    </div>
  );
}

export default ContactUs;
