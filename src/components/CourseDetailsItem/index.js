import './index.css'

const CourseDetailsItem = props => {
  const {courseItemDetails} = props
  const {name, description, imageUrl} = courseItemDetails

  return (
    <li className="course-detail-card">
      <div className="course-detail-container">
        <img className="course-details-image" src={imageUrl} alt={name} />
        <div className="course-info-container">
          <h1 className="course-detail-title">{name}</h1>
          <p className="course-detail-info">{description}</p>
        </div>
      </div>
    </li>
  )
}

export default CourseDetailsItem
