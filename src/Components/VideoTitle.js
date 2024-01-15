

const VideoTitle = ({title, overview}) =>{
    return (
        <div className="w-screen aspect-video pt-[20%] px-16 absolute bg-gradient-to-r from-black">
            <h1 className="text-5xl font-bold text-white w-1/2">{title}</h1>
            <p className="py-6 text-md w-1/3 text-white">{overview}</p>

            <div>
                <button className="bg-white p-2 w-28 text-lg text-black rounded-md hover:opacity-85">&#9205; Play</button>
                <button className="bg-[#1d1f1d] p-2 w-28 text-lg text-white rounded-md mx-2">More Info</button>
            </div>
        </div>

    )
}

export default VideoTitle;