import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  imagesExist: boolean;
  templateName: string;
}

export function Logo({ imagesExist, templateName }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-3">
      {imagesExist ? (
        <>
          {/* VSU Logo */}
          <div className="relative h-10 w-10 flex-shrink-0">
            <Image
              src="/images/vsu-logo.png"
              alt="VSU Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          {/* VSU Text Logo - Hidden on small screens */}
          <div
            className="relative hidden md:block h-10 w-auto"
            style={{ width: "200px" }}
          >
            <Image
              src="/images/vsu-text.png"
              alt="Visayas State University"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </>
      ) : (
        <>
          {/* Placeholder Logo */}
          <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-vsu-green font-bold text-sm flex-shrink-0">
            VSU
          </div>
          {/* Placeholder Text */}
          <span className="hidden md:block font-montserrat font-semibold text-lg text-white">
            {templateName}
          </span>
        </>
      )}
    </Link>
  );
}
