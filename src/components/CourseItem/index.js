import {Link} from 'react-router-dom'

import './index.css'

const CourseItem = props => {
  const {courseItemDetails} = props
  const {id, name, logoUrl} = courseItemDetails

  return (
    <Link to={`/courses/${id}`} className="link">
      <li className="course-list-item">
        <img className="course-logo" src={logoUrl} alt={name} />
        <p className="course-name">{name}</p>
      </li>
    </Link>
  )
}

export default CourseItem
