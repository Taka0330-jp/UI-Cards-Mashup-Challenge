import YouTube from "react-youtube";
import { Separator } from "./ui/separator";
import { toast } from "sonner";
import { ShoppingCart } from 'lucide-react';

function Card05() {
    const opts = {
        width: "100%",
        height: "100%",
        playerVars: {
            autoplay: 0,
            rel: 0,
            modestbranding: 1,
        },
    };

    return (
        <article className="w-full">
            <div className="flex flex-col overflow-hidden rounded-md bg-teal-50 shadow-xl">
                <figure className="relative w-full overflow-hidden bg-black aspect-video">
                    <div className="absolute inset-0">
                        <YouTube videoId="E4KZkfI8uFw" opts={opts} className="h-full w-full" />
                    </div>
                    <figcaption className="sr-only">
                        Video review of the Standard Banana Holder in everyday kitchen use
                    </figcaption>
                </figure>

                {/* Content */}
                <div className="flex flex-col gap-2 p-4">
                    <h2 className="text-lg font-semibold leading-tight">
                        Standard Banana Holder
                    </h2>
                    <p className="text-sm my-2 text-gray-700">
                        Simple wooden holder designed for everyday use.
                    </p>

                    <Separator />

                    <footer className="flex items-center justify-between">
                        <p aria-label="Price" className="text-base font-semibold">$8.25</p>
                        <button
                            type="button"
                            onClick={() => toast.success("You added Standard Banana Holder")}
                            className="cursor-pointer flex items-center gap-2 rounded-xl bg-teal-500 px-4 py-2 text-sm font-medium text-white hover:bg-teal-600"
                        >
                            <ShoppingCart />
                            <span>Add</span>
                        </button>
                    </footer>
                </div>
            </div>
        </article>
    );
}

export default Card05;

//https://www.npmjs.com/package/react-youtube