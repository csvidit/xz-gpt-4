import Link from "next/link";
import { HiArrowLongRight, HiArrowUpRight } from "react-icons/hi2";
import { UrlObject } from "url";

const Button = (props: {
  children: any;
  type: string;
  href: UrlObject | string;
  target: string;
  style: string;
}) => {
  let icon;
  let classes;

  if (props.type === "intra") {
    icon = <HiArrowLongRight />;
  } else if (props.type === "inter") {
    icon = <HiArrowUpRight />;
  } else {
    icon = <HiArrowLongRight />;
  }

  if (props.style === "outline-white") {
    classes =
      "flex flex-row space-x-2 items-center p-4 text-white border-2 border-white hover:bg-white hover:text-black";
  }

  return (
    <Link
      className={classes}
      href={props.href}
      rel="noreferrer noopener"
      target={props.target}
    >
      <p className="flex">{props.children}</p>
      <p className="flex">{icon}</p>
    </Link>
  );
};

export default Button;
