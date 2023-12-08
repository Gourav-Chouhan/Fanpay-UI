import Navbar from "@/components/Navbar";
import Image from "next/image";

const ratingContainer =
  "flex flex-col p-4 px-6 items-center justify-around bg-neutral-900 rounded-lg";
const ratingText = "text-xl m-0";
const smallText = "text-xs m-0 text-neutral-600";

export default function Home() {
  const images = [29, 30, 31, 32, 33, 34, 35, 36];
  return (
    <main className="flex min-h-screen flex-col flex-start items-center px-10 font-popins ">
      <Navbar />

      {/* Main page */}
      <div className="flex flex-row justify-center items-center w-full mb-20 ">
        <div className="flex justify-end w-1/2 hover:scale-110  ease-out transition-transform">
          <Image
            src="/images/visaCard.png"
            alt="card image"
            width={700}
            height={150}
          />
        </div>
        <div className="flex flex-col flex-start  h-full w-1/2">
          <h1 className="text-5xl w-1/2 p-1 leading-[3.5rem] mb-3">
            Personalised UPI and card for teens
          </h1>
          <div className="text-xl w-[40%] p-1 font-medium mb-4">
            Lörem ipsum androception migt. Plalonde van supraktig. Rer rens i
          </div>
          <div className="flex gap-5 mb-8">
            <button className="px-12 py-2 font-semibold bg-amber-500 rounded-full">
              Get Now
            </button>
            <button className="px-12 py-2 font-semibold border rounded-full">
              Learn More
            </button>
          </div>
          <div className="flex gap-6">
            <div className={ratingContainer}>
              <div className={ratingText}>4.4 ratings</div>
              <div className={smallText}>on google play store</div>
            </div>
            <div className={ratingContainer}>
              <div className={ratingText}>10M+Downloder</div>
              <div className={smallText}>on google play store</div>
            </div>
          </div>
        </div>
      </div>

      {/* We trust page  section */}
      <div className="text-center m-10 text-4xl">We Are Trusted By</div>
      <div className="grid grid-cols-4  w-1/2 mb-20 ">
        {images.map((id) => {
          return (
            <div className="p-5 rounded-lg m-2 flex justify-center items-center bg-neutral-900 hover:bg-neutral-800 ">
              <Image
                src={`/images/image ${id}.png`}
                alt="partners image"
                width={150}
                height={150}
              />
            </div>
          );
        })}
      </div>
      {/* about fanpay section */}
      <div className="flex flex-row justify-center items-center w-full my-20 ">
        <div className="flex justify-end w-1/2 hover:scale-110  ease-out transition-transform">
          <Image
            src="/images/visaCard.png"
            alt="card image"
            width={700}
            height={150}
          />
        </div>
        <div className="flex flex-col flex-start  h-full w-1/2">
          <div className="w-1/2">
            <h1 className="text-3xl w-1/2 p-1 leading-[3.5rem] ml-5 mb-2 text-amber-500">
              Fampay
            </h1>
            <div className="flex flex-row items-center mb-2">
              <div className="round-bullet "></div>
              <div className="text-xl">
                Tap & Pay with your personalised card
              </div>
            </div>
            <div className="flex flex-row items-center mb-2">
              <div className="round-bullet "></div>
              <div className="text-xl">
                A numberless card that keeps all your info secure
              </div>
            </div>
            <div className="flex flex-row items-center mb-2">
              <div className="round-bullet "></div>
              <div className="text-xl">
                Design your own card with a customised name and doodles
              </div>
            </div>
            <div className="flex flex-row items-center mb-2">
              <div className="round-bullet "></div>
              <div className="text-xl">
                Super safe card that you can block or pause anytime
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* get your own api section */}
      <div className="flex flex-row justify-center items-center w-full mb-20 ">
        <div className="flex justify-end w-1/2  pr-20">
          <Image
            src="/images/image 37.png"
            alt="card image"
            width={380}
            height={150}
          />
        </div>
        <div className="flex flex-col flex-start  h-full w-1/2">
          <h1 className="text-5xl w-2/3 p-1 leading-[3.5rem] mb-3">
            Your own UPI to make super fast payments
          </h1>
          <div className="text-xl w-[70%] p-1 font-medium mb-4 flex flex-col gap-4 mt-4">
            <div className="flex flex-row items-center">
              <Image
                src="/images/tick.svg"
                width={30}
                height={100}
                alt="tick mark"
                className="mt-2 mr-2"
              />
              <div>Scan & Pay with your customised UPI ID</div>
            </div>
            <div className="flex flex-row items-center">
              <Image
                src="/images/tick.svg"
                width={30}
                height={100}
                alt="tick mark"
                className="mt-2 mr-2"
              />
              <div>Choose personalised QR themes to match your style</div>
            </div>
            <div className="flex flex-row items-center">
              <Image
                src="/images/tick.svg"
                width={30}
                height={100}
                alt="tick mark"
                className="mt-2 mr-2"
              />
              <div>Recharge, pay bills, shop online, and more</div>
            </div>
          </div>

          <div className="flex gap-5 mb-8">
            <button className="px-12 py-2 my-4 font-semibold bg-amber-500 rounded-full">
              Get Your Own UPI
            </button>
          </div>
        </div>
      </div>

      {/* earn reward section */}
      <div className="flex flex-row justify-center items-center w-full my-36 ">
        <div className="flex justify-end w-1/2  pr-20">
          <Image
            src="/images/image 38.png"
            alt="card image"
            width={380}
            height={150}
          />
        </div>
        <div className="flex flex-col flex-start  h-full w-1/2 ">
          <h1 className="text-5xl w-2/3 p-1 leading-[3.5rem] mb-3">
            Earn unlimited rewards
          </h1>
          <div className="text-xl w-[55%] p-1 font-medium mb-4 flex flex-col gap-6 ">
            <div>
              Win infinite cashbacks, discounts, and offers on your favourite
              brands
            </div>
            <div className="flex flex-row text-base font-semibold bg-neutral-900 p-4 rounded-lg w-[80%]">
              <div className="ml-2 mr-4 self-center">
                <Image
                  src="/images/image 39.png"
                  width={60}
                  height={40}
                  alt="icons"
                />
              </div>
              <div>Rewards every time you spend with FamPay</div>
            </div>

            <div className="flex flex-row text-base font-semibold bg-neutral-900 p-4 rounded-lg w-[80%]">
              <div className="ml-2 mr-4 self-center">
                <Image
                  src="/images/image 40.png"
                  width={60}
                  height={40}
                  alt="icons"
                />
              </div>
              <div>Exclusive giveaways of PS5, AirPods, iPhone, and more</div>
            </div>

            <div className="flex flex-row text-base font-semibold bg-neutral-900 p-4 rounded-lg w-[80%]">
              <div className="ml-2 mr-4 self-center">
                <Image
                  src="/images/image 41.png"
                  width={60}
                  height={40}
                  alt="icons"
                />
              </div>
              <div>Challenges that help you save more and earn more</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
