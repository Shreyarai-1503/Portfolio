import parse from 'html-react-parser'
const ResumeItem = ({icon, year, title, desc}) => {
  return (
    <div className="resumeItem">
        <div className="resumeIcon">{icon}</div>
        <span className="resumeDate">{year}</span>
        <h3 className="resumeTitle">{parse(title)}</h3>
        <p className="resumeDesc">{desc}</p>
    </div>
  )
}

export default ResumeItem