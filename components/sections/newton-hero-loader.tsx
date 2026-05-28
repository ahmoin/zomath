"use client";

import dynamic from "next/dynamic";

export const NewtonHeroSection = dynamic(
	() =>
		import("@/components/sections/newton-hero").then(
			(m) => m.NewtonHeroSection,
		),
	{ ssr: false },
);
