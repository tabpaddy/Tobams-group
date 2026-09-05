import Image from "next/image";
import { Arrow, PlumButton } from "./Ui";

const courses = [
  "Business Analysis",
  "Design Thinking",
  "Effective Communication",
  "Entrepreneurship",
  "Career Development",
  "Business Model",
];
export function LearningManagement() {
  return (
    <section className="border-t-[24px] border-white bg-[#eee7ed] py-7 md:border-t-[40px] md:py-16">
      <div className="mx-auto grid min-w-0 max-w-[1312px] items-center gap-7 px-6 md:grid-cols-[1fr_1.15fr] md:px-10 xl:px-0">
        <h2 className="min-w-0 text-[25px] text-[#641052] md:col-start-2 md:mb-[-30px] md:text-[35px]">
          Learning Management System
        </h2>
        <div className="relative mx-auto aspect-square w-full max-w-[327px] overflow-hidden rounded-full md:row-span-2 md:row-start-1 md:max-w-[550px]">
          <Image
            src="/images/03f9d7af15f0ea1c24958b1735583ae7eab882f1.jpg"
            alt="Two professionals participating in training"
            fill
            sizes="(max-width: 557px) 88vw, 45vw"
            className="object-cover"
          />
        </div>
        <div className="min-w-0">
          <div className="rounded-[5px] bg-[#ded0da] p-6 text-[14px] leading-[1.48] md:p-7 md:text-[17px] md:leading-[1.55]">
            <p>
              TG Academy is a hub of knowledge and skill-building resources
              designed to empower tech talents on their learning journey. From
              technical courses covering the latest programming languages and
              development frameworks to soft skills training in leadership,
              effective communication and project management, TG Academy offers
              a wide range of courses to cater to diverse learning needs. With
              accessible and interactive learning materials, individuals can
              enhance their skills and stay ahead in today&apos;s competitive
              tech landscape.
            </p>
            <h3 className="mt-6 font-bold text-[#641052]">
              Some of our courses include:
            </h3>
            <ul className="mt-3 grid text-[14px] md:text-[16px] gap-3 pl-5 md:grid-cols-2 lg:grid-cols-3 md:gap-x-6">
              {courses.map((course) => (
                <li className="list-disc" key={course}>
                  {course}
                </li>
              ))}
            </ul>
            <div className="mt-7 md:hidden">
              <PlumButton>
                Learn More <Arrow />
              </PlumButton>
            </div>
          </div>
          <div className="mt-8 hidden md:block">
            <PlumButton>
              Learn More <Arrow />
            </PlumButton>
          </div>
        </div>
      </div>
    </section>
  );
}
