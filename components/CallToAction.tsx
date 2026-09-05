import { PlumButton } from "./Ui";
export function CallToAction() {
  return (
    <section className="bg-white px-6 py-6 md:px-16 md:py-10">
      <div className="mx-auto flex max-w-[1135px] flex-col items-center rounded-[8px] bg-[#641052] px-6 py-8 text-center text-white md:py-9">
        <p className="max-w-[760px] text-[17px] leading-6 md:text-xl">
          <span className="md:hidden">
            Don&apos;t just dream it—let&apos;s build it!
            <br />
            Click now and start your project
            <br />
            with Tobams Group. Your journey to
            <br />
            digital excellence begins here.
          </span>
          <span className="hidden md:inline">
            Want to accelerate professional growth and development at your
            organisation?
            <br />
            See how we can help.
          </span>
        </p>
        <div className="mt-7">
          <PlumButton inverse>Book a Consultation</PlumButton>
        </div>
      </div>
    </section>
  );
}
