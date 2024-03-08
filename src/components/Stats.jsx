import { stats } from "../data"
import parse from 'html-react-parser'

const Stats = () => {
  return (
    <>
      {stats.map(({title, no}, index) => {
        return(
          <div className="statsBox" key={index}>
            <h3 className="statsNo">{no}</h3>
            <p className="statsTitle">{parse(title)}</p>
          </div>
        )
      })}
    </>
  )
}

export default Stats