import { FC } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";
// import { useReduxDispatch, useReduxSelector } from "@/hooks/useRedux";
// import { setSiteMap } from "@/redux/dialogSlice";

const SiteMap: FC = () => {
  // const { siteMap } = useReduxSelector((state) => state.dialog);
  // const dispatch = useReduxDispatch();
  return (
    <Dialog
    // open={siteMap} onOpenChange={() => dispatch(setSiteMap())}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Site Map</DialogTitle>
        </DialogHeader>
        <Button variant={"outline"}>
          <Link href={"/"}>Home</Link>
        </Button>
        <Button variant={"outline"}>
          <Link href={"/about"}>About</Link>
        </Button>
        <Button variant={"outline"}>Blog</Button>
        <Button variant={"outline"}>Dasboard</Button>
        <Button variant={"outline"}>Resume</Button>
      </DialogContent>
    </Dialog>
  );
};

export default SiteMap;
