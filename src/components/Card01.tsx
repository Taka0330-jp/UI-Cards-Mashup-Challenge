import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { ArrowUpRight, Play, Pause } from 'lucide-react';
import { TypographyH3, TypographyP } from "./Typography/ShadcnTypography";
import { useRef, useState } from "react";
import { toast } from "sonner";



function Card01() {

    const [isPlay, setIsPlay] = useState<boolean>(false)

    const audioRef = useRef<HTMLAudioElement | null>(null);

    const handlePlayAudio = () => {
        const audio = audioRef.current;
        if (!audio) return;

        setIsPlay((prev) => {
            if (prev) {
                audio.pause()
            } else {
                void audio.play()
            }
            return !prev;

        })

    }



    return (
    
            <article>
                <Card className="rounded-md py-0 ">
                    <figure className="relative m-4">
                      <img
                        src="/images/monkey-banana.webp"
                        alt="Monkey-shaped wall hook holding a bunch of bananas"
                        className="rounded-md w-full"
                      />
                      <figcaption className="sr-only">
                        Monkey-shaped wall hook holding a bunch of bananas
                      </figcaption>

                      <audio
                        ref={audioRef}
                        onEnded={() => {
                          setIsPlay(false);
                        }}
                        src="/audio/674253__crazygreenfluff__monkey-noises.mp3"
                      />
                      <button
                        className={
                          isPlay
                            ? "absolute top-3 left-3 bg-orange-300 text-white p-2 rounded-full border-gray-400 cursor-pointer"
                            : "absolute top-3 left-3 bg-orange-400 hover:bg-orange-300 text-white p-2 rounded-full border-gray-400 cursor-pointer"
                        }
                        onClick={handlePlayAudio}
                        type="button"
                        aria-label={isPlay ? "Pause audio" : "Play audio"}
                      >
                        {isPlay ? <Pause /> : <Play />}
                      </button>
                    </figure>
                    <div className="px-4 flex flex-col gap-2 relative">
                        <TypographyH3>
                            Monkey Banana Holder
                        </TypographyH3>
                        <div className="text-gray-500">
                            <TypographyP>
                                Bring a touch of the jungle to your kitchen. A fun and functional kitchen accent.
                            </TypographyP>
                        </div>
                    </div>
                    <footer className="flex justify-between items-center p-4">
                        <p aria-label="Price" className="bg-gray-100 py-2 px-4 rounded-md">12$</p>
                        <Button className="cursor-pointer" onClick={() => toast.success("You added Monkey Banana Holder")}>Add Cart<ArrowUpRight /></Button>
                    </footer>
                </Card>
            </article>
    )
}

export default Card01