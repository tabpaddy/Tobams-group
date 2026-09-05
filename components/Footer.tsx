import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    title: "What We Do",
    items: [
      "Sustainability Services",
      "Strategy Planning and Implementation",
      "Tech Talent Solutions",
      "Training and Development",
      "IT Consulting Services",
      "Social Impact",
      "Talent Recruitment",
    ],
  },
  {
    title: "Company",
    items: [
      "About",
      "Jobs",
      "Projects",
      "Our Founder",
      "Business Model",
      "The Team",
      "Contact Us",
      "Blog",
      "FAQs",
      "Testimonials",
    ],
  },
  {
    title: "Solution",
    items: [
      "Tobams Group Academy",
      "Help a Tech Talent",
      "Campus Ambassadors Program",
      "Join Our Platform",
      "Pricing",
      "Book a Consultation",
      "Join Our Slack Community",
    ],
  },
];
export function Footer() {
  return (
    <footer id="contact" className="bg-[#10000c] text-white">
      <div className="border-b border-white/60 bg-[#24001c] px-6 py-7 md:px-16 md:py-10">
        <div className="mx-auto flex max-w-[1312px] flex-col items-start justify-between gap-6 lg:gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-[15px] md:text-[17px]">
              Ready to be a part of something extraordinary?
            </p>
            <h2 className="mt-5 text-[23px] leading-tight md:text-[25px] lg:text-[31px]">
              Let’s work together to create a difference
            </h2>
          </div>
          <Link
            href="#contact"
            className="rounded-[4px] bg-[#641052] px-6 py-3">
            Get In Touch
          </Link>
        </div>
      </div>
      <div className="mx-auto max-w-[1440px] px-6 py-12 md:px-16 md:py-14">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16 lg:grid-cols-[1.5fr_1.2fr_.7fr_1fr]">
          <div>
            <Image
              src="/images/Seecondary Logo copy 2.png"
              alt="Tobams Group"
              width={166}
              height={64}
              className="h-auto w-[166px]"
            />
            <p className="mt-10 max-w-[355px] text-[15px] leading-6 md:text-[16px]">
              Tobams Group is an innovative consultancy firm reshaping the
              future of tech talent development in Africa, specializing in
              talent acquisition, internships, and skill development with a
              global perspective.
            </p>
            <div className="mt-7 flex gap-5">
              <Social label="LinkedIn" src="/icons/linklden.png" />
              <Social label="Instagram" src="/icons/instagram.png" />
              <Social label="X" src="/icons/x.png" />
            </div>
          </div>
          {columns.map((column) => (
            <nav aria-label={column.title} key={column.title}>
              <h3 className="text-xl font-bold">{column.title}</h3>
              <ul className="mt-7 space-y-4 text-[15px] md:text-[16px]">
                {column.items.map((item) => (
                  <li key={item}>
                    <Link href="#">{item}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-12 grid rounded-[8px] bg-[#21121d] p-4 md:grid-cols-[4fr] md:p-6">
          <section className="order-2 mt-8 md:order-1 md:mt-0 md:mr-3">
            <h3 className="text-xl font-bold">Registered Offices</h3>
            <div className="mt-4 grid gap-8 md:grid-cols-2">
              <Address title="United Kingdom">
                07451196 (Registered by Company House)
                <br />
                Vine Cottages, 215 North Street, Romford, Essex, United Kingdom,
                RM1 4QA
              </Address>
              <Address title="Nigeria">
                RC 1048722 (Registered by the Corporate Affairs Commission)
                <br />
                4, Muaz Close, Angwari-Rimi
              </Address>
            </div>
          </section>
          <section className="order-1 md:order-2 md:col-start-3">
            <h3 className="text-xl font-bold">Contact Information</h3>
            <p className="mt-5 flex items-center gap-2 lg:gap-4"><Image src="/icons/mail_icon.png" alt="" width={20} height={16} />theteam@tobamsgroup.com</p>
            <p className="mt-4 flex items-center gap-2 lg:gap-4"><Image src="/icons/phone_icon.png" alt="" width={20} height={20} />+447886600748</p>
          </section>
        </div>
        <div className="mt-10 flex flex-col-reverse items-center justify-between gap-8 border-t border-white/10 pt-8 text-center text-sm text-white/75 md:flex-row md:text-left">
          <p>Copyright © Tobams Group, 2024. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-8 underline">
            <Link href="#">Terms and Conditions</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Cookies Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
function Social({ label, src }: { label: string; src: string }) {
  return (
    <Link
      href="#"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
      <Image src={src} alt="" width={22} height={22} className="h-[22px] w-[22px] object-contain" />
    </Link>
  );
}
function Address({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="text-[15px] leading-6 md:border-r md:border-[#DDD0DA]">
      <h4 className="mb-1 text-[#f7465b]">{title}</h4>
      <p>{children}</p>
    </div>
  );
}
