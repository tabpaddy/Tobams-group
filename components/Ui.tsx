import Link from "next/link";
import { FaBolt } from "react-icons/fa6";
import { LuArrowUpRight } from "react-icons/lu";

export function PlumButton({
  children,
  inverse = false,
}: {
  children: React.ReactNode;
  inverse?: boolean;
}) {
  return (
    <Link
      href="#contact"
      className={`inline-flex h-12 items-center justify-center rounded-[3px] px-6 text-base transition-opacity hover:opacity-90 focus-visible:outline-2 ${inverse ? "bg-white text-[#641052]" : "bg-[#641052] text-white"}`}>
      {children}
    </Link>
  );
}
export function Arrow() {
  return <LuArrowUpRight aria-hidden="true" className="ml-3 size-[18px]" />;
}
export function BoltList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-2 text-[13px] leading-5 text-[#6f6f6f] md:text-[16px] md:leading-6">
      {items.map((item) => (
        <li className="flex items-center gap-3" key={item}>
          <FaBolt aria-hidden="true" className="ml-1 size-[14px] shrink-0 text-[#3d002e] md:size-[16px]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
