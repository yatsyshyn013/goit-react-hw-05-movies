export function MovieCard({ poster, title, date, genreList, overview, popularity }) {
    
    // console.log(poster);
    return (
        <>
        <img src={poster} alt="" />
        <div>{title}</div>
        <div>{date}</div>
        <div>{genreList}</div>
        <div>{overview}</div>
        <div>{popularity}</div>
        </>
    )
}