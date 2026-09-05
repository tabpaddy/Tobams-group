import { PlumButton } from "./Ui";
export function Hero() {
  return (
    <section className="relative flex h-[318px] items-center justify-center overflow-hidden bg-[url('/images/3f9fee51039d846e8786883c446663724e497325.jpg')] bg-cover bg-center md:h-[512px]">
      <div className="absolute inset-0 bg-black/65" />
      <div className="relative mx-auto max-w-[1200px] px-6 text-center text-white">
        <div className="mx-auto mb-3 flex h-11 w-[150px] items-center justify-center rounded-full bg-white/10 text-xs md:mb-5 md:w-48 md:text-sm">
          WHAT WE DO
        </div>
        <h1 className="text-[24px] font-bold leading-tight md:text-[52px]">
          Training and Development
        </h1>
        <p className="mx-auto mt-4 max-w-[1100px] text-[15px] leading-[1.45] md:mt-5 md:text-[18px] md:leading-7">
          Our comprehensive range of programs and resources is designed to
          enhance skills, broaden knowledge, and propel careers forward
          <br className="hidden md:block" /> in today&apos;s ever-evolving
          landscape.
        </p>
        <div className="mt-6 md:mt-7">
          <PlumButton>Book a Consultation</PlumButton>
        </div>
      </div>
    </section>
  );
}
