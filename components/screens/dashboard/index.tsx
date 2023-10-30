import Navbar from "@/components/navbar";
import { FC } from "react";
import { Card, CardHeader } from "@/components/ui/card";
import { ArrowUpRightSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";
import { DashboardMatricType } from "@/@types";

const Dashboard: FC<DashboardMatricType> = (props) => {
  const IconSquare = () => <ArrowUpRightSquare className="w-[18px] h-[18px]" />;

  return (
    <>
      <Navbar />
      <div className="w-[700px] m-auto p-5 max-[800px]:w-full max-[800px]:py-5 max-[800px]:px-10">
        <h1 className="text-5xl font-black">Dashboard</h1>
        <div className="mt-8 grid grid-cols-2 gap-4 max-sm:grid-cols-1">
          <Card>
            <CardHeader>
              <Button variant={"link"} className="gap-2 flex justify-start">
                Github Followers <IconSquare />
              </Button>
              <h1 className="pl-3 text-5xl">{props.github}</h1>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Button variant={"link"} className="gap-2 flex justify-start">
                Telegram Subscribers <IconSquare />
              </Button>
              <h1 className="pl-3 text-5xl">{props.telegram}</h1>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Button variant={"link"} className="gap-2 flex justify-start">
                All time views <IconSquare />
              </Button>
              <h1 className="pl-3 text-5xl">--</h1>
            </CardHeader>
          </Card>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
