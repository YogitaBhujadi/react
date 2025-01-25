import { createRoot } from "react-dom/client";
import MovieCards from './MovieCards'
import { MovieCard} from "./MovieCards";
import'./index.css'
import imgRtc from "./images/bhool-bhulaiyaa.jpg"
import imgsingham from "./images/singham-again.jpg"

const root = createRoot(document.getElementById("root"));

root.render(
    <>
    <div className="movie-card-container">
    <MovieCards
     title = "Bhool Blulaiyaa 3" 
     rating = "6.5" 
     releasDate =" 1 November 2024"
      director ="Anees Bazmee"/>

    <MovieCard
    title = "Singham Again"
     rating = "8.5"
      releasDate =" 1 November 2024"
       director ="Rohit Shetty"/>
    </div>
    
    </>
)


