import {
	AirportIcon,
	BookOpen01Icon,
	Camera01Icon,
	CheckmarkCircle01Icon,
	CompassIcon,
	Copy01Icon,
	EyeIcon,
	GraduationScrollIcon,
	LayerIcon,
	Link01Icon,
	Pen01Icon,
	Shield01Icon,
	SquareIcon,
	TriangleIcon,
} from "@hugeicons/core-free-icons";

export const topics = [
	{
		icon: TriangleIcon,
		title: "Triangles",
		description:
			"Congruence criteria, similarity, Pythagorean theorem, special triangles, cevians, and area. Master every triangle property from basic to advanced.",
		concepts: [
			"SSS, SAS, ASA, AAS, HL",
			"Pythagorean triples",
			"Centroid, orthocenter, incenter",
			"Law of Sines and Cosines",
		],
	},
	{
		icon: CompassIcon,
		title: "Circles",
		description:
			"Arcs, sectors, inscribed angles, tangent lines, power of a point. Understand circles from the ground up.",
		concepts: [
			"Inscribed angle theorem",
			"Tangent-secant relationships",
			"Power of a Point",
			"Radical axes and coaxal circles",
		],
	},
	{
		icon: AirportIcon,
		title: "Coordinate Geometry",
		description:
			"Distance, midpoint, slope, line equations, and analytic proofs. Bridge algebra and geometry seamlessly.",
		concepts: [
			"Distance and midpoint formulas",
			"Line equations and intersections",
			"Conic sections basics",
			"Analytic proof techniques",
		],
	},
	{
		icon: LayerIcon,
		title: "Transformations",
		description:
			"Translations, rotations, reflections, dilations, and symmetry. See how shapes move through space.",
		concepts: [
			"Rigid motions and isometries",
			"Composition of transformations",
			"Symmetry groups",
			"Dilations and similarity",
		],
	},
	{
		icon: SquareIcon,
		title: "Polygons & Quadrilaterals",
		description:
			"Properties of parallelograms, trapezoids, regular polygons, interior and exterior angles. Build solid foundations.",
		concepts: [
			"Parallelogram criteria",
			"Interior and exterior angle sums",
			"Regular polygon properties",
			"Area and perimeter formulas",
		],
	},
	{
		icon: Shield01Icon,
		title: "Proofs & Logic",
		description:
			"Two-column proofs, paragraph proofs, and logical reasoning. Learn to construct airtight arguments step by step.",
		concepts: [
			"If-then statements and converses",
			"Direct and indirect proof",
			"Proof by contradiction",
			"Common proof strategies",
		],
	},
];

export const struggles = [
	{
		challenge: "Staring at a proof with no idea where to start",
		solution:
			"Newton walks you through proof strategies with guiding questions instead of giving away the answer. You learn to identify what you know, what you need, and which theorems bridge the gap. Over time, you develop your own proof instincts.",
	},
	{
		challenge: "Memorizing formulas without understanding why they work",
		solution:
			"Every formula comes with a visual derivation. See why the area of a circle is πr², why the Pythagorean theorem holds, and why inscribed angles behave the way they do. When you understand the why, the what sticks naturally.",
	},
	{
		challenge: "Getting lost in multi-step construction problems",
		solution:
			"Break down complex problems into smaller, manageable pieces. Newton helps you identify what you know, what you need, and the logical path between them. Each step builds on the last, so you never feel overwhelmed.",
	},
	{
		challenge: "Connecting algebra to geometric concepts",
		solution:
			"Our Concept Map shows exactly how algebra and geometry intersect, from coordinate proofs to similarity ratios. No more siloed thinking. When you see the connections, both subjects become easier.",
	},
	{
		challenge: "Knowing which theorem to apply and when",
		solution:
			"Newton trains your pattern recognition by presenting problems that look different but use the same core ideas. You learn to spot the hidden triangle, the subtle cyclic quadrilateral, and the key auxiliary line that unlocks everything.",
	},
];

export const proofSteps = [
	{
		step: "Identify",
		description:
			"What do you know? What are you trying to prove? Newton helps you list your givens and goals clearly.",
		icon: EyeIcon,
	},
	{
		step: "Connect",
		description:
			"Which theorems and definitions bridge your givens to your conclusion? Newton suggests paths without spoiling the journey.",
		icon: Link01Icon,
	},
	{
		step: "Construct",
		description:
			"Build your argument one logical step at a time. Each statement follows from the last. Newton checks your reasoning as you go.",
		icon: Pen01Icon,
	},
	{
		step: "Verify",
		description:
			"Review the complete proof. Does every step follow? Is anything assumed that should not be? Newton helps you catch gaps before your teacher does.",
		icon: CheckmarkCircle01Icon,
	},
];

export const learningPaths = [
	{
		level: "Foundations",
		subtitle: "Grades 8-9",
		description:
			"Build your geometric vocabulary and intuition. Learn the basic properties of lines, angles, triangles, and circles. Start writing simple proofs.",
		topics: [
			"Angle relationships",
			"Triangle properties",
			"Parallel lines and transversals",
			"Intro to proofs",
		],
		icon: GraduationScrollIcon,
	},
	{
		level: "Intermediate",
		subtitle: "Grades 10-11",
		description:
			"Deepen your understanding with similarity, coordinate geometry, and more sophisticated proof techniques. Connect algebra and geometry fluently.",
		topics: [
			"Similarity and proportions",
			"Right triangle trigonometry",
			"Circle theorems",
			"Coordinate proofs",
		],
		icon: BookOpen01Icon,
	},
	{
		level: "Advanced",
		subtitle: "Competition Prep",
		description:
			"Tackle the classic theorems and clever constructions that define competition geometry. Train your creative problem solving and pattern recognition.",
		topics: [
			"Power of a Point",
			"Ceva and Menelaus",
			"Radical axes",
			"Olympiad constructions",
		],
		icon: Copy01Icon,
	},
];

export const classicTheorems = [
	{
		name: "Power of a Point",
		application:
			"The Swiss Army knife of circle problems. Relates the products of segment lengths from a point to a circle.",
		appears: "AMC, AIME, and nearly every circle problem",
	},
	{
		name: "Ceva's Theorem",
		application:
			"Determines when three cevians of a triangle are concurrent. Essential for concurrency problems.",
		appears: "AIME, USAMO, and Olympiad geometry",
	},
	{
		name: "Menelaus' Theorem",
		application:
			"The collinearity counterpart to Ceva. Determines when three points on a triangle's sides are collinear.",
		appears: "AIME, competition proof problems",
	},
	{
		name: "Ptolemy's Theorem",
		application:
			"Connects the sides and diagonals of a cyclic quadrilateral. A bridge between geometry and algebra.",
		appears: "AMC 12, AIME, and number theory crossover",
	},
	{
		name: "Radical Axes",
		application:
			"The locus of points with equal power to two circles. Unifies seemingly unrelated circle configurations.",
		appears: "AIME, USAMO, and advanced problems",
	},
];

export const sampleQuestions = [
	"Why does the inscribed angle theorem work?",
	"How do I know which congruence shortcut to use?",
	"Walk me through proving two triangles are similar",
	"What is Power of a Point and when should I use it?",
	"How do I find the center of a circle with a compass?",
	"Why do the altitudes of a triangle always meet at one point?",
	"Help me write a two-column proof for this problem",
	"What auxiliary line should I draw here?",
];

export const visualFeatures = [
	{
		title: "Snap a photo, get an interactive diagram back",
		icon: Camera01Icon,
	},
	{
		title: "See theorems derived visually, not just stated",
		icon: EyeIcon,
	},
	{
		title: "Explore constructions step by step with Newton",
		icon: Pen01Icon,
	},
	{
		title: "Watch how transformations reshape figures in real time",
		icon: LayerIcon,
	},
];

export const conceptMapFeatures = [
	"Visual map of every geometry concept and its prerequisites",
	"Real-time progress tracking shows what you have mastered",
	"Adaptive recommendations guide your next steps",
	"See how algebra, trigonometry, and geometry intersect",
];
