import Image from "next/image";
import { FaBolt } from "react-icons/fa6";
const benefits = [
  "Enhanced Leadership Skills",
  "Improved Employee Engagement",
  "Stronger Organisational Culture",
  "Sustainable Growth",
];
export function ManagementDevelopment() {
  return (
    <section className="bg-[#fafafa] px-6 py-6 md:px-16 md:py-16">
      <div className="mx-auto grid max-w-[1312px] gap-6 rounded-[20px] bg-[#300520] p-5 text-white md:grid-cols-2 md:gap-12 md:p-10">
        <h2 className="text-[16px] md:col-start-2 md:text-[25px] lg:text-[35px] md:font-normal">
          Management Development Program
        </h2>
        <div className="relative h-[232px] overflow-hidden rounded-[8px_8px_0_8px] md:row-span-2 md:row-start-1 md:h-[720px] lg:h-[640px] md:rounded-[8px_8px_0_8px]">
          <Image
            src="/images/733872776ac31abdb528d87705fbbb7945a0d26d.jpg"
            alt="Colleagues collaborating during a management development programme"
            fill
            sizes="(max-width: 767px) 80vw, 45vw"
            className="object-cover"
          />
        </div>
        <div className="text-[13px] leading-[1.48] md:text-[16px] md:leading-[1.55]">
          <p>
            Tobams Group offers a comprehensive Management Development Program
            designed to equip corporate organisations with the high -performing
            leaders they need to thrive.
          </p>
          <p className="mt-6">
            Our program includes workshops, seminars, coaching sessions, online
            courses, and experiential learning opportunities designed to improve
            leadership, strategic thinking, communication, and other essential
            managerial competencies for corporate organisations.
          </p>
          <ul className="mt-9 space-y-6 md:space-y-4">
            {benefits.map((item) => (
              <li
                className="flex h-11 items-center gap-4 rounded-[6px] bg-[#9d6a8e] px-4 text-[13px] md:text-[16px]"
                key={item}>
                <FaBolt aria-hidden="true" className="size-[18px] shrink-0 text-white" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
