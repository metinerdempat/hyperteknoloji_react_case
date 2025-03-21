import { FC } from "react";
import { Link } from "react-router";

const Logo: FC = () => {
    return (
        <Link to="/" className="flex items-center gap-1.5 text-amber-800 font-bold text-lg">
            <img
              src="/hyper_teknoloji_logo.webp"
              alt="Hyper Teknoloji Logo"
              title="Hyper Teknoloji"
              width={120}
              height={50}
            />
        </Link>
    )
}

export default Logo;
