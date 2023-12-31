import { FC, useEffect, useState } from "react";
import BackgroundCell from "./bg-cell";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import TextSpan from "./anim";
import SiteMap from "@/components/navbar/site-map";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useModals } from "@/zustand";

const Home: FC = () => {
  const { setSiteMap } = useModals();
  const letters = "Abcdefghijklmnopqrstuvwxyz";
  const [cursorVariant, setCursorVariant] = useState("default");
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  });

  const variants: Variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      x: mousePosition.x,
      y: mousePosition.y,
      backgroundColor: "transparent",
    },
  };

  let interval: any;

  const onMouseEnter = (e: any) => {
    mouseEnterHandler();
    let iteration = 0;
    clearInterval(interval);

    interval = setInterval(() => {
      e.target.innerText = e.target.innerText
        .split("")
        .map((letter: string, index: number) => {
          if (index < iteration) {
            return e.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= e.target.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  };

  const mouseEnterHandler = () => setCursorVariant("text");
  const mouseLeaveHandler = () => setCursorVariant("default");

  return (
    <div className="w-full h-[100vh] relative overflow-hidden">
      <SiteMap />
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
      <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        <BackgroundCell />
      </div>
      <div className="w-[80%] m-auto flex items-center justify-between h-[120px]">
        <div
          className="text-anim"
          data-value="Abduvoitov."
          onMouseLeave={mouseLeaveHandler}
          onMouseEnter={onMouseEnter}
        >
          Abduvoitov.
        </div>
        <div className="flex gap-[50px] max-[1300px]:gap-[30px] max-[1000px]:hidden">
          <div className="cursor-none font-semibold text-black">
            <Link href="/about">About</Link>
          </div>
          <div className="cursor-none font-semibold text-black">
            <Link href="/blog">Blog</Link>
          </div>
          <div className="cursor-none font-semibold text-black">
            <Link href="/dashboard">Dashboard</Link>
          </div>
          <div className="cursor-none font-semibold text-black">
            <Link href="/resume">Résumé</Link>
          </div>
        </div>
        <Button
          className="hidden max-[1000px]:flex"
          onClick={() => setSiteMap(true)}
          variant="outline"
          size="icon"
        >
          <Menu className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          {/* Light */}
          <Menu className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <span className="sr-only">Humburger menu</span>
        </Button>
      </div>
      <div className="w-full h-[60%] flex items-center justify-center">
        <div className="text-black">
          <div
            className="text-center relative font-black text-[15vh] max-[1000px]:text-[10vh] max-[650px]:text-[5vh] max-[450px]:text-[3vh]"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            {"Software".split("").map((letter, index) => (
              <TextSpan key={index}>{letter}</TextSpan>
            ))}
          </div>
          <div
            className="text-center relative font-black text-[25vh] max-[1000px]:text-[15vh] max-[650px]:text-[10vh] max-[450px]:text-[7vh]"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            {"Engineer".split("").map((letter, index) => (
              <TextSpan key={index}>{letter}</TextSpan>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full cursor-none absolute font-semibold text-black text-center bottom-5 left-0">
        Abduvoitov Asadbek &#169; 2023
      </div>
    </div>
  );
};

export default Home;
