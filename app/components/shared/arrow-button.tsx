import BlackArrowRight from "../icons/black-arrow-right";
import clsx from "clsx";
import CustomLink from "./custom-link";

export default function ArrowButton({ label, url, target = "_self", className }: { label: string; url: string; target: string; className?: string }) {
	const linkClass = "group flex items-center gap-[0.52vw] mb-0!";
	if (target === "_blank") {
		return (
			<a
				href={url}
				target="_blank"
				className={clsx(linkClass, className)}
			>
				<p className="mb-0!">{label}</p>
				<BlackArrowRight className="w-[2.08vw] h-auto object-contain duration-300 ease-in-out group-hover:translate-x-[20%]" />
			</a>
		);
	} else {
		return (
			<CustomLink
				scroll={false}
				href={url}
				className={clsx(linkClass, className)}
			>
				<p className="mb-0!">{label}</p>
				<BlackArrowRight className="w-[2.08vw] h-auto object-contain duration-300 ease-in-out group-hover:translate-x-[20%]" />
			</CustomLink>
		);
	}
}
