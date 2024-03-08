import { personalInfo } from "../data"

const Info = () => {
  return (
    <>
      {personalInfo.map(({title, description}, index) => {
        return(
          <li className="infoItem" key={index}>
            <span className="infoTitle">{title}</span>
            <span className="infoDescription">{description}</span>
          </li>
        )
      })}
    </>
  )
}

export default Info