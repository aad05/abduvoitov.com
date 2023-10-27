import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useReduxDispatch, useReduxSelector } from "@/hooks/useRedux";
import { setSiteMap } from "@/redux/dialogSlice";
import { FC } from "react";

const SiteMap: FC = () => {
  const { siteMap } = useReduxSelector((state) => state.dialog);
  const dispatch = useReduxDispatch();
  return (
    <Dialog open={siteMap} onOpenChange={() => dispatch(setSiteMap())}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Site Map</DialogTitle>
        </DialogHeader>
        <Button variant={"outline"}>Home</Button>
        <Button variant={"outline"}>About</Button>
        <Button variant={"outline"}>Blog</Button>
        <Button variant={"outline"}>Dasboard</Button>
        <Button variant={"outline"}>Resume</Button>
      </DialogContent>
    </Dialog>
  );
};

export default SiteMap;
