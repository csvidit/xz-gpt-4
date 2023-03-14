import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import MainContainer from "@/components/MainContainer";
import MainContent from "@/components/MainContent";
import { BsDot } from "react-icons/bs";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
      <title>Xzayvian Visual GPT</title>
        <meta
          name="description"
          content="The new Xzayvian chatbot based on OpenAI GPT-4, a Vidit Khandelwal Project"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Vidit Khandelwal" />
        <meta
          name="keywords"
          content="Vidit Khandelwal, DePauw University, DePauw, CS, computer science, openai, chatgpt, gpt-4, xz, xzayvian, vis, visual"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="all" />

        <meta property="og:title" content="Xzayvian Visual GPT" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/bg-2.png" />
        <meta property="og:url" content="https://vis.xz.viditkhandelwal.com" />
        <meta property="og:site_name" content="Xzayvian Visual GPT" />
        <meta
          property="description"
          content="The new Xzayvian chatbot based on OpenAI GPT-4, a Vidit Khandelwal project"
        />
      </Head>
      <MainContainer>
        <MainContent>
          <motion.h1
            animate={{ opacity: 1, translateY: 0 }}
            initial={{ opacity: 0, translateY: 0 }}
            transition={{ type: "spring" }}
            className="flex flex-col lg:flex-row justify-center items-center lg:space-x-1 font-semibold text-4xl lg:text-6xl"
          >
            <p>XZAYVIAN</p>
            <p className="font-normal">Visual GPT</p>
          </motion.h1>
          <motion.div
            animate={{ opacity: 1, translateY: 0 }}
            initial={{ opacity: 0, translateY: 0 }}
            transition={{
              delay: 0.4,
              type: "spring",
            }}
            className="flex flex-row space-x-2 items-center font-sans text-xl: lg:text-2xl mt-10 justify-center"
          >
            <div className="flex flex-row items-center space-x-1">
              <p>coming soon</p>
            </div>
            <BsDot />
            <p>invite only*</p>
          </motion.div>
          <motion.p
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-20 text-xs text-center font-sans"
          >
            *bring your own key
          </motion.p>
        </MainContent>
        <Footer/>
      </MainContainer>
    </>
  );
}
