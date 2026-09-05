import Image from "next/image";
import { LuZap } from "react-icons/lu";
import { Arrow, PlumButton } from "./Ui";

const benefits = [
  "Strategic Career Guidance",
  "Leadership Development",
  "CV Development",
  "Sustainability Leadership",
  "Communication Skills",
  "Business Model",
];
export function CeoLearning() {
  return (
    <section className="bg-white px-6 py-6 md:px-10 md:py-12 lg:px-16 lg:py-16">
      <div className="mx-auto max-w-[1312px] rounded-[10px] bg-[#fbd7db] p-4 md:p-8 lg:p-10">
        <p className="text-[15px] italic text-[#087ef4] md:text-[20px]">
          Learning With Our CEO:
        </p>
        <h2 className="mt-3 text-[18px] italic leading-tight text-[#641052] md:text-[30px]">
          Transformation Hub With Jite Newton
        </h2>
        <p className="mt-7 text-[13px] leading-[1.55] md:text-[16px] md:leading-[1.7]">
          Transformation Hub with Jite Newton is a flagship webinar series
          curated by the CEO, Dr. Jite Newton. Designed to elevate career
          trajectories and leadership capabilities, this exclusive event offers
          invaluable insights and strategies for personal and professional
          growth. Whether you&apos;re seeking to advance your career or enhance
          your leadership skills, the Transformation Hub provides a
          transformative learning experience to unlock your full potential and
          drive success in your endeavours.
        </p>
        <div className="mt-7 grid gap-6 lg:grid-cols-[minmax(0,0.875fr)_minmax(0,1fr)] lg:gap-8">
          <div className="relative h-[232px] overflow-hidden rounded-[8px] md:h-[340px]">
            <Image
              src="/images/f83c7998e33b33da8cc0b1cf834df42b459ef661.jpg"
              alt="A professional exploring a digital learning environment"
              fill
              sizes="(max-width: 767px) 80vw, (max-width: 1023px) 75vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col rounded-[8px] bg-[#fee5e8] p-5 md:p-6">
            <ul className="grid gap-3 sm:grid-cols-2">
              {benefits.map((item) => (
                <li
                  className="flex min-h-[61px] min-w-0 items-center gap-4 rounded-[14px] bg-white px-5 text-[13px] md:text-[16px]"
                  key={item}>
                  <LuZap aria-hidden="true" className="size-6 shrink-0 text-[#641052]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 lg:mt-auto">
              <PlumButton>
                Learn More <Arrow />
              </PlumButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
