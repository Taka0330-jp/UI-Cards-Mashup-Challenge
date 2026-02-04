import { Plus } from 'lucide-react';
import { toast } from "sonner";

function Card04() {
    return (
            <article className="inner-shadow-2xl rounded-2xl">
                <figure className="rounded-bl-[80px] rounded-tr-[80px] rounded-tl-2xl overflow-hidden">
                    <img
                        src="/images/sculptural-banana-holder.webp"
                        alt="Fancy sculptural banana holder with a clean, modern form"
                        className="aspect-square object-cover"
                    />
                    <figcaption className="sr-only">
                        Fancy sculptural banana holder with a clean, modern form
                    </figcaption>
                </figure>
                <div className='p-4 overflow-hidden'>
                    <div className='my-4'>
                        <h3 className='text-xl font-montserrat'>Fancy Sculptural Banana Holder</h3>
                    </div>
                    <p className='text-gray-800 my-1 w-full font-extralight'>A sculptural banana holder with a clean, modern form.
                    </p>
                </div>

                <footer className="flex justify-end items-center mt-2 gap-8">
                    <p aria-label="Price" className="text-2xl">$18</p>
                    <span aria-hidden="true" className="h-8 w-px bg-gray-300"></span>
                    <button
                      type="button"
                      onClick={() => toast.success("You added Fancy Sculptural Banana Holder")}
                      className="flex gap-2 bg-amber-500 cursor-pointer text-white px-6 py-4 hover:bg-amber-700 rounded-tl-4xl rounded-br-4xl"
                    >
                      Add
                      <Plus />
                    </button>
                </footer>
            </article>
    )
}

export default Card04
