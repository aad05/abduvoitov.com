import { FC } from "react";
import { Button } from "../ui/button";
import { ModeToggle } from "../ui/modetoggle";
import { Menu } from "lucide-react";
import SiteMap from "./site-map";
import { useReduxDispatch } from "@/hooks/useRedux";
import { setSiteMap } from "@/redux/dialogSlice";

const Navbar: FC = () => {
  const dispatch = useReduxDispatch();
  return (
    <>
      <SiteMap />
      <div className="w-[700px] h-full m-auto p-5 max-[800px]:w-full max-[800px]:py-5 max-[800px]:px-10">
        <div className="flex justify-between">
          <div className="flex gap-3 max-[650px]:hidden">
            <Button variant={"link"}>
              <h3 className="font-bold">About</h3>
            </Button>
            <Button variant={"link"}>
              <h3 className="font-bold">Blog</h3>
            </Button>
            <Button variant={"link"}>
              <h3 className="font-bold">Dashboard</h3>
            </Button>
            <Button variant={"link"}>
              <h3 className="font-bold">Resume</h3>
            </Button>
          </div>
          <Button
            onClick={() => dispatch(setSiteMap())}
            variant="outline"
            size="icon"
            className="hidden max-[650px]:flex"
          >
            {/* Dark */}
            <Menu className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            {/* Light */}
            <Menu className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <span className="sr-only">Humburger menu</span>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </>
  );
};

export default Navbar;
