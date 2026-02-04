import { Plus } from 'lucide-react';
import { toast } from "sonner";
function Card03() {
    return (
            <article className='rounded-4xl shadow-2xl  transition-transform duration-450 hover:scale-105'>
                <figure className="overflow-hidden rounded-t-4xl">
                    <img
                      src="/images/tech-banana-holder.webp"
                      alt="Velocity Tech banana holder with LED-accented modern frame"
                      className="aspect-square object-cover"
                    />
                    <figcaption className="sr-only">
                      Velocity Tech banana holder with LED-accented modern frame
                    </figcaption>
                </figure>
                <div className='p-4 overflow-hidden'>
                    <div className='flex justify-between items-center  gap-2'>
                        <h3 className='text-xl font-space-grotesk font-medium'>Velocity Tech Banana Holder</h3>
                        <span aria-hidden="true" className="h-8 w-px bg-border" />
                        <p aria-label="Price" className='text-2xl  font-space-grotesk font-medium'>$18</p>
                    </div>
                    <p className='text-gray-600 my-1 w-full font-light mt-2 text-sm'>LED-accented banana holder with a precision-engineered, modern frame.</p>
                    <footer className="mt-4 flex justify-end">
                        <button
                          type="button"
                          className="bg-blue-600 cursor-pointer flex items-center gap-1 font-space-grotesk font-medium text-white rounded-full px-4 py-2 duration-300 hover:bg-blue-400"
                          onClick={() => toast.success("You added Velocity Tech Banana Holder")}
                        >
                          <Plus />
                          <span>Add to cart</span>
                        </button>
                    </footer>
                </div>
            </article>
    )
}

export default Card03
