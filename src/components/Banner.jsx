import IconRatingHalf from "../assets/rating-half.png";
import IconRating from "../assets/rating.png";
import ImgPoster from "../assets/poster.jpg";
import PlayButton from "../assets/play-btn.png";

const Banner = () => {
  return (
    <div className="w-full h-[500px] bg-banner bg-center bg-no-repeat bg-cover relative">
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-50"/>
      <div className="w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-20">
        <div className="flex flex-col space-y-6 items-start p-10">
          <p className="text-white bg-gradient-to-r from-red-600 to-red-300 py-2 px-3 text-md">Trailers</p>
          <div className="flex flex-col space-y-5 items-baseline w-[50%]">
            <h1 className="text-white text-[40px] font-bold"> Deadpool & Wolverine</h1>
            <div className="flex items-center space-x-3">
                <img src={IconRating} alt="rating" className="w-8 h-8" />
                <img src={IconRating} alt="rating" className="w-8 h-8" />
                <img src={IconRating} alt="rating" className="w-8 h-8" />
                <img src={IconRating} alt="rating" className="w-8 h-8" />
                <img src={IconRatingHalf} alt="rating" className="w-8 h-8" />
              </div>
              <p className="text-white">
              Watch deadpool & wolverine Movies. A listless Wade Wilson toils away
              in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. 
              But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with 
              an even more reluctant Wolverine.
              </p>
          </div>
          <div className="flex items-center space-x-5">
              <button className="py-2 px-3 bg-black  text-white border border-black font-bold">
                Detail
              </button>
              <button className="py-2 px-3 bg-red-600 text-white font-bold">
                Watch Movie
              </button>
            </div>
        </div>
        <div className="w-[50%] flex items-center justify-center">
          <div className="w-[300px] h-[450px] relative group">
            <img src={ImgPoster} alt="poster" className="w-full h-full object-cover rounded-lg"/>
            <button className="w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out rounded-lg">
              <img src={PlayButton} alt="play" className="w-16 h-16" />
            </button>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Banner;