import { IBM_Plex_Sans } from 'next/font/google'

const ibmplex = IBM_Plex_Sans({weight: ["100", "200", "300", "400", "500", "600", "700"], subsets: ['latin']});

import styles from "./MainContainer.module.css"

const MainContainer = (props: { children: any }) => {
  return (
    <div className={"w-screen min-h-screen h-full flex flex-col space-y-6 justify-center scroll-smooth selection:bg-neutral-200 selection:text-neutral-900 "+styles.main_container+" "+styles.main_background+" "+ibmplex.className}>{props.children}</div>
  );
};

export default MainContainer;
