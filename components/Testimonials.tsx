import Image from "next/image";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
const testimonials = [
  {
    name: "Aisha Yusuf",
    role: "Founder, CraftHub NG",
    image: "/images/5412a2bcc1a0b62fe5e42bf0f9af1ac1d77a35ab.png",
    copy: "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
  },
  {
    name: "John Davies",
    role: "Marketing Manager, E-Commerce Emporium",
    image: "/images/1994067c3ac3d40d2341bd81bd13e2e7f755bf0d.png",
    copy: "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
  },
  {
    name: "Chinonso Nwankwo",
    role: "HR Director, FutureTech Solutions",
    image: "/images/08e455fe112b5aa889f8276e41832a747a9bda45.png",
    copy: "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
  },
];
export function Testimonials() {
  return (
    <section className="overflow-hidden bg-white px-6 pb-12 pt-5 md:px-16 md:pb-16 md:pt-8">
      <h2 className="text-center text-[22px] font-bold md:text-[38px]">
        Testimonials
      </h2>
      <div className="mx-auto mt-7 hidden max-w-[1312px] grid-cols-3 gap-6 lg:grid">
        {testimonials.map((item) => (
          <TestimonialCard key={item.name} {...item} />
        ))}
      </div>
      <div className="mx-auto mt-7 max-w-[327px] lg:hidden">
        <TestimonialCard
          name="Sarah Johnson"
          role="CEO of Tech Innovations Inc."
          image="/images/5412a2bcc1a0b62fe5e42bf0f9af1ac1d77a35ab.png"
          copy="Tobams Group is a true partner in our journey to digital excellence. Their creativity and technical expertise have propelled our projects to new heights. Their work is top-notch, and the results speak for themselves. I can't recommend them enough!"
        />
      </div>
      <div className="mx-auto mt-6 flex max-w-[1312px] justify-end gap-3">
        <button
          aria-label="Previous testimonial"
          className="flex h-8 w-8 items-center justify-center rounded-[5px] bg-[#fee5e8] text-[#f7465b]">
          <LuChevronLeft aria-hidden="true" className="size-5" />
        </button>
        <button
          aria-label="Next testimonial"
          className="flex h-8 w-8 items-center justify-center rounded-[5px] bg-[#fee5e8] text-[#f7465b]">
          <LuChevronRight aria-hidden="true" className="size-5" />
        </button>
      </div>
    </section>
  );
}
function TestimonialCard({
  name,
  role,
  image,
  copy,
}: {
  name: string;
  role: string;
  image: string;
  copy: string;
}) {
  return (
    <article className="min-h-[244px] rounded-[16px] border-l-2 border-[#f7465b] bg-white p-5 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="flex items-center gap-4">
        <Image
          src={image}
          alt=""
          width={44}
          height={44}
          className="rounded-full"
        />
        <div>
          <h3>{name}</h3>
          <p className="text-sm text-[#777]">{role}</p>
        </div>
      </div>
      <p className="mt-6 text-[16px] leading-[1.45] md:text-[17px]">{copy}</p>
    </article>
  );
}
