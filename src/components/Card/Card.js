import { useEffect, useRef, useState } from 'react'
import './Card.css'

const Card = ({ movie, isLargeRow, base_url }) => {
    const [hover, setHover] = useState(false)
    const hoverRef = useRef(null)

    useEffect(() => {
        let handler = (event) => {

            (!hoverRef.current.contains(event.target)) &&
                setHover(true)

        }
        document.addEventListener("mouseout", handler);
        return () => {
            document.removeEventListener("mouseout", handler)
        }
    })
    return (
        <>
            <img ref={hoverRef} className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`}
                alt={movie.name}
            />
            {/* <div className={`hover__contents ${hover && "hover__contentsHovered"} `}>
                <img className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    key={movie.id}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`}
                    alt={movie.name}
                />
            </div> */}

        </>
    );
}

export default Card;