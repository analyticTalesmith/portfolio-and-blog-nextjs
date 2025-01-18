import Link from "next/link";
import { ATLogo } from "@/components/svgs/logo";

const WebsiteFooter = () => {
  return (
    <footer className="mt-auto bg-secondary-muted text-on-secondary-muted font-space-grotesk border-t-2 border-border min-h-50">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <div className="mx-auto max-w-screen-xl text-center">
          <Link
            href="/"
            className="flex justify-center items-center text-2xl font-semibold text-on-secondary-accent font-space-grotesk"
          >
            <ATLogo className="h-7 mr-2" />
            Analytic Talesmith
          </Link>
          <p className="my-6 ">
            Exploring the connections between data, people, and innovation—ideas
            for a more efficient, mindful, and insightful world.
          </p>
          <ul className="flex flex-wrap justify-center items-center mb-6 text-on-secondary-accent">
            <li>
              <a href="/about" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="/blog" className="mr-4 hover:underline md:mr-6">
                Blog
              </a>
            </li>
            <li>
              <a href="/portfolio" className="mr-4 hover:underline md:mr-6 ">
                Portfolio
              </a>
            </li>
          </ul>
          <span className="text-sm sm:text-center">
              © 2023&ndash;2025{" "}
              <a href="/about" className="hover:underline">
                Jonathan Bailey
              </a>
              . All Rights Reserved.
            </span>
        </div>
      </div>
    </footer>
  );
};

export default WebsiteFooter;
