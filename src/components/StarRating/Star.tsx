import { RiStarSFill } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa";
import './index.scss'


export interface Props {
    rating: number;
}


export default function Star(props: Props) {
    const numStars = Math.round(props.rating / 2)

    const fullStars = []
    const emptyStars = []

    for(let i = 0; i < 5; i++) {
        if(i < numStars){
            fullStars.push(i)
        } else {
            emptyStars.push(i)
        }
    }


    return (
       <div className="movie-rating">
           {emptyStars.map(index => (
               <RiStarSFill key={index} />
            
 
         ))}
        {fullStars.map(index => (
            <FaRegStar key={index} />

        ))}
       </div>
    )
}