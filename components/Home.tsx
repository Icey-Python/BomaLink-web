import Image from 'next/image'
import { ArrowDownToLine, Info } from 'lucide-react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/Dialog'
import { Button } from '@/components/ui/button'
import { Slide } from 'react-awesome-reveal'
import { useState, useEffect } from 'react'
interface Props {
  tagId: string
}

const HomeSection = ({ tagId }: Props) => {
  // Array of image URLs to cycle through
  const images: string[] = [
    "url('/newlanding2.jpg')",
    "url('/cows-2.jpeg')",
    "url('/cows-3.jpeg')",
    "url('/cows-4.jpeg')",
    "url('/cows-5.jpeg')",
    "url('/cows-6.jpeg')",
    "url('/cows-8.jpg')",
    "url('/cows-9.jpg')",
    "url('/cows-10.jpg')",
    "url('/cows-11.jpg')",
    "url('/cows-12.jpg')",
  ]

  const [currentImage, setCurrentImage] = useState<string>(images[0])

  useEffect(() => {
    // Function to change the background image
    const changeImage = () => {
      setCurrentImage((prevImage) => {
        const currentIndex = images.indexOf(prevImage)
        const nextIndex = (currentIndex + 1) % images.length
        return images[nextIndex]
      })
    }

    // Set an interval to change the image every 3 seconds
    const intervalId = setInterval(changeImage, 5000)

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId)
  })

  return (
    <>
      <div
        className='w-screen h-[100vh] backdrop-filter backdrop-blur-3xl self-center bg-no-repeat'
        style={{
          backgroundImage: currentImage,
          backgroundSize: 'cover',
          transition: 'background-image 1s',
          transitionDelay: '2s',
        }}
        id={tagId}
      >
        {/*<ParticlesComponent/>*/}
        <div
          className='w-full h-full bg-[#021500] glasss bg-opacity-60 space-y-10 pl-6'
          style={{ backdropFilter: 'blur(2px)' }}
        >
          <div className='flex h-full justify-around items-center'>
            <Slide triggerOnce={true}>
              <div className='space-y-6'>
                <p className='text-5xl font-mogra md:text-[3rem] lg:text-[10rem]  text-white drop-shadow-md leading-none'>
                  GeoPasture
                </p>
                <div className='space-y-8'>
                  <p className='text-xl font-monteserrat md:text-3xl lg:text-5xl text-[#D6F9C6]  drop-shadow-md leading-none font-extralight'>
                    Maamuzi sahihi, ushirikiano wa kudumu
                  </p>
                  <p className='text-xl w-full text-white font-poppins lg:text-3xl '>
                    A mobile app aimed at fostering peaceful coexistence <br />{' '}
                    between Kenyan pastoralists and agriculturalists <br /> by
                    creating a digital platform that addresses resource
                    conflict.
                  </p>
                  <div className='flex space-y-2  flex-col lg:flex-row w-full'>
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className='text-white text-xl font-poppins  bg-[#021500] bg-opacity-60 p-4 ml-0 mx-auto border-2 border-[#224103] rounded-full w-[200px] h-[65px] transition duration-500 hover:text-[#021500] hover:bg-[#47f969] flex justify-around hover:border-[#47F969] hover:font-bold '>
                          Get App
                          <ArrowDownToLine className='transition ease-in delay-250 ' />
                        </button>
                      </DialogTrigger>
                      <DialogContent className='sm:max-w-md text-white'>
                        <DialogHeader>
                          <DialogTitle className='font-bold hover:text-[#47f969] text-2xl'>
                            Get App
                          </DialogTitle>
                        </DialogHeader>
                        <DialogDescription className='text-2xl hover:text-[#47f969]'>
                          GeoPasture App Coming Soon!
                        </DialogDescription>
                        <DialogFooter className='sm:justify-center'>
                          <DialogClose asChild>
                            <Button
                              type='button'
                              className='bg-white hover:bg-[#47f969] text-black'
                              variant='secondary'
                            >
                              Close
                            </Button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            </Slide>
            {/* <Slide direction="right" triggerOnce={true}>
              <div className="hidden lg:flex justify-items-center items-center z-20">
                <Image
                  src="/Phone.png"
                  alt="phone"
                  width={250}
                  height={0}
                  style={{
                    height: "auto",
                    marginInline: "auto",
                    marginTop: "2%",
                  }}
                >
                </Image>
              </div>
            </Slide> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeSection
