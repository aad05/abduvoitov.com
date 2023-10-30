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
import { sitemap } from "@/lib/routing";

const SiteMap: FC = () => {
  const { siteMap, setSiteMap } = useModals();

  return (
    <Dialog open={siteMap} onOpenChange={(open) => setSiteMap(open)}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Site Map</DialogTitle>
        </DialogHeader>
        {sitemap.map(({ id, title, path }) => (
          <Link key={id} href={path} className="w-full">
            <Button
              onClick={() => setSiteMap(false)}
              variant={"outline"}
              className="w-full"
            >
              {title}
            </Button>
          </Link>
        ))}
      </DialogContent>
    </Dialog>
  );
};

export default SiteMap;
