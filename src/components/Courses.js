import { useEffect, useState } from "react"
import Course from "./Course"

function Courses() {
    const [courses, setCourses] = useState([])
    useEffect(()=>{
        fetch('https://tinyurl.com/fakedb')
        .then(res => res.json())
        .then(data =>setCourses(data))
    })
    return (
        <>
        <article className= 'container text-center mt-5'>
            <h1 className='fw-bold my-4 text-success'>Our Latest Courses</h1>
            <div className='row row-cols-3 g-4'>
                {
                    courses.map(course =>(
                        <Course key={course.id} course={course}/>
                    ))
                }
            </div>
        </article>
        </>
    )
}

export default Courses
