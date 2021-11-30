import { Link } from "react-router-dom";

function Course(props) {
    const{tittle, img, description, price} = props.course;
    return (
        <>
            <article>
            <div className="card h-100 shadow rounded-3" >
                    <img src={img} className="card-img-top" style={{height: '250px'}} alt="service-img"/>
                    <div className="card-body">
                    <h5 className="card-title my-3 text-dark">{tittle}</h5>
                    <p className="card-text mb-3 text-muted">{description}</p>
                    <h5 className="card-title my-3">Price: ${price}</h5>
                    <Link to='/signup'>
                    <button className='btn btn-danger'>Enroll Now</button>
                    </Link>
                    
                </div>
            </div>
            </article>
        </>
    )
}

export default Course;
