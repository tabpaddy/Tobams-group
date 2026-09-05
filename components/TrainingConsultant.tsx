import { Arrow, PlumButton } from "./Ui";
const items = [
  [
    "Expert-Led Learning",
    "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.",
  ],
  [
    "Comprehensive Curriculum",
    "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.",
  ],
  [
    "Interactive Workshops",
    "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.",
  ],
  [
    "Global Recognition",
    "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.",
  ],
];
export function TrainingConsultant() {
  return (
    <section className="bg-[#eee7ed] px-6 py-7 md:px-16 md:py-14">
      <div className="mx-auto max-w-[1312px]">
        <h2 className="text-[20px] text-[#641052] md:text-[38px]">
          Training The Consultant
        </h2>
        <h3 className="mt-3 text-[16px] font-normal text-[#641052] md:font-bold">
          Maximise Your Potential as a Certified Trainer:
        </h3>
        <p className="mt-7 text-[15px] leading-[1.48] md:text-[17px] md:leading-[1.55]">
          With the help of our{" "}
          <span className="md:hidden">Business Analysis </span>Training
          Consultants program, take a revolutionary step toward becoming a
          distinguished certified training consultant. Learn from professionals
          in the field, immerse yourself in a thorough curriculum, and hone your
          training methods through interactive workshops. Participating in our
          program will enable you to gain expertise in diverse courses while
          also developing the abilities to mentor and encourage others in their
          career advancement.
        </p>
        <div className="mt-7 grid gap-7 rounded-[8px] bg-[#641052] p-6 text-white md:grid-cols-2">
          {items.map(([title, copy]) => (
            <article key={title}>
              <h4 className="font-bold">{title}</h4>
              <p className="mt-4 text-[15px] leading-[1.5] md:text-[17px]">
                {copy}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <PlumButton>
            Learn More <Arrow />
          </PlumButton>
        </div>
      </div>
    </section>
  );
}
