import { Heart, MoveRight } from 'lucide-react';
import { useState } from 'react';
import { toast } from "sonner";

function Card06() {

    const [liked, setLiked] = useState(false);

    return (
            <article>
                <figure className="relative group rounded-lg w-full">
                  <img
                    src="/images/timberline-banana-holder.webp"
                    alt="Timberline banana holder with solid wood stand and modern profile"
                    className="rounded-lg w-full h-full object-cover"
                  />
                  <figcaption className="sr-only">
                    Timberline banana holder with solid wood stand and modern profile
                  </figcaption>
                <div className="absolute top-5 left-4 duration-100">
                  <Heart
                   size={32}
                  onClick={()=>{setLiked(!liked)}}
                  className={`cursor-pointer ${liked ? "text-red-500 fill-red-500" : "text-white"} opacity-0 group-hover:opacity-100 hover:scale-110 transition-transform duration-200` }
                    />
                </div>

                <div className="absolute top-4 right-4 duration-100">
                  <p aria-label="Price" className="text-2xl bg-gray-900/50 text-gray-50 px-4 py-2 rounded-full">
                    12$
                  </p>
                </div>
                    <div className='flex flex-col gap-2 absolute bottom-0 right-0 bg-black/30 backdrop-grayscale-50 px-4 py-2 rounded-lg shadow-md w-full'>
                        <div className="flex gap-4 justify-between">
                            <h3 className='text-xl text-white'>Timberline Banana Holder</h3>
                        </div>
                        <p className='text-gray-100 sm:text-sm'>Solid wood stand with a clean, modern profile.</p>
                        <footer className="mt-2">
                          <button
                            type="button"
                            onClick={() => toast.success("You added Timberline Banana Holder")}
                            className="group/button bg-black rounded-full text-white px-4 py-2 w-full cursor-pointer hover:bg-gray-800 flex justify-center gap-2"
                          >
                            Add to Cart
                            <MoveRight className="transition-transform duration-300 group-hover/button:-rotate-35" />
                          </button>
                        </footer>
                    </div>
                </figure>
            </article>
    )
}

export default Card06
