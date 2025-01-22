import Link from "next/link";

export default function Error404() {
  return (
    <div className="text-on-primary my-8 mx-4 gradient bg-gradient-to-tr from-primary to-secondary flex items-center brut-border brut-shadow rounded-base">
      <div className="container mx-auto p-4 flex flex-wrap items-center">
        {/* <div className="w-full md:w-5/12 text-center p-4">
          <img
            src="https://themichailov.com/img/not-found.svg"
            alt="Not Found"
          />
        </div> */}
        <div className="w-full md:w-7/12 text-center md:text-left p-4">
          <div className="text-5xl font-bold font-space-grotesk">404</div>
          <div className="text-xl md:text-3xl font-medium mb-4">
            It&apos;s not you; it&apos;s me.
          </div>
          <div className="text-lg mb-8 space-y-4">
            <p>The URL you were looking for doesn&apos;t exist.</p>
            <p>Let&apos;s pretend this never happened and head back <Link href="/" className="font-bold text-on-primary underline">home</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}
