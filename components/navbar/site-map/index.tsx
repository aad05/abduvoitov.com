"use client";
import { FC } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";
import { useModals } from "@/zustand";

const SiteMap: FC = () => {
  const { siteMap, setSiteMap } = useModals();

  return (
    <Dialog open={siteMap} onOpenChange={(open) => setSiteMap(open)}>
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
        <Button variant={"outline"}>Résumé</Button>
      </DialogContent>
    </Dialog>
  );
};

export default SiteMap;
