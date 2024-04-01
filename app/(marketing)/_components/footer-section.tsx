import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

export const Footer = ({ currentPage }: { currentPage?: string }) => {
  const instagram = process.env.INSTAGRAM_PAGE || "#";
  const facebook = process.env.FACEBOOK_PAGE || "#";
  const youtube = process.env.YOUTUBE_CHANNEL || "#";
  const linkedIn = process.env.LINKEDIN_PAGE || "#";

  return (
    <footer className="m-4 mt-8">
      <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 sm:flex-row sm:justify-center text-xs font-semibold text-gray-500">
        <div className="flex justify-center items-center">
          <a
            href="/about-us"
            className="hover:underline me-4 md:me-6 md:ml-2 uppercase"
          >
            About
          </a>
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
      )}
    </footer>
  );
};
