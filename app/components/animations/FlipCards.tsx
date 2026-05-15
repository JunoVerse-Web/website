import React from "react";

export default function FlipCards({ children }: { children: React.ReactNode }) {
	return <div className="grid content-center text-center bg-white w-full h-auto aspect-385/520 outline-1 outline-red-600">{children}</div>;
}
