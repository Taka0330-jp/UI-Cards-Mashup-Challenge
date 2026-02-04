import {Handbag } from 'lucide-react';
import { toast } from "sonner";
function Card02() {
    return (
            <article >
                <div  className='group'>
                    <figure className="relative">
                      <img
                        src="/images/luxury-banana-holder.webp"
                        alt="Premier banana holder in quilted black leather with gold-tone chain"
                        className="w-full"
                      />
                      <figcaption className="sr-only">
                        Premier banana holder in quilted black leather with gold-tone chain
                      </figcaption>
                    </figure>
                    <span
                      aria-hidden="true"
                      className="relative opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full inline-block before:absolute before:-inset-0.5 before:block before:bg-black"
                    ></span>
                    <div className='text-center'>
                        <h3 className='font-lexend-giga text-sm mt-1'>PREMIER BANANA HOLDER</h3>
                        <p className='font-inter mt-2 text-sm font-light text-gray-700'>Quilted black leather, gold-tone chain</p>
                    </div>
                
                <footer className='flex flex-col gap-1 justify-center items-center'>
                    <p aria-label="Price" className='py-4 font-lexend-giga text-sm'>CDA $ 20,650.00</p>
                    <button type="button" onClick={()=>toast.success("You added Premier banana holder")} className='group/button flex gap-1 cursor-pointer font-inter'>Add to Bag<Handbag className='transition-transform duration-300 group-hover/button:-translate-y-1' /></button>
                </footer>
                </div>
            </article>
    )
}

export default Card02
