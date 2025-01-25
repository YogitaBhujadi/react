import './index.css'
import imgRtc from "./images/bhool-bhulaiyaa.jpg"
import imgsingham from "./images/singham-again.jpg"

export default function MovieCards(props) {
    const { title, rating, releasDate, director} = props;
    return (
        <div className='movie-card'>
        <img src ={imgRtc}  style={{}} className="img-poster" />
        <div className='movie-details'>
            <div className='same-content heading'>
                <h3> {title} </h3>
                <p> <span className='rating'> {rating} </span>/10</p>
              </div>
              <div className='same-content sub-heading'>
                <p> Release Date</p>
                <p> Director</p>
                </div>
                <div className='same-content time'>
                    <p>{releasDate} </p>
                    <p> {director}</p>
                </div>
        </div>
        </div>
    )
}
 
export function MovieCard(props) {
    const { title, rating, releasDate, director} = props;
    return (
        <div className='movie-card'>
        <img src ={imgsingham}  style={{}} className="img-poster" />
        <div className='movie-details'>
            <div className='same-content heading'>
                <h3> {title} </h3>
                <p> <span className='rating'> {rating} </span>/10</p>
              </div>
              <div className='same-content sub-heading'>
                <p> Release Date</p>
                <p> Director</p>
                </div>
                <div className='same-content time'>
                    <p>{releasDate} </p>
                    <p> {director}</p>
                </div>
        </div>
        </div>
    )
}
 