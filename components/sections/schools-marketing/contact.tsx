"use client";

import {
	ArrowRight02Icon,
	Call02Icon,
	Location01Icon,
	Mail02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@/components/ui/button";

export function Contact() {
	return (
		<section id="contact" className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
					<div>
						<h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
							Get in Touch
						</h2>
						<p className="mb-8 text-lg text-muted-foreground">
							Ready to see how Zomath can work for your school? Our team is here
							to answer questions and help you find the right path forward.
						</p>
						<div className="space-y-5">
							<div className="flex items-center gap-4">
								<div className="flex size-11 items-center justify-center rounded-full bg-primary/10">
									<HugeiconsIcon
										icon={Mail02Icon}
										className="size-5 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<div>
									<div className="text-sm font-medium text-muted-foreground">
										Email
									</div>
									<div className="font-medium text-foreground">
										schools@zomath.com
									</div>
								</div>
							</div>
							<div className="flex items-center gap-4">
								<div className="flex size-11 items-center justify-center rounded-full bg-primary/10">
									<HugeiconsIcon
										icon={Call02Icon}
										className="size-5 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<div>
									<div className="text-sm font-medium text-muted-foreground">
										Phone
									</div>
									<div className="font-medium text-foreground">
										(555) 123-4567
									</div>
								</div>
							</div>
							<div className="flex items-center gap-4">
								<div className="flex size-11 items-center justify-center rounded-full bg-primary/10">
									<HugeiconsIcon
										icon={Location01Icon}
										className="size-5 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<div>
									<div className="text-sm font-medium text-muted-foreground">
										Office
									</div>
									<div className="font-medium text-foreground">
										San Francisco, CA
									</div>
								</div>
							</div>
						</div>
						<div className="mt-8 rounded-xl border bg-muted/50 p-5">
							<h3 className="mb-2 font-semibold text-foreground">
								Prefer a quick call?
							</h3>
							<p className="text-sm text-muted-foreground mb-3">
								Schedule a 15-minute intro call with our school partnerships
								team. No pressure, just a conversation about your needs.
							</p>
							<Button variant="outline" size="sm" className="gap-2">
								Book a Call
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-3.5"
									strokeWidth={1.5}
								/>
							</Button>
						</div>
					</div>
					<div className="rounded-xl border bg-muted/50 p-6 lg:p-8">
						<h3 className="mb-6 text-xl font-semibold text-foreground">
							Request a Demo
						</h3>
						<form className="space-y-4">
							<div className="grid gap-4 sm:grid-cols-2">
								<div>
									<label className="mb-2 block text-sm font-medium text-foreground">
										First Name
									</label>
									<input
										type="text"
										className="w-full rounded-lg border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
										placeholder="Jane"
									/>
								</div>
								<div>
									<label className="mb-2 block text-sm font-medium text-foreground">
										Last Name
									</label>
									<input
										type="text"
										className="w-full rounded-lg border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
										placeholder="Smith"
									/>
								</div>
							</div>
							<div>
								<label className="mb-2 block text-sm font-medium text-foreground">
									Work Email
								</label>
								<input
									type="email"
									className="w-full rounded-lg border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
									placeholder="jane.smith@school.edu"
								/>
							</div>
							<div>
								<label className="mb-2 block text-sm font-medium text-foreground">
									School or District
								</label>
								<input
									type="text"
									className="w-full rounded-lg border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
									placeholder="Lincoln High School"
								/>
							</div>
							<div className="grid gap-4 sm:grid-cols-2">
								<div>
									<label className="mb-2 block text-sm font-medium text-foreground">
										Role
									</label>
									<select className="w-full rounded-lg border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
										<option value="">Select your role</option>
										<option value="teacher">Teacher</option>
										<option value="department-chair">Department Chair</option>
										<option value="principal">Principal / Administrator</option>
										<option value="district">District Administrator</option>
										<option value="instructional-coach">
											Instructional Coach
										</option>
										<option value="other">Other</option>
									</select>
								</div>
								<div>
									<label className="mb-2 block text-sm font-medium text-foreground">
										Student Count
									</label>
									<select className="w-full rounded-lg border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
										<option value="">Select range</option>
										<option value="1-100">1 to 100</option>
										<option value="100-500">100 to 500</option>
										<option value="500-1000">500 to 1,000</option>
										<option value="1000+">1,000+</option>
									</select>
								</div>
							</div>
							<div>
								<label className="mb-2 block text-sm font-medium text-foreground">
									Anything else you would like us to know?
								</label>
								<textarea
									rows={3}
									className="w-full rounded-lg border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
									placeholder="Tell us about your school's needs, timeline, or any questions you have..."
								/>
							</div>
							<Button type="submit" className="w-full" size="lg">
								Request Demo
							</Button>
							<p className="text-xs text-muted-foreground text-center">
								We typically respond within one business day. No spam, ever.
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
