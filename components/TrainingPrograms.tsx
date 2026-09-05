import Image from "next/image";
import { BoltList } from "./Ui";

const programs = [
  {
    title: "Corporate Trainings",
    image: "/images/e5e1262308c38e62b50da6013b0ae330a3dfab22.jpg",
    alt: "Corporate team taking part in a training session",
    copy: "Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values.",
    bullets: [
      "Leadership Training",
      "Strategic Planning and Implementation",
      "Project Management",
      "Sustainability Training",
      "Customised Training",
    ],
  },
  {
    title: "Personalised Individual Training",
    image: "/images/9d2e7f745af0f275c5f457a871cad852f9dabd10.jpg",
    alt: "Professional attending an individual training session",
    copy: "Begin a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today's professionals.",
    bullets: [
      "Leadership Development",
      "Soft Skills Development",
      "Industry Specific Knowledge",
      "Technical Skills Enhancement",
      "Time Management and Productivity",
      "Career Development",
    ],
  },
  {
    title: "Capacity Development",
    image: "/images/5c5a12abda242a3deb8ee7eb2002146f0ec1ea57.jpg",
    alt: "A facilitator leading a capacity development workshop",
    copy: "At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:",
    bullets: [
      "Tailored Training Programs",
      "Expert-Led Workshops",
      "Personalized Mentorship",
      "Technical Skills Enhancement",
      "Collaborative Learning Environment",
      "Ongoing Support and Resources",
    ],
  },
];
export function TrainingPrograms() {
  return (
    <section className="mx-auto max-w-[1440px] rounded-t-[18px] bg-white px-6 py-8 md:px-16 md:py-16">
      <div className="space-y-12 md:space-y-[118px]">
        {programs.map((program, index) => (
          <article
            key={program.title}
            className={`flex flex-col gap-6 md:items-center md:gap-10 lg:gap-20 ${index % 2 ? "md:flex-row-reverse" : "md:flex-row"}`}>
            <div className="min-w-0 flex-1">
              <h2 className="text-[25px] font-bold leading-tight md:text-[33px] lg:text-[39px] md:font-normal">
                {program.title}
              </h2>
              <p className="mt-3 text-[13px] leading-[1.55] text-[#6f6f6f] md:text-[16px] md:leading-[1.6]">
                {program.copy}
              </p>
              <BoltList items={program.bullets} />
            </div>
            <div
              className="relative h-[230px] w-full shrink-0 overflow-hidden rounded-[42px_6px_6px_6px] md:h-[447px] md:w-[48%]">
              <Image
                src={program.image}
                alt={program.alt}
                fill
                sizes="(max-width: 767px) 88vw, 45vw"
                className="object-cover"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
