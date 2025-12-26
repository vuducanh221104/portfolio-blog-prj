import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Icon Zalo SVG - Logo Zalo chính thức
const ZaloIcon = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z"
      fill="#0068FF"
    />
    <path
      d="M12.5 7C10.014 7 8 9.014 8 11.5C8 13.986 10.014 16 12.5 16C14.986 16 17 13.986 17 11.5C17 9.014 14.986 7 12.5 7ZM12.5 14C11.119 14 10 12.881 10 11.5C10 10.119 11.119 9 12.5 9C13.881 9 15 10.119 15 11.5C15 12.881 13.881 14 12.5 14Z"
      fill="white"
    />
    <path
      d="M7 11.5C7 11.5 7.5 13 9.5 13C11.5 13 12 11.5 12 11.5"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M12 11.5C12 11.5 12.5 13 14.5 13C16.5 13 17 11.5 17 11.5"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const contactPage = () => {
  // Thay đổi link Zalo của bạn tại đây
  const zaloLink = "https://zalo.me/your-zalo-id"; // Thay bằng link Zalo thực tế của bạn

  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1">
        <MessageCircle className="h-4 w-4" />
        Liên hệ
      </Badge>
      <div className="flex flex-col gap-6 w-full items-center justify-center min-h-[60vh]">
        <FramerWrapper y={0} scale={0.9}>
          <div className="flex flex-col items-center gap-6">
            <Heading>Liên hệ với tôi qua Zalo</Heading>
            <div className="flex flex-col items-center gap-4">
              <div className="p-6 rounded-full bg-blue-50 dark:bg-blue-950">
                <ZaloIcon className="w-16 h-16" />
              </div>
              <p className="font-poppins text-lg text-primary max-sm:text-base text-center">
                Nhấn vào nút bên dưới để liên hệ với tôi qua Zalo
              </p>
              <Link href={zaloLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2 bg-[#0068FF] hover:bg-[#0056CC]">
                  <ZaloIcon className="w-5 h-5" />
                  Mở Zalo
                </Button>
              </Link>
            </div>
          </div>
        </FramerWrapper>
      </div>
    </div>
  );
};

export default contactPage;
