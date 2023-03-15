import Link from "next/link";
import { HiArrowLongRight, HiArrowUpRight } from "react-icons/hi2";
import { UrlObject } from "url";
import { motion } from "framer-motion";

const Button = (props: {
  children: any;
  type: string;
  href: UrlObject | string;
  target: string;
  style: string;
}) => {
  let icon;
  let classes;

  classes = "flex flex-row space-x-2 items-center";

  if (props.type === "intra") {
    icon = <HiArrowLongRight />;
  } else if (props.type === "inter") {
    icon = <HiArrowUpRight />;
  } else {
    icon = <HiArrowLongRight />;
  }

  if (props.style === "outline-white") {
    classes =
      "flex flex-row space-x-2 items-center text-white border-2 border-white bg-white bg-opacity-10 hover:bg-opacity-100 hover:text-black backdrop-blur-md hover:transform hover:scale-105 transition ease-in-out";
  }

  const mainDivVariants = {
    hover: {},
    initial: {},
  };
  const primaryPVariants = {
    initial: {
      display: "flex",
      translateX: 0,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeInOut",
      },
    },
    hover: {
      display: "none",
      translateX: 10,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeInOut",
      },
    },
  };
  const secondaryPVariants = {
    initial: {
      display: "none",
      translateX: -10,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeInOut",
      },
      
    },
    hover: {
      display: "flex",
      translateX: 0,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeInOut",
      },
      
    },
  };

  return (
    <motion.div
      variants={mainDivVariants}
      whileHover="hover"
      initial="initial"
      className={classes}
    >
      <Link
        className="flex flex-row space-x-2 items-center w-max h-max p-2 lg:p-4"
        href={props.href}
        rel="noreferrer noopener"
        target={props.target}
      >
        <p className="flex">{props.children}</p>
        <motion.p variants={primaryPVariants} className="">
          {icon}
        </motion.p>
        <motion.p variants={secondaryPVariants} className="">
          {icon}
        </motion.p>
      </Link>
    </motion.div>
  );
};

export default Button;
