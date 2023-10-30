import type { FC } from "react";
import { Separator } from "../ui/separator";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <div className="mt-8">
      <Separator />
      <div className="flex justify-between p-5 max-sm:flex-col">
        <Link
          className="font-semibold text-[#1877FE]"
          href="https://t.me/asadbek_abduvoitov"
        >
          Telegram
        </Link>
        <Link
          className="font-semibold text-[#1877FE]"
          href="https://www.instagram.com/abduvoitov_asadbek"
        >
          Instagram
        </Link>
        <Link
          className="font-semibold text-[#1877FE]"
          href="https://www.linkedin.com/in/asadbek-abduvoitov-97a9a8223"
        >
          Youtube
        </Link>
        <Link
          className="font-semibold text-[#1877FE]"
          href="https://www.linkedin.com/in/asadbek-abduvoitov-97a9a8223"
        >
          Linkedin
        </Link>
      </div>
    </div>
  );
};

export default Footer;
