import { useEffect, useState } from "react";
import { Link} from "react-router-dom";

function Services() {
  const [services, setServices] = useState([])
  useEffect(()=>{
    fetch('https://tinyurl.com/fakedb')
    .then(res => res.json())
    .then(data => setServices(data.slice(4, 8)))
  },[])
  return (
    <div className='container'>
      <h1 className='text-center my-5 fw-bold text-success'>Our most valuable Services</h1>
      <div className='row row-cols-4'>
        {
          services.map(service =>(
            <article>
                <div className="card h-100 shadow rounded-3" >
              <img src={service.img} className="card-img-top" style={{height: '250px'}} alt="service-img"/>
              <div className="card-body">
              <h5 className="card-title my-3 text-success">{service.tittle}</h5>
              <p className="card-text mb-3 text-muted">{service.description}</p>
              <h6 className="card-title my-4">Starting from: ${service.price}</h6>
              <Link to="/courses" className='text-decoration-none fw-bold text-danger'>Learn More <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
            </article>
          ))
        }
      </div>
      <Link to='/courses'>
        <div className='text-center my-5'>
        <button className="btn btn-outline-success mt-4 py-2 px-4 rounded-pill fw-bold"><i>BROWSE ALL</i></button>
        </div>
      </Link>
    </div>
  );
}

export default Services;
