import Image from "next/image";
import type { FC } from "react";

const Avatar: FC<{
  post: {
    fontMatter: {
      [key: string]: any;
    };
    slug: string;
    content: string;
  };
}> = ({ post }) => {
  return (
    <div className="px-4 mt-12 flex justify-between items-center max-sm:flex-col max-sm:items-start gap-2">
      <div className="flex gap-2 items-center">
        <Image
          width={40}
          height={40}
          alt="logo"
          loading="eager"
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/image%2Flogo.png?alt=media&token=28a8445b-54bb-401b-8914-4d91c6b1649b"
        />
        <p className="font-sans font-medium">
          Abduvoitov Asadbek / {post.fontMatter.date}
        </p>
      </div>
      <div>
        <p className="font-sans text-xs">
          {post.fontMatter.reading_time.text} • 12 views
        </p>
      </div>{" "}
    </div>
  );
};

export default Avatar;
