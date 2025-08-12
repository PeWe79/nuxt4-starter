<template>
	<main class="min-h-[calc(100vh-var(--ui-header-height))] relative">
		<svg viewBox="0 0 1440 181" fill="none" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none absolute w-full -top-px transition-all text-primary shrink-0 -z-10 opacity-70 -z-10 duration-[400ms]">
			<mask id="path-1-inside-1_414_5526" fill="white"><path d="M0 0H1440V181H0V0Z"></path></mask>
			<path d="M0 0H1440V181H0V0Z" fill="url(#paint0_linear_414_5526)" fill-opacity="0.22"></path>
			<path d="M0 2H1440V-2H0V2Z" fill="url(#paint1_linear_414_5526)" mask="url(#path-1-inside-1_414_5526)"></path>
			<defs>
				<linearGradient id="paint0_linear_414_5526" x1="720" y1="0" x2="720" y2="181" gradientUnits="userSpaceOnUse">
					<stop stop-color="currentColor"></stop>
					<stop offset="1" stop-color="currentColor" stop-opacity="0"></stop>
				</linearGradient>
				<linearGradient id="paint1_linear_414_5526" x1="0" y1="90.5" x2="1440" y2="90.5" gradientUnits="userSpaceOnUse">
					<stop stop-color="currentColor" stop-opacity="0"></stop>
					<stop offset="0.395" stop-color="currentColor"></stop>
					<stop offset="1" stop-color="currentColor" stop-opacity="0"></stop>
				</linearGradient>
			</defs>
		</svg>

		<div class="w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8">
			<div data-orientation="horizontal" class="relative isolate">
				<div class="w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:grid gap-16 sm:gap-y-24 py-10 sm:py-20 lg:py-20 lg:grid-cols-2 lg:items-center">
					<div class="">
						<div class="">
							<h1 class="text-5xl text-pretty tracking-tight font-bold text-highlighted sm:text-5xl">The Nuxt Blog</h1>
							<div class="text-lg sm:text-xl/8 text-muted text-pretty mt-6">
								Read the latest news about all Nuxt solutions, from framework announcements to integration tutorials.
								<a href="/blog/rss.xml" rel="noopener noreferrer" target="_blank" class="rounded-md font-medium inline-flex items-center disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75 transition-colors px-2 py-1 text-xs gap-1 ring ring-inset ring-accented text-default bg-elevated hover:bg-accented/75 active:bg-accented/75 disabled:bg-elevated aria-disabled:bg-elevated focus:outline-none focus-visible:ring-2 focus-visible:ring-inverted">
									<UIcon name="i-lucide:rss" class="shrink-0 size-4" aria-hidden="true" /> RSS
								</a>
							</div>
						</div>

						<div class="mt-10">
							<div class="flex flex-wrap gap-x-6 gap-y-3">
								<form id="v-0-0-4-0" class="flex-1 max-w-xs">
									<div class="text-sm">
										<div class="">
											<div class="flex content-center items-center justify-between">
												<label for="v-0-0-4-1" class="block text-default font-semibold">Subscribe to our newsletter</label>
											</div>
											<p id="v-0-0-4-1-description" class="text-muted">Stay updated on new releases and features, guides, and community updates.</p>
										</div>
										<div class="relative mt-3">
											<div class="relative inline-flex items-center max-w-sm w-full">
												<input id="v-0-0-4-1" type="email" name="email" placeholder="you@domain.com" class="w-full rounded-md border-0 placeholder:text-dimmed focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors px-3 py-2 text-sm gap-2 text-highlighted bg-default ring ring-inset ring-accented focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary pe-10" autocomplete="off" aria-invalid="false" aria-describedby="v-0-0-4-1-description" value="" />
												<span class="absolute inset-y-0 end-0 flex items-center pe-3">
													<button type="submit" class="rounded-md font-medium inline-flex items-center disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75 transition-colors px-2 py-1 text-xs gap-1 text-inverted bg-inverted hover:bg-inverted/90 active:bg-inverted/90 disabled:bg-inverted aria-disabled:bg-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-inverted">
														<span class="truncate">Subscribe</span>
													</button>
												</span>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div class="hidden lg:block"></div>
				</div>
			</div>

			<div class="mt-8 pb-24 space-y-12">
				<div class="w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8">
					<div data-orientation="horizontal" class="flex flex-col gap-8 lg:gap-y-16 sm:grid sm:grid-cols-2 mb-12 md:grid-cols-2 lg:grid-cols-3">
						<article data-orientation="horizontal" class="relative group/blog-post flex flex-col rounded-lg overflow-hidden lg:grid lg:grid-cols-2 lg:items-center gap-x-8 bg-default ring ring-default transition hover:bg-elevated/50 col-span-full">
							<div class="relative overflow-hidden aspect-[16/9] w-full pointer-events-none">
								<img width="672" height="378" alt="Nuxt 3.18 image" data-nuxt-img="" srcset="/assets/blog/v3.18.png 1x, /assets/blog/v3.18.png 2x" class="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover/blog-post:scale-110" src="/assets/blog/v3.18.png" />
							</div>
							<div class="min-w-0 flex-1 flex flex-col justify-center p-4 sm:p-6 lg:px-0">
								<a href="/blog/v3-18" tabindex="-1" aria-label="Nuxt 3.18" class="focus:outline-none peer">
									<span class="absolute inset-0" aria-hidden="true"></span>
								</a>
								<div class="flex items-center gap-2 mb-2">
									<span class="font-medium inline-flex items-center text-xs px-2 py-1 gap-1 rounded-md bg-primary/10 text-primary ring ring-inset ring-primary/25">
										<span class="truncate">Release</span>
									</span>
									<time datetime="2025-07-27T17:00:00.000Z" class="text-sm text-toned">Jul 28, 2025</time>
								</div>
								<h2 class="text-xl text-pretty font-semibold text-highlighted">Nuxt 3.18</h2>
								<div class="mt-1 text-base text-pretty text-muted">Nuxt 3.18 is out - bringing v4 features to v3, improved accessibility, better browser dev tooling integration, and performance enhancements!</div>
								<div class="pt-4 mt-auto flex flex-wrap gap-x-3 gap-y-1.5">
									<div data-orientation="horizontal" class="relative group/user flex items-center gap-2">
										<span class="inline-flex items-center justify-center select-none rounded-full align-middle bg-elevated size-8 text-base shrink-0 transform transition-transform duration-200 group-hover/user:scale-115">
											<img width="32" height="32" alt="Daniel Roe avatar" data-nuxt-img="" srcset="https://github.com/danielroe.png 1x, https://github.com/danielroe.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/danielroe.png" />
										</span>
										<div class="">
											<a href="https://bsky.app/profile/danielroe.dev" tabindex="-1" rel="noopener noreferrer" aria-label="Daniel Roe" class="focus:outline-none peer"> <span class="absolute inset-0" aria-hidden="true"></span></a>
											<p class="font-medium text-default peer-hover:text-highlighted transition-colors text-sm">Daniel Roe</p>
										</div>
									</div>
								</div>
							</div>
						</article>

						<article data-orientation="vertical" class="relative group/blog-post rounded-lg overflow-hidden flex flex-col bg-elevated/50 ring ring-default transition hover:bg-elevated hover:ring-accented">
							<div class="relative overflow-hidden aspect-[16/9] w-full pointer-events-none">
								<img width="437" height="246" alt="Announcing Nuxt 4.0 image" data-nuxt-img="" srcset="/assets/blog/v4.png 1x, /assets/blog/v4.png 2x" class="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover/blog-post:scale-110" src="/assets/blog/v4.png" />
							</div>
							<div class="min-w-0 flex-1 flex flex-col p-4 sm:p-6">
								<a href="/blog/v4" tabindex="-1" aria-label="Announcing Nuxt 4.0" class="focus:outline-none peer">
									<span class="absolute inset-0" aria-hidden="true"></span>
								</a>
								<div class="flex items-center gap-2 mb-2">
									<span class="font-medium inline-flex items-center text-xs px-2 py-1 gap-1 rounded-md bg-primary/10 text-primary ring ring-inset ring-primary/25">
										<span class="truncate">Release</span>
									</span>
									<time datetime="2025-07-14T17:00:00.000Z" class="text-sm text-muted">Jul 15, 2025</time>
								</div>
								<h2 class="text-xl text-pretty font-semibold text-highlighted">Announcing Nuxt 4.0</h2>
								<div class="mt-1 text-base text-pretty text-toned">Nuxt 4.0 is here! A thoughtful evolution focused on developer experience, with better project organization, smarter data fetching, and improved type safety.</div>
								<div class="pt-4 mt-auto flex flex-wrap gap-x-3 gap-y-1.5">
									<div data-orientation="horizontal" class="relative group/user flex items-center gap-2">
										<span class="inline-flex items-center justify-center select-none rounded-full align-middle bg-elevated size-8 text-base shrink-0 transform transition-transform duration-200 group-hover/user:scale-115">
											<img width="32" height="32" alt="Daniel Roe avatar" data-nuxt-img="" srcset="https://github.com/danielroe.png 1x, https://github.com/danielroe.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/danielroe.png" />
										</span>
										<div class="">
											<a href="https://bsky.app/profile/danielroe.dev" tabindex="-1" rel="noopener noreferrer" aria-label="Daniel Roe" class="focus:outline-none peer">
												<span class="absolute inset-0" aria-hidden="true"></span>
											</a>
											<p class="font-medium text-default peer-hover:text-highlighted transition-colors text-sm">Daniel Roe</p>
										</div>
									</div>
								</div>
							</div>
						</article>

						<article data-orientation="vertical" class="relative group/blog-post rounded-lg overflow-hidden flex flex-col bg-elevated/50 ring ring-default transition hover:bg-elevated hover:ring-accented">
							<div class="relative overflow-hidden aspect-[16/9] w-full pointer-events-none">
								<img width="437" height="246" alt="Building a Privacy-First Feedback Widget image" data-nuxt-img="" srcset="/assets/blog/gathering-feedback.png 1x, /assets/blog/gathering-feedback.png 2x" class="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover/blog-post:scale-110" src="/assets/blog/gathering-feedback.png" />
							</div>
							<div class="min-w-0 flex-1 flex flex-col p-4 sm:p-6">
								<a href="/blog/building-a-feedback-widget" tabindex="-1" aria-label="Building a Privacy-First Feedback Widget" class="focus:outline-none peer">
									<span class="absolute inset-0" aria-hidden="true"></span>
								</a>
								<div class="flex items-center gap-2 mb-2">
									<span class="font-medium inline-flex items-center text-xs px-2 py-1 gap-1 rounded-md bg-primary/10 text-primary ring ring-inset ring-primary/25">
										<span class="truncate">Article</span>
									</span>
									<time datetime="2025-06-12T17:00:00.000Z" class="text-sm text-muted">Jun 13, 2025</time>
								</div>
								<h2 class="text-xl text-pretty font-semibold text-highlighted">Building a Privacy-First Feedback Widget</h2>
								<div class="mt-1 text-base text-pretty text-toned">A lightweight, privacy-focused widget to gather your feedback on Nuxt documentation, built with Drizzle, NuxtHub database and Motion Vue.</div>
								<div class="pt-4 mt-auto flex flex-wrap gap-x-3 gap-y-1.5">
									<div class="inline-flex flex-row-reverse justify-end">
										<a href="https://x.com/Atinux" rel="noopener noreferrer" class="transform transition-transform duration-200 hover:scale-115 relative rounded-full ring-bg first:me-0 ring-2 -me-1.5">
											<span class="inline-flex items-center justify-center shrink-0 select-none rounded-full align-middle bg-elevated size-8 text-base">
												<img width="32" height="32" alt="Sébastien Chopin avatar" data-nuxt-img="" srcset="https://github.com/Atinux.png 1x, https://github.com/Atinux.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/Atinux.png" />
											</span>
										</a>
										<a href="https://x.com/hugorcd__" rel="noopener noreferrer" class="transform transition-transform duration-200 hover:scale-115 relative rounded-full ring-bg first:me-0 ring-2 -me-1.5">
											<span class="inline-flex items-center justify-center shrink-0 select-none rounded-full align-middle bg-elevated size-8 text-base">
												<img width="32" height="32" alt="Hugo Richard avatar" data-nuxt-img="" srcset="https://github.com/hugorcd.png 1x, https://github.com/hugorcd.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/hugorcd.png" />
											</span>
										</a>
									</div>
								</div>
							</div>
						</article>

						<article data-orientation="vertical" class="relative group/blog-post rounded-lg overflow-hidden flex flex-col bg-elevated/50 ring ring-default transition hover:bg-elevated hover:ring-accented">
							<div class="relative overflow-hidden aspect-[16/9] w-full pointer-events-none">
								<img width="437" height="246" alt="Roadmap to v4 image" data-nuxt-img="" srcset="/assets/blog/roadmap-v4.png 1x, /assets/blog/roadmap-v4.png 2x" class="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover/blog-post:scale-110" src="/assets/blog/roadmap-v4.png" />
							</div>
							<div class="min-w-0 flex-1 flex flex-col p-4 sm:p-6">
								<a href="/blog/roadmap-v4" tabindex="-1" aria-label="Roadmap to v4" class="focus:outline-none peer">
									<span class="absolute inset-0" aria-hidden="true"></span>
								</a>
								<div class="flex items-center gap-2 mb-2">
									<span class="font-medium inline-flex items-center text-xs px-2 py-1 gap-1 rounded-md bg-primary/10 text-primary ring ring-inset ring-primary/25">
										<span class="truncate">Release</span>
									</span>
									<time datetime="2025-06-01T17:00:00.000Z" class="text-sm text-muted">Jun 2, 2025</time>
								</div>
								<h2 class="text-xl text-pretty font-semibold text-highlighted">Roadmap to v4</h2>
								<div class="mt-1 text-base text-pretty text-toned">We have some exciting news about the roadmap to Nuxt 4, including a new timeline and what to expect in the next few weeks.</div>
								<div class="pt-4 mt-auto flex flex-wrap gap-x-3 gap-y-1.5">
									<div data-orientation="horizontal" class="relative group/user flex items-center gap-2">
										<span class="inline-flex items-center justify-center select-none rounded-full align-middle bg-elevated size-8 text-base shrink-0 transform transition-transform duration-200 group-hover/user:scale-115">
											<img width="32" height="32" alt="Daniel Roe avatar" data-nuxt-img="" srcset="https://github.com/danielroe.png 1x, https://github.com/danielroe.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/danielroe.png" />
										</span>
										<div class="">
											<a href="https://bsky.app/profile/danielroe.dev" tabindex="-1" rel="noopener noreferrer" aria-label="Daniel Roe" class="focus:outline-none peer">
												<span class="absolute inset-0" aria-hidden="true"></span>
											</a>
											<p class="font-medium text-default peer-hover:text-highlighted transition-colors text-sm">Daniel Roe</p>
										</div>
									</div>
								</div>
							</div>
						</article>

						<article data-orientation="vertical" class="relative group/blog-post rounded-lg overflow-hidden flex flex-col bg-elevated/50 ring ring-default transition hover:bg-elevated hover:ring-accented">
							<div class="relative overflow-hidden aspect-[16/9] w-full pointer-events-none">
								<img width="437" height="246" alt="Nuxt 3.17 image" data-nuxt-img="" srcset="/assets/blog/v3.17.png 1x, /assets/blog/v3.17.png 2x" class="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover/blog-post:scale-110" src="/assets/blog/v3.17.png" />
							</div>
							<div class="min-w-0 flex-1 flex flex-col p-4 sm:p-6">
								<a href="/blog/v3-17" tabindex="-1" aria-label="Nuxt 3.17" class="focus:outline-none peer">
									<span class="absolute inset-0" aria-hidden="true"></span>
								</a>
								<div class="flex items-center gap-2 mb-2">
									<span class="font-medium inline-flex items-center text-xs px-2 py-1 gap-1 rounded-md bg-primary/10 text-primary ring ring-inset ring-primary/25"><span class="truncate">Release</span></span>
									<time datetime="2025-04-26T17:00:00.000Z" class="text-sm text-muted">Apr 27, 2025</time>
								</div>
								<h2 class="text-xl text-pretty font-semibold text-highlighted">Nuxt 3.17</h2>
								<div class="mt-1 text-base text-pretty text-toned">Nuxt 3.17 is out - bringing a major reworking of the async data layer, a new built-in component, better warnings, and performance improvements!</div>
								<div class="pt-4 mt-auto flex flex-wrap gap-x-3 gap-y-1.5">
									<div data-orientation="horizontal" class="relative group/user flex items-center gap-2">
										<span class="inline-flex items-center justify-center select-none rounded-full align-middle bg-elevated size-8 text-base shrink-0 transform transition-transform duration-200 group-hover/user:scale-115"> <img width="32" height="32" alt="Daniel Roe avatar" data-nuxt-img="" srcset="https://github.com/danielroe.png 1x, https://github.com/danielroe.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/danielroe.png" /></span>
										<div class="">
											<a href="https://bsky.app/profile/danielroe.dev" tabindex="-1" rel="noopener noreferrer" aria-label="Daniel Roe" class="focus:outline-none peer">
												<span class="absolute inset-0" aria-hidden="true"></span>
											</a>
											<p class="font-medium text-default peer-hover:text-highlighted transition-colors text-sm">Daniel Roe</p>
										</div>
									</div>
								</div>
							</div>
						</article>

						<article data-orientation="vertical" class="relative group/blog-post rounded-lg overflow-hidden flex flex-col bg-elevated/50 ring ring-default transition hover:bg-elevated hover:ring-accented">
							<div class="relative overflow-hidden aspect-[16/9] w-full pointer-events-none">
								<img width="437" height="246" alt="Nuxt UI v3 image" data-nuxt-img="" srcset="/assets/blog/nuxt-ui-v3.png 1x, /assets/blog/nuxt-ui-v3.png 2x" class="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover/blog-post:scale-110" src="/assets/blog/nuxt-ui-v3.png" />
							</div>
							<div class="min-w-0 flex-1 flex flex-col p-4 sm:p-6">
								<a href="/blog/nuxt-ui-v3" tabindex="-1" aria-label="Nuxt UI v3" class="focus:outline-none peer">
									<span class="absolute inset-0" aria-hidden="true"></span>
								</a>
								<div class="flex items-center gap-2 mb-2">
									<span class="font-medium inline-flex items-center text-xs px-2 py-1 gap-1 rounded-md bg-primary/10 text-primary ring ring-inset ring-primary/25">
										<span class="truncate">Release</span>
									</span>
									<time datetime="2025-03-11T17:00:00.000Z" class="text-sm text-muted">Mar 12, 2025</time>
								</div>
								<h2 class="text-xl text-pretty font-semibold text-highlighted">Nuxt UI v3</h2>
								<div class="mt-1 text-base text-pretty text-toned">Nuxt UI v3 is out! After 1500+ commits, this major redesign brings improved accessibility, Tailwind CSS v4 support, and full Vue compatibility</div>
								<div class="pt-4 mt-auto flex flex-wrap gap-x-3 gap-y-1.5">
									<div class="inline-flex flex-row-reverse justify-end">
										<a href="https://x.com/hugorcd__" rel="noopener noreferrer" class="transform transition-transform duration-200 hover:scale-115 relative rounded-full ring-bg first:me-0 ring-2 -me-1.5">
											<span class="inline-flex items-center justify-center shrink-0 select-none rounded-full align-middle bg-elevated size-8 text-base">
												<img width="32" height="32" alt="Hugo Richard avatar" data-nuxt-img="" srcset="https://github.com/hugorcd.png 1x, https://github.com/hugorcd.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/hugorcd.png" />
											</span>
										</a>
										<a href="https://x.com/atinux" rel="noopener noreferrer" class="transform transition-transform duration-200 hover:scale-115 relative rounded-full ring-bg first:me-0 ring-2 -me-1.5">
											<span class="inline-flex items-center justify-center shrink-0 select-none rounded-full align-middle bg-elevated size-8 text-base">
												<img width="32" height="32" alt="Sébastien Chopin avatar" data-nuxt-img="" srcset="https://github.com/atinux.png 1x, https://github.com/atinux.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/atinux.png" />
											</span>
										</a>
										<a href="https://x.com/benjamincanac" rel="noopener noreferrer" class="transform transition-transform duration-200 hover:scale-115 relative rounded-full ring-bg first:me-0 ring-2 -me-1.5">
											<span class="inline-flex items-center justify-center shrink-0 select-none rounded-full align-middle bg-elevated size-8 text-base">
												<img width="32" height="32" alt="Benjamin Canac avatar" data-nuxt-img="" srcset="https://github.com/benjamincanac.png 1x, https://github.com/benjamincanac.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/benjamincanac.png" />
											</span>
										</a>
									</div>
								</div>
							</div>
						</article>

						<article data-orientation="vertical" class="relative group/blog-post rounded-lg overflow-hidden flex flex-col bg-elevated/50 ring ring-default transition hover:bg-elevated hover:ring-accented">
							<div class="relative overflow-hidden aspect-[16/9] w-full pointer-events-none">
								<img width="437" height="246" alt="Nuxt 3.16 image" data-nuxt-img="" srcset="/assets/blog/v3.16.png 1x, /assets/blog/v3.16.png 2x" class="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover/blog-post:scale-110" src="/assets/blog/v3.16.png" />
							</div>
							<div class="min-w-0 flex-1 flex flex-col p-4 sm:p-6">
								<a href="/blog/v3-16" tabindex="-1" aria-label="Nuxt 3.16" class="focus:outline-none peer">
									<span class="absolute inset-0" aria-hidden="true"></span>
								</a>
								<div class="flex items-center gap-2 mb-2">
									<span class="font-medium inline-flex items-center text-xs px-2 py-1 gap-1 rounded-md bg-primary/10 text-primary ring ring-inset ring-primary/25">
										<span class="truncate">Release</span>
									</span>
									<time datetime="2025-03-06T17:00:00.000Z" class="text-sm text-muted">Mar 7, 2025</time>
								</div>
								<h2 class="text-xl text-pretty font-semibold text-highlighted">Nuxt 3.16</h2>
								<div class="mt-1 text-base text-pretty text-toned">Nuxt 3.16 is out - packed with features and performance improvements</div>
								<div class="pt-4 mt-auto flex flex-wrap gap-x-3 gap-y-1.5">
									<div data-orientation="horizontal" class="relative group/user flex items-center gap-2">
										<span class="inline-flex items-center justify-center select-none rounded-full align-middle bg-elevated size-8 text-base shrink-0 transform transition-transform duration-200 group-hover/user:scale-115">
											<img width="32" height="32" alt="Daniel Roe avatar" data-nuxt-img="" srcset="https://github.com/danielroe.png 1x, https://github.com/danielroe.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/danielroe.png" />
										</span>
										<div class="">
											<a href="https://bsky.app/profile/danielroe.dev" tabindex="-1" rel="noopener noreferrer" aria-label="Daniel Roe" class="focus:outline-none peer">
												<span class="absolute inset-0" aria-hidden="true"></span>
											</a>
											<p class="font-medium text-default peer-hover:text-highlighted transition-colors text-sm">Daniel Roe</p>
										</div>
									</div>
								</div>
							</div>
						</article>

						<article data-orientation="vertical" class="relative group/blog-post rounded-lg overflow-hidden flex flex-col bg-elevated/50 ring ring-default transition hover:bg-elevated hover:ring-accented">
							<div class="relative overflow-hidden aspect-[16/9] w-full pointer-events-none">
								<img width="437" height="246" alt="Nuxt 3.15 image" data-nuxt-img="" srcset="/assets/blog/v3.15.png 1x, /assets/blog/v3.15.png 2x" class="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover/blog-post:scale-110" src="/assets/blog/v3.15.png" />
							</div>
							<div class="min-w-0 flex-1 flex flex-col p-4 sm:p-6">
								<a href="/blog/v3-15" tabindex="-1" aria-label="Nuxt 3.15" class="focus:outline-none peer">
									<span class="absolute inset-0" aria-hidden="true"></span>
								</a>
								<div class="flex items-center gap-2 mb-2">
									<span class="font-medium inline-flex items-center text-xs px-2 py-1 gap-1 rounded-md bg-primary/10 text-primary ring ring-inset ring-primary/25">
										<span class="truncate">Release</span>
									</span>
									<time datetime="2024-12-23T17:00:00.000Z" class="text-sm text-muted">Dec 24, 2024</time>
								</div>
								<h2 class="text-xl text-pretty font-semibold text-highlighted">Nuxt 3.15</h2>
								<div class="mt-1 text-base text-pretty text-toned">Nuxt 3.15 is out - with Vite 6, better HMR and faster performance</div>
								<div class="pt-4 mt-auto flex flex-wrap gap-x-3 gap-y-1.5">
									<div data-orientation="horizontal" class="relative group/user flex items-center gap-2">
										<span class="inline-flex items-center justify-center select-none rounded-full align-middle bg-elevated size-8 text-base shrink-0 transform transition-transform duration-200 group-hover/user:scale-115">
											<img width="32" height="32" alt="Daniel Roe avatar" data-nuxt-img="" srcset="https://github.com/danielroe.png 1x, https://github.com/danielroe.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/danielroe.png" />
										</span>
										<div class="">
											<a href="https://bsky.app/profile/danielroe.dev" tabindex="-1" rel="noopener noreferrer" aria-label="Daniel Roe" class="focus:outline-none peer">
												<span class="absolute inset-0" aria-hidden="true"></span>
											</a>
											<p class="font-medium text-default peer-hover:text-highlighted transition-colors text-sm">Daniel Roe</p>
										</div>
									</div>
								</div>
							</div>
						</article>

						<article data-orientation="vertical" class="relative group/blog-post rounded-lg overflow-hidden flex flex-col bg-elevated/50 ring ring-default transition hover:bg-elevated hover:ring-accented">
							<div class="relative overflow-hidden aspect-[16/9] w-full pointer-events-none">
								<img width="437" height="246" alt="Introducing Nuxt Icon v1 image" data-nuxt-img="" srcset="/assets/blog/nuxt-icon/cover.png 1x, /assets/blog/nuxt-icon/cover.png 2x" class="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover/blog-post:scale-110" src="/assets/blog/nuxt-icon/cover.png" />
							</div>
							<div class="min-w-0 flex-1 flex flex-col p-4 sm:p-6">
								<a href="/blog/nuxt-icon-v1-0" tabindex="-1" aria-label="Introducing Nuxt Icon v1" class="focus:outline-none peer">
									<span class="absolute inset-0" aria-hidden="true"></span>
								</a>
								<div class="flex items-center gap-2 mb-2">
									<span class="font-medium inline-flex items-center text-xs px-2 py-1 gap-1 rounded-md bg-primary/10 text-primary ring ring-inset ring-primary/25">
										<span class="truncate">Release</span>
									</span>
									<time datetime="2024-11-24T17:00:00.000Z" class="text-sm text-muted">Nov 25, 2024</time>
								</div>
								<h2 class="text-xl text-pretty font-semibold text-highlighted">Introducing Nuxt Icon v1</h2>
								<div class="mt-1 text-base text-pretty text-toned">Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects.</div>
								<div class="pt-4 mt-auto flex flex-wrap gap-x-3 gap-y-1.5">
									<div data-orientation="horizontal" class="relative group/user flex items-center gap-2">
										<span class="inline-flex items-center justify-center select-none rounded-full align-middle bg-elevated size-8 text-base shrink-0 transform transition-transform duration-200 group-hover/user:scale-115">
											<img width="32" height="32" alt="Anthony Fu avatar" data-nuxt-img="" srcset="https://github.com/antfu.png 1x, https://github.com/antfu.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/antfu.png" />
										</span>
										<div class="">
											<a href="https://github.com/antfu" tabindex="-1" rel="noopener noreferrer" aria-label="Anthony Fu" twitter="antfu7" class="focus:outline-none peer">
												<span class="absolute inset-0" aria-hidden="true"></span>
											</a>
											<p class="font-medium text-default peer-hover:text-highlighted transition-colors text-sm">Anthony Fu</p>
										</div>
									</div>
								</div>
							</div>
						</article>

						<article data-orientation="vertical" class="relative group/blog-post rounded-lg overflow-hidden flex flex-col bg-elevated/50 ring ring-default transition hover:bg-elevated hover:ring-accented">
							<div class="relative overflow-hidden aspect-[16/9] w-full pointer-events-none">
								<img width="437" height="246" alt="Nuxt 3.14 image" data-nuxt-img="" srcset="/assets/blog/v3.14.png 1x, /assets/blog/v3.14.png 2x" class="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover/blog-post:scale-110" src="/assets/blog/v3.14.png" />
							</div>
							<div class="min-w-0 flex-1 flex flex-col p-4 sm:p-6">
								<a href="/blog/v3-14" tabindex="-1" aria-label="Nuxt 3.14" class="focus:outline-none peer">
									<span class="absolute inset-0" aria-hidden="true"></span>
								</a>
								<div class="flex items-center gap-2 mb-2">
									<span class="font-medium inline-flex items-center text-xs px-2 py-1 gap-1 rounded-md bg-primary/10 text-primary ring ring-inset ring-primary/25">
										<span class="truncate">Release</span>
									</span>
									<time datetime="2024-11-03T17:00:00.000Z" class="text-sm text-muted">Nov 4, 2024</time>
								</div>
								<h2 class="text-xl text-pretty font-semibold text-highlighted">Nuxt 3.14</h2>
								<div class="mt-1 text-base text-pretty text-toned">Nuxt 3.14 is out - with a new rspack builder, shared folder, and performance enhancements!</div>
								<div class="pt-4 mt-auto flex flex-wrap gap-x-3 gap-y-1.5">
									<div data-orientation="horizontal" class="relative group/user flex items-center gap-2">
										<span class="inline-flex items-center justify-center select-none rounded-full align-middle bg-elevated size-8 text-base shrink-0 transform transition-transform duration-200 group-hover/user:scale-115">
											<img width="32" height="32" alt="Daniel Roe avatar" data-nuxt-img="" srcset="https://github.com/danielroe.png 1x, https://github.com/danielroe.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/danielroe.png" />
										</span>
										<div class="">
											<a href="https://bsky.app/profile/danielroe.dev" tabindex="-1" rel="noopener noreferrer" aria-label="Daniel Roe" class="focus:outline-none peer">
												<span class="absolute inset-0" aria-hidden="true"></span>
											</a>
											<p class="font-medium text-default peer-hover:text-highlighted transition-colors text-sm">Daniel Roe</p>
										</div>
									</div>
								</div>
							</div>
						</article>

						<article data-orientation="vertical" class="relative group/blog-post rounded-lg overflow-hidden flex flex-col bg-elevated/50 ring ring-default transition hover:bg-elevated hover:ring-accented">
							<div class="relative overflow-hidden aspect-[16/9] w-full pointer-events-none">
								<img width="437" height="246" alt="Nuxt 3.13 image" data-nuxt-img="" srcset="/assets/blog/v3.13.png 1x, /assets/blog/v3.13.png 2x" class="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover/blog-post:scale-110" src="/assets/blog/v3.13.png" />
							</div>
							<div class="min-w-0 flex-1 flex flex-col p-4 sm:p-6">
								<a href="/blog/v3-13" tabindex="-1" aria-label="Nuxt 3.13" class="focus:outline-none peer">
									<span class="absolute inset-0" aria-hidden="true"></span>
								</a>
								<div class="flex items-center gap-2 mb-2">
									<span class="font-medium inline-flex items-center text-xs px-2 py-1 gap-1 rounded-md bg-primary/10 text-primary ring ring-inset ring-primary/25">
										<span class="truncate">Release</span>
									</span>
									<time datetime="2024-08-21T17:00:00.000Z" class="text-sm text-muted">Aug 22, 2024</time>
								</div>
								<h2 class="text-xl text-pretty font-semibold text-highlighted">Nuxt 3.13</h2>
								<div class="mt-1 text-base text-pretty text-toned">Nuxt 3.13 is out - porting back some of the new features we're building for Nuxt 4!</div>
								<div class="pt-4 mt-auto flex flex-wrap gap-x-3 gap-y-1.5">
									<div data-orientation="horizontal" class="relative group/user flex items-center gap-2">
										<span class="inline-flex items-center justify-center select-none rounded-full align-middle bg-elevated size-8 text-base shrink-0 transform transition-transform duration-200 group-hover/user:scale-115">
											<img width="32" height="32" alt="Daniel Roe avatar" data-nuxt-img="" srcset="https://github.com/danielroe.png 1x, https://github.com/danielroe.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/danielroe.png" />
										</span>
										<div class="">
											<a href="https://bsky.app/profile/danielroe.dev" tabindex="-1" rel="noopener noreferrer" aria-label="Daniel Roe" class="focus:outline-none peer">
												<span class="absolute inset-0" aria-hidden="true"></span>
											</a>
											<p class="font-medium text-default peer-hover:text-highlighted transition-colors text-sm">Daniel Roe</p>
										</div>
									</div>
								</div>
							</div>
						</article>

						<article data-orientation="vertical" class="relative group/blog-post rounded-lg overflow-hidden flex flex-col bg-elevated/50 ring ring-default transition hover:bg-elevated hover:ring-accented">
							<div class="relative overflow-hidden aspect-[16/9] w-full pointer-events-none">
								<img width="437" height="246" alt="Introducing Nuxt Scripts image" data-nuxt-img="" srcset="/assets/blog/nuxt-scripts/banner.png 1x, /assets/blog/nuxt-scripts/banner.png 2x" class="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover/blog-post:scale-110" src="/assets/blog/nuxt-scripts/banner.png" />
							</div>
							<div class="min-w-0 flex-1 flex flex-col p-4 sm:p-6">
								<a href="/blog/nuxt-scripts" tabindex="-1" aria-label="Introducing Nuxt Scripts" class="focus:outline-none peer">
									<span class="absolute inset-0" aria-hidden="true"></span>
								</a>
								<div class="flex items-center gap-2 mb-2">
									<span class="font-medium inline-flex items-center text-xs px-2 py-1 gap-1 rounded-md bg-primary/10 text-primary ring ring-inset ring-primary/25">
										<span class="truncate">Release</span>
									</span>
									<time datetime="2024-08-19T17:00:00.000Z" class="text-sm text-muted">Aug 20, 2024</time>
								</div>
								<h2 class="text-xl text-pretty font-semibold text-highlighted">Introducing Nuxt Scripts</h2>
								<div class="mt-1 text-base text-pretty text-toned">Nuxt Scripts provides better performance, privacy, security, and developer experience for third-party scripts.</div>
								<div class="pt-4 mt-auto flex flex-wrap gap-x-3 gap-y-1.5">
									<div data-orientation="horizontal" class="relative group/user flex items-center gap-2">
										<span class="inline-flex items-center justify-center select-none rounded-full align-middle bg-elevated size-8 text-base shrink-0 transform transition-transform duration-200 group-hover/user:scale-115">
											<img width="32" height="32" alt="Harlan Wilton avatar" data-nuxt-img="" srcset="https://github.com/harlan-zw.png 1x, https://github.com/harlan-zw.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/harlan-zw.png" />
										</span>
										<div class="">
											<a href="https://github.com/harlan-zw" tabindex="-1" rel="noopener noreferrer" aria-label="Harlan Wilton" twitter="harlan_zw" class="focus:outline-none peer">
												<span class="absolute inset-0" aria-hidden="true"></span>
											</a>
											<p class="font-medium text-default peer-hover:text-highlighted transition-colors text-sm">Harlan Wilton</p>
										</div>
									</div>
								</div>
							</div>
						</article>

						<article data-orientation="vertical" class="relative group/blog-post rounded-lg overflow-hidden flex flex-col bg-elevated/50 ring ring-default transition hover:bg-elevated hover:ring-accented">
							<div class="relative overflow-hidden aspect-[16/9] w-full pointer-events-none">
								<img width="437" height="246" alt="Nuxt 2 End-of-Life (EOL) image" data-nuxt-img="" srcset="/assets/blog/nuxt2-eol.png 1x, /assets/blog/nuxt2-eol.png 2x" class="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover/blog-post:scale-110" src="/assets/blog/nuxt2-eol.png" />
							</div>
							<div class="min-w-0 flex-1 flex flex-col p-4 sm:p-6">
								<a href="/blog/nuxt2-eol" tabindex="-1" aria-label="Nuxt 2 End-of-Life (EOL)" class="focus:outline-none peer">
									<span class="absolute inset-0" aria-hidden="true"></span>
								</a>
								<div class="flex items-center gap-2 mb-2">
									<span class="font-medium inline-flex items-center text-xs px-2 py-1 gap-1 rounded-md bg-primary/10 text-primary ring ring-inset ring-primary/25">
										<span class="truncate">Announcement</span>
									</span>
									<time datetime="2024-06-13T17:00:00.000Z" class="text-sm text-muted">Jun 14, 2024</time>
								</div>
								<h2 class="text-xl text-pretty font-semibold text-highlighted">Nuxt 2 End-of-Life (EOL)</h2>
								<div class="mt-1 text-base text-pretty text-toned">Nuxt 2 will reach End of Life (EOL) on June 30th, 2024. We've partnered with HeroDevs on offering Never-Ending Support (NES).</div>
								<div class="pt-4 mt-auto flex flex-wrap gap-x-3 gap-y-1.5">
									<div class="inline-flex flex-row-reverse justify-end">
										<a href="https://bsky.app/profile/danielroe.dev" rel="noopener noreferrer" class="transform transition-transform duration-200 hover:scale-115 relative rounded-full ring-bg first:me-0 ring-2 -me-1.5">
											<span class="inline-flex items-center justify-center shrink-0 select-none rounded-full align-middle bg-elevated size-8 text-base">
												<img width="32" height="32" alt="Daniel Roe avatar" data-nuxt-img="" srcset="https://github.com/danielroe.png 1x, https://github.com/danielroe.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/danielroe.png" />
											</span>
										</a>
										<a href="https://x.com/atinux" rel="noopener noreferrer" class="transform transition-transform duration-200 hover:scale-115 relative rounded-full ring-bg first:me-0 ring-2 -me-1.5">
											<span class="inline-flex items-center justify-center shrink-0 select-none rounded-full align-middle bg-elevated size-8 text-base">
												<img width="32" height="32" alt="Sébastien Chopin avatar" data-nuxt-img="" srcset="https://github.com/Atinux.png 1x, https://github.com/Atinux.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/Atinux.png" />
											</span>
										</a>
									</div>
								</div>
							</div>
						</article>

						<article data-orientation="vertical" class="relative group/blog-post rounded-lg overflow-hidden flex flex-col bg-elevated/50 ring ring-default transition hover:bg-elevated hover:ring-accented">
							<div class="relative overflow-hidden aspect-[16/9] w-full pointer-events-none">
								<img width="437" height="246" alt="Nuxt 3.12 image" data-nuxt-img="" srcset="/assets/blog/v3.12.png 1x, /assets/blog/v3.12.png 2x" class="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover/blog-post:scale-110" src="/assets/blog/v3.12.png" />
							</div>
							<div class="min-w-0 flex-1 flex flex-col p-4 sm:p-6">
								<a href="/blog/v3-12" tabindex="-1" aria-label="Nuxt 3.12" class="focus:outline-none peer">
									<span class="absolute inset-0" aria-hidden="true"></span>
								</a>
								<div class="flex items-center gap-2 mb-2">
									<span class="font-medium inline-flex items-center text-xs px-2 py-1 gap-1 rounded-md bg-primary/10 text-primary ring ring-inset ring-primary/25">
										<span class="truncate">Release</span>
									</span>
									<time datetime="2024-06-09T17:00:00.000Z" class="text-sm text-muted">Jun 10, 2024</time>
								</div>
								<h2 class="text-xl text-pretty font-semibold text-highlighted">Nuxt 3.12</h2>
								<div class="mt-1 text-base text-pretty text-toned">Nuxt 3.12 is out - full of improvements and preparing the way for Nuxt 4!</div>
								<div class="pt-4 mt-auto flex flex-wrap gap-x-3 gap-y-1.5">
									<div data-orientation="horizontal" class="relative group/user flex items-center gap-2">
										<span class="inline-flex items-center justify-center select-none rounded-full align-middle bg-elevated size-8 text-base shrink-0 transform transition-transform duration-200 group-hover/user:scale-115">
											<img width="32" height="32" alt="Daniel Roe avatar" data-nuxt-img="" srcset="https://github.com/danielroe.png 1x, https://github.com/danielroe.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/danielroe.png" />
										</span>
										<div class="">
											<a href="https://bsky.app/profile/danielroe.dev" tabindex="-1" rel="noopener noreferrer" aria-label="Daniel Roe" class="focus:outline-none peer">
												<span class="absolute inset-0" aria-hidden="true"></span>
											</a>
											<p class="font-medium text-default peer-hover:text-highlighted transition-colors text-sm">Daniel Roe</p>
										</div>
									</div>
								</div>
							</div>
						</article>

						<article data-orientation="vertical" class="relative group/blog-post rounded-lg overflow-hidden flex flex-col bg-elevated/50 ring ring-default transition hover:bg-elevated hover:ring-accented">
							<div class="relative overflow-hidden aspect-[16/9] w-full pointer-events-none">
								<img width="437" height="246" alt="Refreshed Nuxt ESLint Integrations image" data-nuxt-img="" srcset="/assets/blog/nuxt-eslint-refreshed.png 1x, /assets/blog/nuxt-eslint-refreshed.png 2x" class="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover/blog-post:scale-110" src="/assets/blog/nuxt-eslint-refreshed.png" />
							</div>
							<div class="min-w-0 flex-1 flex flex-col p-4 sm:p-6">
								<a href="/blog/eslint-module" tabindex="-1" aria-label="Refreshed Nuxt ESLint Integrations" class="focus:outline-none peer">
									<span class="absolute inset-0" aria-hidden="true"></span>
								</a>
								<div class="flex items-center gap-2 mb-2">
									<span class="font-medium inline-flex items-center text-xs px-2 py-1 gap-1 rounded-md bg-primary/10 text-primary ring ring-inset ring-primary/25">
										<span class="truncate">Article</span>
									</span>
									<time datetime="2024-04-09T17:00:00.000Z" class="text-sm text-muted">Apr 10, 2024</time>
								</div>
								<h2 class="text-xl text-pretty font-semibold text-highlighted">Refreshed Nuxt ESLint Integrations</h2>
								<div class="mt-1 text-base text-pretty text-toned">We revamped our ESLint integrations to support ESLint v9 with the flat config, as well as a new module with many more capabilities.</div>
								<div class="pt-4 mt-auto flex flex-wrap gap-x-3 gap-y-1.5">
									<div data-orientation="horizontal" class="relative group/user flex items-center gap-2">
										<span class="inline-flex items-center justify-center select-none rounded-full align-middle bg-elevated size-8 text-base shrink-0 transform transition-transform duration-200 group-hover/user:scale-115">
											<img width="32" height="32" alt="Anthony Fu avatar" data-nuxt-img="" srcset="https://github.com/antfu.png 1x, https://github.com/antfu.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/antfu.png" />
										</span>
										<div class="">
											<a href="https://github.com/antfu" tabindex="-1" rel="noopener noreferrer" aria-label="Anthony Fu" twitter="antfu7" class="focus:outline-none peer">
												<span class="absolute inset-0" aria-hidden="true"></span>
											</a>
											<p class="font-medium text-default peer-hover:text-highlighted transition-colors text-sm">Anthony Fu</p>
										</div>
									</div>
								</div>
							</div>
						</article>

						<article data-orientation="vertical" class="relative group/blog-post rounded-lg overflow-hidden flex flex-col bg-elevated/50 ring ring-default transition hover:bg-elevated hover:ring-accented">
							<div class="relative overflow-hidden aspect-[16/9] w-full pointer-events-none">
								<img width="437" height="246" alt="Nuxt: Looking forward image" data-nuxt-img="" srcset="/assets/blog/vision-for-2024.png 1x, /assets/blog/vision-for-2024.png 2x" class="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover/blog-post:scale-110" src="/assets/blog/vision-for-2024.png" />
							</div>
							<div class="min-w-0 flex-1 flex flex-col p-4 sm:p-6">
								<a href="/blog/looking-forward-2024" tabindex="-1" aria-label="Nuxt: Looking forward" class="focus:outline-none peer">
									<span class="absolute inset-0" aria-hidden="true"></span>
								</a>
								<div class="flex items-center gap-2 mb-2">
									<span class="font-medium inline-flex items-center text-xs px-2 py-1 gap-1 rounded-md bg-primary/10 text-primary ring ring-inset ring-primary/25">
										<span class="truncate">Release</span>
									</span>
									<time datetime="2024-03-27T17:00:00.000Z" class="text-sm text-muted">Mar 28, 2024</time>
								</div>
								<h2 class="text-xl text-pretty font-semibold text-highlighted">Nuxt: Looking forward</h2>
								<div class="mt-1 text-base text-pretty text-toned">A lot of things have happened for Nuxt over the last year. Sébastien and Daniel share their thoughts on what we've achieved, and where we're going next.</div>
								<div class="pt-4 mt-auto flex flex-wrap gap-x-3 gap-y-1.5">
									<div class="inline-flex flex-row-reverse justify-end">
										<a href="https://x.com/atinux" rel="noopener noreferrer" class="transform transition-transform duration-200 hover:scale-115 relative rounded-full ring-bg first:me-0 ring-2 -me-1.5">
											<span class="inline-flex items-center justify-center shrink-0 select-none rounded-full align-middle bg-elevated size-8 text-base">
												<img width="32" height="32" alt="Sébastien Chopin avatar" data-nuxt-img="" srcset="https://github.com/atinux.png 1x, https://github.com/atinux.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/atinux.png" />
											</span>
										</a>
										<a href="https://bsky.app/profile/danielroe.dev" rel="noopener noreferrer" class="transform transition-transform duration-200 hover:scale-115 relative rounded-full ring-bg first:me-0 ring-2 -me-1.5">
											<span class="inline-flex items-center justify-center shrink-0 select-none rounded-full align-middle bg-elevated size-8 text-base"> <img width="32" height="32" alt="Daniel Roe avatar" data-nuxt-img="" srcset="https://github.com/danielroe.png 1x, https://github.com/danielroe.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/danielroe.png" /> </span
										></a>
									</div>
								</div>
							</div>
						</article>

						<article data-orientation="vertical" class="relative group/blog-post rounded-lg overflow-hidden flex flex-col bg-elevated/50 ring ring-default transition hover:bg-elevated hover:ring-accented">
							<div class="relative overflow-hidden aspect-[16/9] w-full pointer-events-none">
								<img width="437" height="246" alt="Nuxt 3.11 image" data-nuxt-img="" srcset="/assets/blog/v3.11.png 1x, /assets/blog/v3.11.png 2x" class="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover/blog-post:scale-110" src="/assets/blog/v3.11.png" />
							</div>
							<div class="min-w-0 flex-1 flex flex-col p-4 sm:p-6">
								<a href="/blog/v3-11" tabindex="-1" aria-label="Nuxt 3.11" class="focus:outline-none peer">
									<span class="absolute inset-0" aria-hidden="true"></span>
								</a>
								<div class="flex items-center gap-2 mb-2">
									<span class="font-medium inline-flex items-center text-xs px-2 py-1 gap-1 rounded-md bg-primary/10 text-primary ring ring-inset ring-primary/25">
										<span class="truncate">Release</span>
									</span>
									<time datetime="2024-03-15T17:00:00.000Z" class="text-sm text-muted">Mar 16, 2024</time>
								</div>
								<h2 class="text-xl text-pretty font-semibold text-highlighted">Nuxt 3.11</h2>
								<div class="mt-1 text-base text-pretty text-toned">Nuxt 3.11 is out - with better logging, preview mode, server pages and much more!</div>
								<div class="pt-4 mt-auto flex flex-wrap gap-x-3 gap-y-1.5">
									<div data-orientation="horizontal" class="relative group/user flex items-center gap-2">
										<span class="inline-flex items-center justify-center select-none rounded-full align-middle bg-elevated size-8 text-base shrink-0 transform transition-transform duration-200 group-hover/user:scale-115">
											<img width="32" height="32" alt="Daniel Roe avatar" data-nuxt-img="" srcset="https://github.com/danielroe.png 1x, https://github.com/danielroe.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/danielroe.png" />
										</span>
										<div class="">
											<a href="https://bsky.app/profile/danielroe.dev" tabindex="-1" rel="noopener noreferrer" aria-label="Daniel Roe" class="focus:outline-none peer">
												<span class="absolute inset-0" aria-hidden="true"></span>
											</a>
											<p class="font-medium text-default peer-hover:text-highlighted transition-colors text-sm">Daniel Roe</p>
										</div>
									</div>
								</div>
							</div>
						</article>

						<article data-orientation="vertical" class="relative group/blog-post rounded-lg overflow-hidden flex flex-col bg-elevated/50 ring ring-default transition hover:bg-elevated hover:ring-accented">
							<div class="relative overflow-hidden aspect-[16/9] w-full pointer-events-none">
								<img width="437" height="246" alt="The Evolution of Shiki v1.0 image" data-nuxt-img="" srcset="/assets/blog/shiki-cover.png 1x, /assets/blog/shiki-cover.png 2x" class="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover/blog-post:scale-110" src="/assets/blog/shiki-cover.png" />
							</div>
							<div class="min-w-0 flex-1 flex flex-col p-4 sm:p-6">
								<a href="/blog/shiki-v1" tabindex="-1" aria-label="The Evolution of Shiki v1.0" class="focus:outline-none peer">
									<span class="absolute inset-0" aria-hidden="true"></span>
								</a>
								<div class="flex items-center gap-2 mb-2">
									<span class="font-medium inline-flex items-center text-xs px-2 py-1 gap-1 rounded-md bg-primary/10 text-primary ring ring-inset ring-primary/25">
										<span class="truncate">Article</span>
									</span>
									<time datetime="2024-03-10T17:00:00.000Z" class="text-sm text-muted">Mar 11, 2024</time>
								</div>
								<h2 class="text-xl text-pretty font-semibold text-highlighted">The Evolution of Shiki v1.0</h2>
								<div class="mt-1 text-base text-pretty text-toned">Shiki v1.0 came with many improvements and features - see how Nuxt drives the evolution of Shiki!</div>
								<div class="pt-4 mt-auto flex flex-wrap gap-x-3 gap-y-1.5">
									<div data-orientation="horizontal" class="relative group/user flex items-center gap-2">
										<span class="inline-flex items-center justify-center select-none rounded-full align-middle bg-elevated size-8 text-base shrink-0 transform transition-transform duration-200 group-hover/user:scale-115">
											<img width="32" height="32" alt="Anthony Fu avatar" data-nuxt-img="" srcset="https://github.com/antfu.png 1x, https://github.com/antfu.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/antfu.png" />
										</span>
										<div class="">
											<a href="https://github.com/antfu" tabindex="-1" rel="noopener noreferrer" aria-label="Anthony Fu" twitter="antfu7" class="focus:outline-none peer">
												<span class="absolute inset-0" aria-hidden="true"></span>
											</a>
											<p class="font-medium text-default peer-hover:text-highlighted transition-colors text-sm">Anthony Fu</p>
										</div>
									</div>
								</div>
							</div>
						</article>

						<article data-orientation="vertical" class="relative group/blog-post rounded-lg overflow-hidden flex flex-col bg-elevated/50 ring ring-default transition hover:bg-elevated hover:ring-accented">
							<div class="relative overflow-hidden aspect-[16/9] w-full pointer-events-none">
								<img width="437" height="246" alt="Nuxt 3.10 image" data-nuxt-img="" srcset="/assets/blog/v3.10.png 1x, /assets/blog/v3.10.png 2x" class="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover/blog-post:scale-110" src="/assets/blog/v3.10.png" />
							</div>
							<div class="min-w-0 flex-1 flex flex-col p-4 sm:p-6">
								<a href="/blog/v3-10" tabindex="-1" aria-label="Nuxt 3.10" class="focus:outline-none peer">
									<span class="absolute inset-0" aria-hidden="true"></span>
								</a>
								<div class="flex items-center gap-2 mb-2">
									<span class="font-medium inline-flex items-center text-xs px-2 py-1 gap-1 rounded-md bg-primary/10 text-primary ring ring-inset ring-primary/25">
										<span class="truncate">Release</span>
									</span>
									<time datetime="2024-01-29T17:00:00.000Z" class="text-sm text-muted">Jan 30, 2024</time>
								</div>
								<h2 class="text-xl text-pretty font-semibold text-highlighted">Nuxt 3.10</h2>
								<div class="mt-1 text-base text-pretty text-toned">Nuxt 3.10 is out - packed with features and fixes. Here are a few highlights.</div>
								<div class="pt-4 mt-auto flex flex-wrap gap-x-3 gap-y-1.5">
									<div data-orientation="horizontal" class="relative group/user flex items-center gap-2">
										<span class="inline-flex items-center justify-center select-none rounded-full align-middle bg-elevated size-8 text-base shrink-0 transform transition-transform duration-200 group-hover/user:scale-115">
											<img width="32" height="32" alt="Daniel Roe avatar" data-nuxt-img="" srcset="https://github.com/danielroe.png 1x, https://github.com/danielroe.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/danielroe.png" />
										</span>
										<div class="">
											<a href="https://bsky.app/profile/danielroe.dev" tabindex="-1" rel="noopener noreferrer" aria-label="Daniel Roe" class="focus:outline-none peer">
												<span class="absolute inset-0" aria-hidden="true"></span>
											</a>
											<p class="font-medium text-default peer-hover:text-highlighted transition-colors text-sm">Daniel Roe</p>
										</div>
									</div>
								</div>
							</div>
						</article>

						<article data-orientation="vertical" class="relative group/blog-post rounded-lg overflow-hidden flex flex-col bg-elevated/50 ring ring-default transition hover:bg-elevated hover:ring-accented">
							<div class="relative overflow-hidden aspect-[16/9] w-full pointer-events-none">
								<img width="437" height="246" alt="Nuxt 3.9 image" data-nuxt-img="" srcset="/assets/blog/v3.9.png 1x, /assets/blog/v3.9.png 2x" class="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover/blog-post:scale-110" src="/assets/blog/v3.9.png" />
							</div>
							<div class="min-w-0 flex-1 flex flex-col p-4 sm:p-6">
								<a href="/blog/v3-9" tabindex="-1" aria-label="Nuxt 3.9" class="focus:outline-none peer">
									<span class="absolute inset-0" aria-hidden="true"></span>
								</a>
								<div class="flex items-center gap-2 mb-2">
									<span class="font-medium inline-flex items-center text-xs px-2 py-1 gap-1 rounded-md bg-primary/10 text-primary ring ring-inset ring-primary/25">
										<span class="truncate">Release</span>
									</span>
									<time datetime="2023-12-24T17:00:00.000Z" class="text-sm text-muted">Dec 25, 2023</time>
								</div>
								<h2 class="text-xl text-pretty font-semibold text-highlighted">Nuxt 3.9</h2>
								<div class="mt-1 text-base text-pretty text-toned">Nuxt 3.9 is out - a Christmas gift from the Nuxt team bringing Vite 5, interactive server components, new composables, a new loading API and more.</div>
								<div class="pt-4 mt-auto flex flex-wrap gap-x-3 gap-y-1.5">
									<div data-orientation="horizontal" class="relative group/user flex items-center gap-2">
										<span class="inline-flex items-center justify-center select-none rounded-full align-middle bg-elevated size-8 text-base shrink-0 transform transition-transform duration-200 group-hover/user:scale-115">
											<img width="32" height="32" alt="Daniel Roe avatar" data-nuxt-img="" srcset="https://github.com/danielroe.png 1x, https://github.com/danielroe.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/danielroe.png" />
										</span>
										<div class="">
											<a href="https://bsky.app/profile/danielroe.dev" tabindex="-1" rel="noopener noreferrer" aria-label="Daniel Roe" class="focus:outline-none peer">
												<span class="absolute inset-0" aria-hidden="true"></span>
											</a>
											<p class="font-medium text-default peer-hover:text-highlighted transition-colors text-sm">Daniel Roe</p>
										</div>
									</div>
								</div>
							</div>
						</article>

						<article data-orientation="vertical" class="relative group/blog-post rounded-lg overflow-hidden flex flex-col bg-elevated/50 ring ring-default transition hover:bg-elevated hover:ring-accented">
							<div class="relative overflow-hidden aspect-[16/9] w-full pointer-events-none">
								<img width="437" height="246" alt="Nuxt DevTools v1.0 image" data-nuxt-img="" srcset="/assets/blog/nuxt-devtools-1-0.png 1x, /assets/blog/nuxt-devtools-1-0.png 2x" class="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover/blog-post:scale-110" src="/assets/blog/nuxt-devtools-1-0.png" />
							</div>
							<div class="min-w-0 flex-1 flex flex-col p-4 sm:p-6">
								<a href="/blog/nuxt-devtools-v1-0" tabindex="-1" aria-label="Nuxt DevTools v1.0" class="focus:outline-none peer">
									<span class="absolute inset-0" aria-hidden="true"></span>
								</a>
								<div class="flex items-center gap-2 mb-2">
									<span class="font-medium inline-flex items-center text-xs px-2 py-1 gap-1 rounded-md bg-primary/10 text-primary ring ring-inset ring-primary/25">
										<span class="truncate">Release</span>
									</span>
									<time datetime="2023-11-12T17:00:00.000Z" class="text-sm text-muted">Nov 13, 2023</time>
								</div>
								<h2 class="text-xl text-pretty font-semibold text-highlighted">Nuxt DevTools v1.0</h2>
								<div class="mt-1 text-base text-pretty text-toned">Nuxt DevTools v1.0 is out, generally available to all Nuxt projects!</div>
								<div class="pt-4 mt-auto flex flex-wrap gap-x-3 gap-y-1.5">
									<div data-orientation="horizontal" class="relative group/user flex items-center gap-2">
										<span class="inline-flex items-center justify-center select-none rounded-full align-middle bg-elevated size-8 text-base shrink-0 transform transition-transform duration-200 group-hover/user:scale-115">
											<img width="32" height="32" alt="Anthony Fu avatar" data-nuxt-img="" srcset="https://github.com/antfu.png 1x, https://github.com/antfu.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/antfu.png" />
										</span>
										<div class="">
											<a href="https://github.com/antfu" tabindex="-1" rel="noopener noreferrer" aria-label="Anthony Fu" twitter="antfu7" class="focus:outline-none peer">
												<span class="absolute inset-0" aria-hidden="true"></span>
											</a>
											<p class="font-medium text-default peer-hover:text-highlighted transition-colors text-sm">Anthony Fu</p>
										</div>
									</div>
								</div>
							</div>
						</article>

						<article data-orientation="vertical" class="relative group/blog-post rounded-lg overflow-hidden flex flex-col bg-elevated/50 ring ring-default transition hover:bg-elevated hover:ring-accented">
							<div class="relative overflow-hidden aspect-[16/9] w-full pointer-events-none">
								<img width="437" height="246" alt="Nuxt 3.8 image" data-nuxt-img="" srcset="/assets/blog/v3.8.png 1x, /assets/blog/v3.8.png 2x" class="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover/blog-post:scale-110" src="/assets/blog/v3.8.png" />
							</div>
							<div class="min-w-0 flex-1 flex flex-col p-4 sm:p-6">
								<a href="/blog/v3-8" tabindex="-1" aria-label="Nuxt 3.8" class="focus:outline-none peer">
									<span class="absolute inset-0" aria-hidden="true"></span>
								</a>
								<div class="flex items-center gap-2 mb-2">
									<span class="font-medium inline-flex items-center text-xs px-2 py-1 gap-1 rounded-md bg-primary/10 text-primary ring ring-inset ring-primary/25">
										<span class="truncate">Release</span>
									</span>
									<time datetime="2023-10-18T17:00:00.000Z" class="text-sm text-muted">Oct 19, 2023</time>
								</div>
								<h2 class="text-xl text-pretty font-semibold text-highlighted">Nuxt 3.8</h2>
								<div class="mt-1 text-base text-pretty text-toned">Nuxt 3.8 is out, bringing built-in DevTools, automatic Nuxt Image install, a new app manifest and much more.</div>
								<div class="pt-4 mt-auto flex flex-wrap gap-x-3 gap-y-1.5">
									<div data-orientation="horizontal" class="relative group/user flex items-center gap-2">
										<span class="inline-flex items-center justify-center select-none rounded-full align-middle bg-elevated size-8 text-base shrink-0 transform transition-transform duration-200 group-hover/user:scale-115">
											<img width="32" height="32" alt="Daniel Roe avatar" data-nuxt-img="" srcset="https://github.com/danielroe.png 1x, https://github.com/danielroe.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/danielroe.png" />
										</span>
										<div class="">
											<a href="https://bsky.app/profile/danielroe.dev" tabindex="-1" rel="noopener noreferrer" aria-label="Daniel Roe" class="focus:outline-none peer">
												<span class="absolute inset-0" aria-hidden="true"></span>
											</a>
											<p class="font-medium text-default peer-hover:text-highlighted transition-colors text-sm">Daniel Roe</p>
										</div>
									</div>
								</div>
							</div>
						</article>

						<article data-orientation="vertical" class="relative group/blog-post rounded-lg overflow-hidden flex flex-col bg-elevated/50 ring ring-default transition hover:bg-elevated hover:ring-accented">
							<div class="relative overflow-hidden aspect-[16/9] w-full pointer-events-none">
								<img width="437" height="246" alt="A New Website image" data-nuxt-img="" srcset="/assets/blog/new-website.png 1x, /assets/blog/new-website.png 2x" class="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover/blog-post:scale-110" src="/assets/blog/new-website.png" />
							</div>
							<div class="min-w-0 flex-1 flex flex-col p-4 sm:p-6">
								<a href="/blog/new-website" tabindex="-1" aria-label="A New Website" class="focus:outline-none peer">
									<span class="absolute inset-0" aria-hidden="true"></span>
								</a>
								<div class="flex items-center gap-2 mb-2">
									<span class="font-medium inline-flex items-center text-xs px-2 py-1 gap-1 rounded-md bg-primary/10 text-primary ring ring-inset ring-primary/25">
										<span class="truncate">Announcement</span>
									</span>
									<time datetime="2023-10-17T17:00:00.000Z" class="text-sm text-muted">Oct 18, 2023</time>
								</div>
								<h2 class="text-xl text-pretty font-semibold text-highlighted">A New Website</h2>
								<div class="mt-1 text-base text-pretty text-toned">We are thrilled to release the new nuxt.com, powered by Nuxt UI and now open source.</div>
								<div class="pt-4 mt-auto flex flex-wrap gap-x-3 gap-y-1.5">
									<div class="inline-flex flex-row-reverse justify-end">
										<a href="https://x.com/benjamincanac" rel="noopener noreferrer" class="transform transition-transform duration-200 hover:scale-115 relative rounded-full ring-bg first:me-0 ring-2 -me-1.5">
											<span class="inline-flex items-center justify-center shrink-0 select-none rounded-full align-middle bg-elevated size-8 text-base">
												<img width="32" height="32" alt="Benjamin Canac avatar" data-nuxt-img="" srcset="https://github.com/benjamincanac.png 1x, https://github.com/benjamincanac.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/benjamincanac.png" />
											</span>
										</a>
										<a href="https://x.com/atinux" rel="noopener noreferrer" class="transform transition-transform duration-200 hover:scale-115 relative rounded-full ring-bg first:me-0 ring-2 -me-1.5">
											<span class="inline-flex items-center justify-center shrink-0 select-none rounded-full align-middle bg-elevated size-8 text-base">
												<img width="32" height="32" alt="Sébastien Chopin avatar" data-nuxt-img="" srcset="https://github.com/atinux.png 1x, https://github.com/atinux.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/atinux.png" />
											</span>
										</a>
									</div>
								</div>
							</div>
						</article>

						<article data-orientation="vertical" class="relative group/blog-post rounded-lg overflow-hidden flex flex-col bg-elevated/50 ring ring-default transition hover:bg-elevated hover:ring-accented">
							<div class="relative overflow-hidden aspect-[16/9] w-full pointer-events-none"><img width="437" height="246" alt="Nuxt 3.7 image" data-nuxt-img="" srcset="/assets/blog/v3.7.png 1x, /assets/blog/v3.7.png 2x" class="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover/blog-post:scale-110" src="/assets/blog/v3.7.png" /></div>
							<div class="min-w-0 flex-1 flex flex-col p-4 sm:p-6">
								<a href="/blog/v3-7" tabindex="-1" aria-label="Nuxt 3.7" class="focus:outline-none peer"><span class="absolute inset-0" aria-hidden="true"></span></a>
								<div class="flex items-center gap-2 mb-2">
									<span class="font-medium inline-flex items-center text-xs px-2 py-1 gap-1 rounded-md bg-primary/10 text-primary ring ring-inset ring-primary/25"><span class="truncate">Release</span></span
									><time datetime="2023-08-24T17:00:00.000Z" class="text-sm text-muted">Aug 25, 2023</time>
								</div>
								<h2 class="text-xl text-pretty font-semibold text-highlighted">Nuxt 3.7</h2>
								<div class="mt-1 text-base text-pretty text-toned">Nuxt 3.7 is out, bringing a new CLI, native web streams and response, rendering optimisations, async context support - and much more.</div>
								<div class="pt-4 mt-auto flex flex-wrap gap-x-3 gap-y-1.5">
									<div data-orientation="horizontal" class="relative group/user flex items-center gap-2">
										<span class="inline-flex items-center justify-center select-none rounded-full align-middle bg-elevated size-8 text-base shrink-0 transform transition-transform duration-200 group-hover/user:scale-115"><img width="32" height="32" alt="Daniel Roe avatar" data-nuxt-img="" srcset="https://github.com/danielroe.png 1x, https://github.com/danielroe.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/danielroe.png" /></span>
										<div class="">
											<a href="https://bsky.app/profile/danielroe.dev" tabindex="-1" rel="noopener noreferrer" aria-label="Daniel Roe" class="focus:outline-none peer"><span class="absolute inset-0" aria-hidden="true"></span></a>
											<p class="font-medium text-default peer-hover:text-highlighted transition-colors text-sm">Daniel Roe</p>
										</div>
									</div>
								</div>
							</div>
						</article>
						<article data-orientation="vertical" class="relative group/blog-post rounded-lg overflow-hidden flex flex-col bg-elevated/50 ring ring-default transition hover:bg-elevated hover:ring-accented">
							<div class="relative overflow-hidden aspect-[16/9] w-full pointer-events-none"><img width="437" height="246" alt="Nuxt on the Edge image" data-nuxt-img="" srcset="/assets/blog/nuxt-on-the-edge.png 1x, /assets/blog/nuxt-on-the-edge.png 2x" class="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover/blog-post:scale-110" src="/assets/blog/nuxt-on-the-edge.png" /></div>
							<div class="min-w-0 flex-1 flex flex-col p-4 sm:p-6">
								<a href="/blog/nuxt-on-the-edge" tabindex="-1" aria-label="Nuxt on the Edge" class="focus:outline-none peer"><span class="absolute inset-0" aria-hidden="true"></span></a>
								<div class="flex items-center gap-2 mb-2">
									<span class="font-medium inline-flex items-center text-xs px-2 py-1 gap-1 rounded-md bg-primary/10 text-primary ring ring-inset ring-primary/25"><span class="truncate">Article</span></span
									><time datetime="2023-07-12T17:00:00.000Z" class="text-sm text-muted">Jul 13, 2023</time>
								</div>
								<h2 class="text-xl text-pretty font-semibold text-highlighted">Nuxt on the Edge</h2>
								<div class="mt-1 text-base text-pretty text-toned">Learn how we made Nuxt 3 capable of running on edge runtimes to run with server-side rendering close to your users.</div>
								<div class="pt-4 mt-auto flex flex-wrap gap-x-3 gap-y-1.5">
									<div data-orientation="horizontal" class="relative group/user flex items-center gap-2">
										<span class="inline-flex items-center justify-center select-none rounded-full align-middle bg-elevated size-8 text-base shrink-0 transform transition-transform duration-200 group-hover/user:scale-115"><img width="32" height="32" alt="Sébastien Chopin avatar" data-nuxt-img="" srcset="https://github.com/atinux.png 1x, https://github.com/atinux.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/atinux.png" /></span>
										<div class="">
											<a href="https://x.com/atinux" tabindex="-1" rel="noopener noreferrer" aria-label="Sébastien Chopin" twitter="atinux" class="focus:outline-none peer"><span class="absolute inset-0" aria-hidden="true"></span></a>
											<p class="font-medium text-default peer-hover:text-highlighted transition-colors text-sm">Sébastien Chopin</p>
										</div>
									</div>
								</div>
							</div>
						</article>
						<article data-orientation="vertical" class="relative group/blog-post rounded-lg overflow-hidden flex flex-col bg-elevated/50 ring ring-default transition hover:bg-elevated hover:ring-accented">
							<div class="relative overflow-hidden aspect-[16/9] w-full pointer-events-none"><img width="437" height="246" alt="Nuxt 3.6 image" data-nuxt-img="" srcset="/assets/blog/v3-6.png 1x, /assets/blog/v3-6.png 2x" class="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover/blog-post:scale-110" src="/assets/blog/v3-6.png" /></div>
							<div class="min-w-0 flex-1 flex flex-col p-4 sm:p-6">
								<a href="/blog/v3-6" tabindex="-1" aria-label="Nuxt 3.6" class="focus:outline-none peer"><span class="absolute inset-0" aria-hidden="true"></span></a>
								<div class="flex items-center gap-2 mb-2">
									<span class="font-medium inline-flex items-center text-xs px-2 py-1 gap-1 rounded-md bg-primary/10 text-primary ring ring-inset ring-primary/25"><span class="truncate">Release</span></span
									><time datetime="2023-06-22T17:00:00.000Z" class="text-sm text-muted">Jun 23, 2023</time>
								</div>
								<h2 class="text-xl text-pretty font-semibold text-highlighted">Nuxt 3.6</h2>
								<div class="mt-1 text-base text-pretty text-toned">Nuxt 3.6 is out, bringing performance improvements, fully static server components, better style inlining, static presets, increased type safety - and much more.</div>
								<div class="pt-4 mt-auto flex flex-wrap gap-x-3 gap-y-1.5">
									<div data-orientation="horizontal" class="relative group/user flex items-center gap-2">
										<span class="inline-flex items-center justify-center select-none rounded-full align-middle bg-elevated size-8 text-base shrink-0 transform transition-transform duration-200 group-hover/user:scale-115"><img width="32" height="32" alt="Daniel Roe avatar" data-nuxt-img="" srcset="https://github.com/danielroe.png 1x, https://github.com/danielroe.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/danielroe.png" /></span>
										<div class="">
											<a href="https://bsky.app/profile/danielroe.dev" tabindex="-1" rel="noopener noreferrer" aria-label="Daniel Roe" class="focus:outline-none peer"><span class="absolute inset-0" aria-hidden="true"></span></a>
											<p class="font-medium text-default peer-hover:text-highlighted transition-colors text-sm">Daniel Roe</p>
										</div>
									</div>
								</div>
							</div>
						</article>
						<article data-orientation="vertical" class="relative group/blog-post rounded-lg overflow-hidden flex flex-col bg-elevated/50 ring ring-default transition hover:bg-elevated hover:ring-accented">
							<div class="relative overflow-hidden aspect-[16/9] w-full pointer-events-none"><img width="437" height="246" alt="Nuxt 3.5 image" data-nuxt-img="" srcset="/assets/blog/v3-5.png 1x, /assets/blog/v3-5.png 2x" class="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover/blog-post:scale-110" src="/assets/blog/v3-5.png" /></div>
							<div class="min-w-0 flex-1 flex flex-col p-4 sm:p-6">
								<a href="/blog/v3-5" tabindex="-1" aria-label="Nuxt 3.5" class="focus:outline-none peer"><span class="absolute inset-0" aria-hidden="true"></span></a>
								<div class="flex items-center gap-2 mb-2">
									<span class="font-medium inline-flex items-center text-xs px-2 py-1 gap-1 rounded-md bg-primary/10 text-primary ring ring-inset ring-primary/25"><span class="truncate">Release</span></span
									><time datetime="2023-05-15T17:00:00.000Z" class="text-sm text-muted">May 16, 2023</time>
								</div>
								<h2 class="text-xl text-pretty font-semibold text-highlighted">Nuxt 3.5</h2>
								<div class="mt-1 text-base text-pretty text-toned">Nuxt 3.5.0 is out, bringing Vue 3.3, new defaults, interactive server components, typed pages, environment config - and much more.</div>
								<div class="pt-4 mt-auto flex flex-wrap gap-x-3 gap-y-1.5">
									<div data-orientation="horizontal" class="relative group/user flex items-center gap-2">
										<span class="inline-flex items-center justify-center select-none rounded-full align-middle bg-elevated size-8 text-base shrink-0 transform transition-transform duration-200 group-hover/user:scale-115"><img width="32" height="32" alt="Daniel Roe avatar" data-nuxt-img="" srcset="https://github.com/danielroe.png 1x, https://github.com/danielroe.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/danielroe.png" /></span>
										<div class="">
											<a href="https://bsky.app/profile/danielroe.dev" tabindex="-1" rel="noopener noreferrer" aria-label="Daniel Roe" class="focus:outline-none peer"><span class="absolute inset-0" aria-hidden="true"></span></a>
											<p class="font-medium text-default peer-hover:text-highlighted transition-colors text-sm">Daniel Roe</p>
										</div>
									</div>
								</div>
							</div>
						</article>
						<article data-orientation="vertical" class="relative group/blog-post rounded-lg overflow-hidden flex flex-col bg-elevated/50 ring ring-default transition hover:bg-elevated hover:ring-accented">
							<div class="relative overflow-hidden aspect-[16/9] w-full pointer-events-none"><img width="437" height="246" alt="Nuxt 3.4 image" data-nuxt-img="" srcset="/assets/blog/v3-4.png 1x, /assets/blog/v3-4.png 2x" class="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover/blog-post:scale-110" src="/assets/blog/v3-4.png" /></div>
							<div class="min-w-0 flex-1 flex flex-col p-4 sm:p-6">
								<a href="/blog/v3-4" tabindex="-1" aria-label="Nuxt 3.4" class="focus:outline-none peer"><span class="absolute inset-0" aria-hidden="true"></span></a>
								<div class="flex items-center gap-2 mb-2">
									<span class="font-medium inline-flex items-center text-xs px-2 py-1 gap-1 rounded-md bg-primary/10 text-primary ring ring-inset ring-primary/25"><span class="truncate">Release</span></span
									><time datetime="2023-04-10T17:00:00.000Z" class="text-sm text-muted">Apr 11, 2023</time>
								</div>
								<h2 class="text-xl text-pretty font-semibold text-highlighted">Nuxt 3.4</h2>
								<div class="mt-1 text-base text-pretty text-toned">Nuxt 3.4.0 is the latest release of Nuxt 3, bringing exciting new features, including support for the View Transitions API, transferring rich JavaScript payloads from server to client - and much more.</div>
								<div class="pt-4 mt-auto flex flex-wrap gap-x-3 gap-y-1.5">
									<div data-orientation="horizontal" class="relative group/user flex items-center gap-2">
										<span class="inline-flex items-center justify-center select-none rounded-full align-middle bg-elevated size-8 text-base shrink-0 transform transition-transform duration-200 group-hover/user:scale-115"><img width="32" height="32" alt="Daniel Roe avatar" data-nuxt-img="" srcset="https://github.com/danielroe.png 1x, https://github.com/danielroe.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/danielroe.png" /></span>
										<div class="">
											<a href="https://bsky.app/profile/danielroe.dev" tabindex="-1" rel="noopener noreferrer" aria-label="Daniel Roe" class="focus:outline-none peer"><span class="absolute inset-0" aria-hidden="true"></span></a>
											<p class="font-medium text-default peer-hover:text-highlighted transition-colors text-sm">Daniel Roe</p>
										</div>
									</div>
								</div>
							</div>
						</article>
						<article data-orientation="vertical" class="relative group/blog-post rounded-lg overflow-hidden flex flex-col bg-elevated/50 ring ring-default transition hover:bg-elevated hover:ring-accented">
							<div class="relative overflow-hidden aspect-[16/9] w-full pointer-events-none"><img width="437" height="246" alt="Introducing Nuxt DevTools image" data-nuxt-img="" srcset="/assets/blog/nuxt-devtools.png 1x, /assets/blog/nuxt-devtools.png 2x" class="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover/blog-post:scale-110" src="/assets/blog/nuxt-devtools.png" /></div>
							<div class="min-w-0 flex-1 flex flex-col p-4 sm:p-6">
								<a href="/blog/introducing-nuxt-devtools" tabindex="-1" aria-label="Introducing Nuxt DevTools" class="focus:outline-none peer"><span class="absolute inset-0" aria-hidden="true"></span></a>
								<div class="flex items-center gap-2 mb-2">
									<span class="font-medium inline-flex items-center text-xs px-2 py-1 gap-1 rounded-md bg-primary/10 text-primary ring ring-inset ring-primary/25"><span class="truncate">Release</span></span
									><time datetime="2023-03-26T17:00:00.000Z" class="text-sm text-muted">Mar 27, 2023</time>
								</div>
								<h2 class="text-xl text-pretty font-semibold text-highlighted">Introducing Nuxt DevTools</h2>
								<div class="mt-1 text-base text-pretty text-toned">Unleash the Developer Experience with Nuxt and understand your app better than ever.</div>
								<div class="pt-4 mt-auto flex flex-wrap gap-x-3 gap-y-1.5">
									<div data-orientation="horizontal" class="relative group/user flex items-center gap-2">
										<span class="inline-flex items-center justify-center select-none rounded-full align-middle bg-elevated size-8 text-base shrink-0 transform transition-transform duration-200 group-hover/user:scale-115"><img width="32" height="32" alt="Anthony Fu avatar" data-nuxt-img="" srcset="https://github.com/antfu.png 1x, https://github.com/antfu.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/antfu.png" /></span>
										<div class="">
											<a href="https://github.com/antfu" tabindex="-1" rel="noopener noreferrer" aria-label="Anthony Fu" twitter="antfu7" class="focus:outline-none peer"><span class="absolute inset-0" aria-hidden="true"></span></a>
											<p class="font-medium text-default peer-hover:text-highlighted transition-colors text-sm">Anthony Fu</p>
										</div>
									</div>
								</div>
							</div>
						</article>
						<article data-orientation="vertical" class="relative group/blog-post rounded-lg overflow-hidden flex flex-col bg-elevated/50 ring ring-default transition hover:bg-elevated hover:ring-accented">
							<div class="relative overflow-hidden aspect-[16/9] w-full pointer-events-none"><img width="437" height="246" alt="Nuxt 3.3 image" data-nuxt-img="" srcset="/assets/blog/v3-3.png 1x, /assets/blog/v3-3.png 2x" class="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover/blog-post:scale-110" src="/assets/blog/v3-3.png" /></div>
							<div class="min-w-0 flex-1 flex flex-col p-4 sm:p-6">
								<a href="/blog/v3-3" tabindex="-1" aria-label="Nuxt 3.3" class="focus:outline-none peer"><span class="absolute inset-0" aria-hidden="true"></span></a>
								<div class="flex items-center gap-2 mb-2">
									<span class="font-medium inline-flex items-center text-xs px-2 py-1 gap-1 rounded-md bg-primary/10 text-primary ring ring-inset ring-primary/25"><span class="truncate">Release</span></span
									><time datetime="2023-03-13T17:00:00.000Z" class="text-sm text-muted">Mar 14, 2023</time>
								</div>
								<h2 class="text-xl text-pretty font-semibold text-highlighted">Nuxt 3.3</h2>
								<div class="mt-1 text-base text-pretty text-toned">The 3.3.0 is a minor (feature) release with lots of performance and DX improvements, bug fixes and new features to play with.</div>
								<div class="pt-4 mt-auto flex flex-wrap gap-x-3 gap-y-1.5">
									<div data-orientation="horizontal" class="relative group/user flex items-center gap-2">
										<span class="inline-flex items-center justify-center select-none rounded-full align-middle bg-elevated size-8 text-base shrink-0 transform transition-transform duration-200 group-hover/user:scale-115"><img width="32" height="32" alt="Daniel Roe avatar" data-nuxt-img="" srcset="https://github.com/danielroe.png 1x, https://github.com/danielroe.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/danielroe.png" /></span>
										<div class="">
											<a href="https://bsky.app/profile/danielroe.dev" tabindex="-1" rel="noopener noreferrer" aria-label="Daniel Roe" class="focus:outline-none peer"><span class="absolute inset-0" aria-hidden="true"></span></a>
											<p class="font-medium text-default peer-hover:text-highlighted transition-colors text-sm">Daniel Roe</p>
										</div>
									</div>
								</div>
							</div>
						</article>
						<article data-orientation="vertical" class="relative group/blog-post rounded-lg overflow-hidden flex flex-col bg-elevated/50 ring ring-default transition hover:bg-elevated hover:ring-accented">
							<div class="relative overflow-hidden aspect-[16/9] w-full pointer-events-none"><img width="437" height="246" alt="Nuxt: A vision for 2023 image" data-nuxt-img="" srcset="/assets/blog/nuxt-a-vision-for-2023.png 1x, /assets/blog/nuxt-a-vision-for-2023.png 2x" class="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover/blog-post:scale-110" src="/assets/blog/nuxt-a-vision-for-2023.png" /></div>
							<div class="min-w-0 flex-1 flex flex-col p-4 sm:p-6">
								<a href="/blog/vision-2023" tabindex="-1" aria-label="Nuxt: A vision for 2023" class="focus:outline-none peer"><span class="absolute inset-0" aria-hidden="true"></span></a>
								<div class="flex items-center gap-2 mb-2">
									<span class="font-medium inline-flex items-center text-xs px-2 py-1 gap-1 rounded-md bg-primary/10 text-primary ring ring-inset ring-primary/25"><span class="truncate">Release</span></span
									><time datetime="2023-01-16T17:00:00.000Z" class="text-sm text-muted">Jan 17, 2023</time>
								</div>
								<h2 class="text-xl text-pretty font-semibold text-highlighted">Nuxt: A vision for 2023</h2>
								<div class="mt-1 text-base text-pretty text-toned">This past year has been an exciting one. Looking into the new year, there is a lot we have planned as a team and we'd love to share it with you.</div>
								<div class="pt-4 mt-auto flex flex-wrap gap-x-3 gap-y-1.5">
									<div data-orientation="horizontal" class="relative group/user flex items-center gap-2">
										<span class="inline-flex items-center justify-center select-none rounded-full align-middle bg-elevated size-8 text-base shrink-0 transform transition-transform duration-200 group-hover/user:scale-115"><img width="32" height="32" alt="Daniel Roe avatar" data-nuxt-img="" srcset="https://github.com/danielroe.png 1x, https://github.com/danielroe.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/danielroe.png" /></span>
										<div class="">
											<a href="https://bsky.app/profile/danielroe.dev" tabindex="-1" rel="noopener noreferrer" aria-label="Daniel Roe" class="focus:outline-none peer"><span class="absolute inset-0" aria-hidden="true"></span></a>
											<p class="font-medium text-default peer-hover:text-highlighted transition-colors text-sm">Daniel Roe</p>
										</div>
									</div>
								</div>
							</div>
						</article>
						<article data-orientation="vertical" class="relative group/blog-post rounded-lg overflow-hidden flex flex-col bg-elevated/50 ring ring-default transition hover:bg-elevated hover:ring-accented">
							<div class="relative overflow-hidden aspect-[16/9] w-full pointer-events-none"><img width="437" height="246" alt="Announcing 3.0 image" data-nuxt-img="" srcset="/assets/blog/v3.png 1x, /assets/blog/v3.png 2x" class="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover/blog-post:scale-110" src="/assets/blog/v3.png" /></div>
							<div class="min-w-0 flex-1 flex flex-col p-4 sm:p-6">
								<a href="/blog/v3" tabindex="-1" aria-label="Announcing 3.0" class="focus:outline-none peer"><span class="absolute inset-0" aria-hidden="true"></span></a>
								<div class="flex items-center gap-2 mb-2">
									<span class="font-medium inline-flex items-center text-xs px-2 py-1 gap-1 rounded-md bg-primary/10 text-primary ring ring-inset ring-primary/25"><span class="truncate">Release</span></span
									><time datetime="2022-11-15T17:00:00.000Z" class="text-sm text-muted">Nov 16, 2022</time>
								</div>
								<h2 class="text-xl text-pretty font-semibold text-highlighted">Announcing 3.0</h2>
								<div class="mt-1 text-base text-pretty text-toned">We are thrilled to announce the first stable version of Nuxt 3.0.0</div>
								<div class="pt-4 mt-auto flex flex-wrap gap-x-3 gap-y-1.5">
									<div data-orientation="horizontal" class="relative group/user flex items-center gap-2">
										<span class="inline-flex items-center justify-center select-none rounded-full align-middle bg-elevated size-8 text-base shrink-0 transform transition-transform duration-200 group-hover/user:scale-115"><img width="32" height="32" alt="Pooya Parsa avatar" data-nuxt-img="" srcset="https://github.com/pi0.png 1x, https://github.com/pi0.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/pi0.png" /></span>
										<div class="">
											<a href="https://x.com/_pi0_" tabindex="-1" rel="noopener noreferrer" aria-label="Pooya Parsa" twitter="_pi0_" class="focus:outline-none peer"><span class="absolute inset-0" aria-hidden="true"></span></a>
											<p class="font-medium text-default peer-hover:text-highlighted transition-colors text-sm">Pooya Parsa</p>
										</div>
									</div>
								</div>
							</div>
						</article>
						<article data-orientation="vertical" class="relative group/blog-post rounded-lg overflow-hidden flex flex-col bg-elevated/50 ring ring-default transition hover:bg-elevated hover:ring-accented">
							<div class="relative overflow-hidden aspect-[16/9] w-full pointer-events-none"><img width="437" height="246" alt="Announcing Nuxt 3 Release Candidate image" data-nuxt-img="" srcset="/assets/blog/announcing-nuxt-3-release-candidate.png 1x, /assets/blog/announcing-nuxt-3-release-candidate.png 2x" class="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover/blog-post:scale-110" src="/assets/blog/announcing-nuxt-3-release-candidate.png" /></div>
							<div class="min-w-0 flex-1 flex flex-col p-4 sm:p-6">
								<a href="/blog/nuxt3-rc" tabindex="-1" aria-label="Announcing Nuxt 3 Release Candidate" class="focus:outline-none peer"><span class="absolute inset-0" aria-hidden="true"></span></a>
								<div class="flex items-center gap-2 mb-2">
									<span class="font-medium inline-flex items-center text-xs px-2 py-1 gap-1 rounded-md bg-primary/10 text-primary ring ring-inset ring-primary/25"><span class="truncate">Release</span></span
									><time datetime="2022-04-11T17:00:00.000Z" class="text-sm text-muted">Apr 12, 2022</time>
								</div>
								<h2 class="text-xl text-pretty font-semibold text-highlighted">Announcing Nuxt 3 Release Candidate</h2>
								<div class="mt-1 text-base text-pretty text-toned">Nuxt 3 beta was announced on October 12, 2021 after 16 months of work, introducing a new foundation based on Vue 3, Vite and Nitro. Six months later, we are happy to announce the first release candidate of Nuxt 3, code named “Mount Hope“ 🚀</div>
								<div class="pt-4 mt-auto flex flex-wrap gap-x-3 gap-y-1.5">
									<div class="inline-flex flex-row-reverse justify-end">
										<a href="https://x.com/clemcodes" rel="noopener noreferrer" class="transform transition-transform duration-200 hover:scale-115 relative rounded-full ring-bg first:me-0 ring-2 -me-1.5"
											><span class="inline-flex items-center justify-center shrink-0 select-none rounded-full align-middle bg-elevated size-8 text-base"><img width="32" height="32" alt="Clement Ollivier avatar" data-nuxt-img="" srcset="https://github.com/clemcode.png 1x, https://github.com/clemcode.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/clemcode.png" /></span></a
										><a href="https://x.com/thewikeo" rel="noopener noreferrer" class="transform transition-transform duration-200 hover:scale-115 relative rounded-full ring-bg first:me-0 ring-2 -me-1.5"
											><span class="inline-flex items-center justify-center shrink-0 select-none rounded-full align-middle bg-elevated size-8 text-base"><img width="32" height="32" alt="Alexandre Chopin avatar" data-nuxt-img="" srcset="https://github.com/alexchopin.png 1x, https://github.com/alexchopin.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/alexchopin.png" /></span></a
										><a href="https://github.com/antfu" rel="noopener noreferrer" class="transform transition-transform duration-200 hover:scale-115 relative rounded-full ring-bg first:me-0 ring-2 -me-1.5"
											><span class="inline-flex items-center justify-center shrink-0 select-none rounded-full align-middle bg-elevated size-8 text-base"><img width="32" height="32" alt="Anthony Fu avatar" data-nuxt-img="" srcset="https://github.com/antfu.png 1x, https://github.com/antfu.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/antfu.png" /></span></a
										><a href="https://bsky.app/profile/danielroe.dev" rel="noopener noreferrer" class="transform transition-transform duration-200 hover:scale-115 relative rounded-full ring-bg first:me-0 ring-2 -me-1.5"
											><span class="inline-flex items-center justify-center shrink-0 select-none rounded-full align-middle bg-elevated size-8 text-base"><img width="32" height="32" alt="Daniel Roe avatar" data-nuxt-img="" srcset="https://github.com/danielroe.png 1x, https://github.com/danielroe.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/danielroe.png" /></span></a
										><a href="https://x.com/atinux" rel="noopener noreferrer" class="transform transition-transform duration-200 hover:scale-115 relative rounded-full ring-bg first:me-0 ring-2 -me-1.5"
											><span class="inline-flex items-center justify-center shrink-0 select-none rounded-full align-middle bg-elevated size-8 text-base"><img width="32" height="32" alt="Sébastien Chopin avatar" data-nuxt-img="" srcset="https://github.com/Atinux.png 1x, https://github.com/Atinux.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/Atinux.png" /></span
										></a>
									</div>
								</div>
							</div>
						</article>
						<article data-orientation="vertical" class="relative group/blog-post rounded-lg overflow-hidden flex flex-col bg-elevated/50 ring ring-default transition hover:bg-elevated hover:ring-accented">
							<div class="relative overflow-hidden aspect-[16/9] w-full pointer-events-none"><img width="437" height="246" alt="Introducing Nuxt 3 Beta image" data-nuxt-img="" srcset="/assets/blog/introducing-nuxt-3-beta.png 1x, /assets/blog/introducing-nuxt-3-beta.png 2x" class="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover/blog-post:scale-110" src="/assets/blog/introducing-nuxt-3-beta.png" /></div>
							<div class="min-w-0 flex-1 flex flex-col p-4 sm:p-6">
								<a href="/blog/nuxt3-beta" tabindex="-1" aria-label="Introducing Nuxt 3 Beta" class="focus:outline-none peer"><span class="absolute inset-0" aria-hidden="true"></span></a>
								<div class="flex items-center gap-2 mb-2">
									<span class="font-medium inline-flex items-center text-xs px-2 py-1 gap-1 rounded-md bg-primary/10 text-primary ring ring-inset ring-primary/25"><span class="truncate">Release</span></span
									><time datetime="2021-10-10T17:00:00.000Z" class="text-sm text-muted">Oct 11, 2021</time>
								</div>
								<h2 class="text-xl text-pretty font-semibold text-highlighted">Introducing Nuxt 3 Beta</h2>
								<div class="mt-1 text-base text-pretty text-toned">468 days after the first commit, the Nuxt 3 beta has finally arrived. Discover what's inside and what to expect from it. Yes, it includes Vue 3 and Vite ⚡️</div>
								<div class="pt-4 mt-auto flex flex-wrap gap-x-3 gap-y-1.5">
									<div class="inline-flex flex-row-reverse justify-end">
										<a href="https://x.com/thewikeo" rel="noopener noreferrer" class="transform transition-transform duration-200 hover:scale-115 relative rounded-full ring-bg first:me-0 ring-2 -me-1.5"
											><span class="inline-flex items-center justify-center shrink-0 select-none rounded-full align-middle bg-elevated size-8 text-base"><img width="32" height="32" alt="Alexandre Chopin avatar" data-nuxt-img="" srcset="https://github.com/alexchopin.png 1x, https://github.com/alexchopin.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/alexchopin.png" /></span></a
										><a href="https://bsky.app/profile/danielroe.dev" rel="noopener noreferrer" class="transform transition-transform duration-200 hover:scale-115 relative rounded-full ring-bg first:me-0 ring-2 -me-1.5"
											><span class="inline-flex items-center justify-center shrink-0 select-none rounded-full align-middle bg-elevated size-8 text-base"><img width="32" height="32" alt="Daniel Roe avatar" data-nuxt-img="" srcset="https://github.com/danielroe.png 1x, https://github.com/danielroe.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/danielroe.png" /></span></a
										><a href="https://x.com/_pi0_" rel="noopener noreferrer" class="transform transition-transform duration-200 hover:scale-115 relative rounded-full ring-bg first:me-0 ring-2 -me-1.5"
											><span class="inline-flex items-center justify-center shrink-0 select-none rounded-full align-middle bg-elevated size-8 text-base"><img width="32" height="32" alt="Pooya Parsa avatar" data-nuxt-img="" srcset="https://github.com/pi0.png 1x, https://github.com/pi0.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/pi0.png" /></span></a
										><a href="https://x.com/atinux" rel="noopener noreferrer" class="transform transition-transform duration-200 hover:scale-115 relative rounded-full ring-bg first:me-0 ring-2 -me-1.5"
											><span class="inline-flex items-center justify-center shrink-0 select-none rounded-full align-middle bg-elevated size-8 text-base"><img width="32" height="32" alt="Sébastien Chopin avatar" data-nuxt-img="" srcset="https://github.com/Atinux.png 1x, https://github.com/Atinux.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/Atinux.png" /></span
										></a>
									</div>
								</div>
							</div>
						</article>
						<article data-orientation="vertical" class="relative group/blog-post rounded-lg overflow-hidden flex flex-col bg-elevated/50 ring ring-default transition hover:bg-elevated hover:ring-accented">
							<div class="relative overflow-hidden aspect-[16/9] w-full pointer-events-none"><img width="437" height="246" alt="Nuxt 2 Static Improvements image" data-nuxt-img="" srcset="/assets/blog/nuxt-static-improvements.png 1x, /assets/blog/nuxt-static-improvements.png 2x" class="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover/blog-post:scale-110" src="/assets/blog/nuxt-static-improvements.png" /></div>
							<div class="min-w-0 flex-1 flex flex-col p-4 sm:p-6">
								<a href="/blog/nuxt-static-improvements" tabindex="-1" aria-label="Nuxt 2 Static Improvements" class="focus:outline-none peer"><span class="absolute inset-0" aria-hidden="true"></span></a>
								<div class="flex items-center gap-2 mb-2">
									<span class="font-medium inline-flex items-center text-xs px-2 py-1 gap-1 rounded-md bg-primary/10 text-primary ring ring-inset ring-primary/25"><span class="truncate">Release</span></span
									><time datetime="2020-07-26T17:00:00.000Z" class="text-sm text-muted">Jul 27, 2020</time>
								</div>
								<h2 class="text-xl text-pretty font-semibold text-highlighted">Nuxt 2 Static Improvements</h2>
								<div class="mt-1 text-base text-pretty text-toned">With Nuxt version 2.13, the full-static mode has been introduced. In addition, a new command nuxt export was added to pre-render your pages without triggering a webpack build with the goal to separate the rendering and build process. The only issue was that most Nuxt users weren't able to unleash the full potential of the separation... until now.</div>
								<div class="pt-4 mt-auto flex flex-wrap gap-x-3 gap-y-1.5">
									<div class="inline-flex flex-row-reverse justify-end">
										<a href="https://x.com/_pi0_" rel="noopener noreferrer" class="transform transition-transform duration-200 hover:scale-115 relative rounded-full ring-bg first:me-0 ring-2 -me-1.5"
											><span class="inline-flex items-center justify-center shrink-0 select-none rounded-full align-middle bg-elevated size-8 text-base"><img width="32" height="32" alt="Pooya Parsa avatar" data-nuxt-img="" srcset="https://github.com/pi0.png 1x, https://github.com/pi0.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/pi0.png" /></span></a
										><a href="https://x.com/atinux" rel="noopener noreferrer" class="transform transition-transform duration-200 hover:scale-115 relative rounded-full ring-bg first:me-0 ring-2 -me-1.5"
											><span class="inline-flex items-center justify-center shrink-0 select-none rounded-full align-middle bg-elevated size-8 text-base"><img width="32" height="32" alt="Sébastien Chopin avatar" data-nuxt-img="" srcset="https://github.com/Atinux.png 1x, https://github.com/Atinux.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/Atinux.png" /></span></a
										><a href="https://x.com/TheAlexLichter" rel="noopener noreferrer" class="transform transition-transform duration-200 hover:scale-115 relative rounded-full ring-bg first:me-0 ring-2 -me-1.5"
											><span class="inline-flex items-center justify-center shrink-0 select-none rounded-full align-middle bg-elevated size-8 text-base"><img width="32" height="32" alt="Alexander Lichter avatar" data-nuxt-img="" srcset="https://github.com/manniL.png 1x, https://github.com/manniL.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/manniL.png" /></span
										></a>
									</div>
								</div>
							</div>
						</article>
						<article data-orientation="vertical" class="relative group/blog-post rounded-lg overflow-hidden flex flex-col bg-elevated/50 ring ring-default transition hover:bg-elevated hover:ring-accented">
							<div class="relative overflow-hidden aspect-[16/9] w-full pointer-events-none"><img width="437" height="246" alt="Going Full Static image" data-nuxt-img="" srcset="/assets/blog/going-full-static.png 1x, /assets/blog/going-full-static.png 2x" class="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover/blog-post:scale-110" src="/assets/blog/going-full-static.png" /></div>
							<div class="min-w-0 flex-1 flex flex-col p-4 sm:p-6">
								<a href="/blog/going-full-static" tabindex="-1" aria-label="Going Full Static" class="focus:outline-none peer"><span class="absolute inset-0" aria-hidden="true"></span></a>
								<div class="flex items-center gap-2 mb-2">
									<span class="font-medium inline-flex items-center text-xs px-2 py-1 gap-1 rounded-md bg-primary/10 text-primary ring ring-inset ring-primary/25"><span class="truncate">Release</span></span
									><time datetime="2020-06-17T17:00:00.000Z" class="text-sm text-muted">Jun 18, 2020</time>
								</div>
								<h2 class="text-xl text-pretty font-semibold text-highlighted">Going Full Static</h2>
								<div class="mt-1 text-base text-pretty text-toned">Long awaited features for JAMstack fans has been shipped in v2.13: full static export, improved smart prefetching, integrated crawler, faster re-deploy, built-in web server and new target option for config ⚡️</div>
								<div class="pt-4 mt-auto flex flex-wrap gap-x-3 gap-y-1.5">
									<div data-orientation="horizontal" class="relative group/user flex items-center gap-2">
										<span class="inline-flex items-center justify-center select-none rounded-full align-middle bg-elevated size-8 text-base shrink-0 transform transition-transform duration-200 group-hover/user:scale-115"><img width="32" height="32" alt="Sebastien Chopin avatar" data-nuxt-img="" srcset="https://github.com/Atinux.png 1x, https://github.com/Atinux.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/Atinux.png" /></span>
										<div class="">
											<a href="https://x.com/atinux" tabindex="-1" rel="noopener noreferrer" aria-label="Sebastien Chopin" twitter="atinux" class="focus:outline-none peer"><span class="absolute inset-0" aria-hidden="true"></span></a>
											<p class="font-medium text-default peer-hover:text-highlighted transition-colors text-sm">Sebastien Chopin</p>
										</div>
									</div>
								</div>
							</div>
						</article>
						<article data-orientation="vertical" class="relative group/blog-post rounded-lg overflow-hidden flex flex-col bg-elevated/50 ring ring-default transition hover:bg-elevated hover:ring-accented">
							<div class="relative overflow-hidden aspect-[16/9] w-full pointer-events-none">
								<img width="437" height="246" alt="Understanding how fetch works in Nuxt 2.12 image" data-nuxt-img="" srcset="/assets/blog/understanding-how-fetch-works-in-nuxt-2.12.png 1x, /assets/blog/understanding-how-fetch-works-in-nuxt-2.12.png 2x" class="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover/blog-post:scale-110" src="/assets/blog/understanding-how-fetch-works-in-nuxt-2.12.png" />
							</div>
							<div class="min-w-0 flex-1 flex flex-col p-4 sm:p-6">
								<a href="/blog/understanding-how-fetch-works-in-nuxt-2-12" tabindex="-1" aria-label="Understanding how fetch works in Nuxt 2.12" class="focus:outline-none peer"><span class="absolute inset-0" aria-hidden="true"></span></a>
								<div class="flex items-center gap-2 mb-2">
									<span class="font-medium inline-flex items-center text-xs px-2 py-1 gap-1 rounded-md bg-primary/10 text-primary ring ring-inset ring-primary/25"><span class="truncate">Release</span></span
									><time datetime="2020-04-05T17:00:00.000Z" class="text-sm text-muted">Apr 6, 2020</time>
								</div>
								<h2 class="text-xl text-pretty font-semibold text-highlighted">Understanding how fetch works in Nuxt 2.12</h2>
								<div class="mt-1 text-base text-pretty text-toned">Explore different features of the fetch hook and learn a brand new way to bring data into Nuxt applications.</div>
								<div class="pt-4 mt-auto flex flex-wrap gap-x-3 gap-y-1.5">
									<div data-orientation="horizontal" class="relative group/user flex items-center gap-2">
										<span class="inline-flex items-center justify-center select-none rounded-full align-middle bg-elevated size-8 text-base shrink-0 transform transition-transform duration-200 group-hover/user:scale-115"><img width="32" height="32" alt="Krutie Patel avatar" data-nuxt-img="" srcset="https://github.com/Krutie.png 1x, https://github.com/Krutie.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/Krutie.png" /></span>
										<div class="">
											<a href="https://x.com/KrutiePatel" tabindex="-1" rel="noopener noreferrer" aria-label="Krutie Patel" twitter="KrutiePatel" class="focus:outline-none peer"><span class="absolute inset-0" aria-hidden="true"></span></a>
											<p class="font-medium text-default peer-hover:text-highlighted transition-colors text-sm">Krutie Patel</p>
										</div>
									</div>
								</div>
							</div>
						</article>

						<article data-orientation="vertical" class="relative group/blog-post rounded-lg overflow-hidden flex flex-col bg-elevated/50 ring ring-default transition hover:bg-elevated hover:ring-accented">
							<div class="relative overflow-hidden aspect-[16/9] w-full pointer-events-none">
								<img width="437" height="246" alt="Nuxt 2: From Terminal to Browser image" data-nuxt-img="" srcset="/assets/blog/nuxt-from-terminal-to-browser.png 1x, /assets/blog/nuxt-from-terminal-to-browser.png 2x" class="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover/blog-post:scale-110" src="/assets/blog/nuxt-from-terminal-to-browser.png" />
							</div>
							<div class="min-w-0 flex-1 flex flex-col p-4 sm:p-6">
								<a href="/blog/nuxtjs-from-terminal-to-browser" tabindex="-1" aria-label="Nuxt 2: From Terminal to Browser" class="focus:outline-none peer"><span class="absolute inset-0" aria-hidden="true"></span></a>
								<div class="flex items-center gap-2 mb-2">
									<span class="font-medium inline-flex items-center text-xs px-2 py-1 gap-1 rounded-md bg-primary/10 text-primary ring ring-inset ring-primary/25"><span class="truncate">Release</span></span>
									<time datetime="2019-06-02T17:00:00.000Z" class="text-sm text-muted">Jun 3, 2019</time>
								</div>
								<h2 class="text-xl text-pretty font-semibold text-highlighted">Nuxt 2: From Terminal to Browser</h2>
								<div class="mt-1 text-base text-pretty text-toned">How we changed the developer experience to stop switching between the terminal and browser.</div>
								<div class="pt-4 mt-auto flex flex-wrap gap-x-3 gap-y-1.5">
									<div data-orientation="horizontal" class="relative group/user flex items-center gap-2">
										<span class="inline-flex items-center justify-center select-none rounded-full align-middle bg-elevated size-8 text-base shrink-0 transform transition-transform duration-200 group-hover/user:scale-115"><img width="32" height="32" alt="Sébastien Chopin avatar" data-nuxt-img="" srcset="https://github.com/atinux.png 1x, https://github.com/atinux.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/atinux.png" /></span>
										<div class="">
											<a href="https://x.com/atinux" tabindex="-1" rel="noopener noreferrer" aria-label="Sébastien Chopin" twitter="atinux" class="focus:outline-none peer"><span class="absolute inset-0" aria-hidden="true"></span></a>
											<p class="font-medium text-default peer-hover:text-highlighted transition-colors text-sm">Sébastien Chopin</p>
										</div>
									</div>
								</div>
							</div>
						</article>

						<article data-orientation="vertical" class="relative group/blog-post rounded-lg overflow-hidden flex flex-col bg-elevated/50 ring ring-default transition hover:bg-elevated hover:ring-accented">
							<div class="relative overflow-hidden aspect-[16/9] w-full pointer-events-none">
								<img width="437" height="246" alt="Introducing Smart Prefetching image" data-nuxt-img="" srcset="/assets/blog/introducing-smart-prefetching.png 1x, /assets/blog/introducing-smart-prefetching.png 2x" class="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover/blog-post:scale-110" src="/assets/blog/introducing-smart-prefetching.png" />
							</div>
							<div class="min-w-0 flex-1 flex flex-col p-4 sm:p-6">
								<a href="/blog/introducing-smart-prefetching" tabindex="-1" aria-label="Introducing Smart Prefetching" class="focus:outline-none peer"><span class="absolute inset-0" aria-hidden="true"></span></a>
								<div class="flex items-center gap-2 mb-2">
									<span class="font-medium inline-flex items-center text-xs px-2 py-1 gap-1 rounded-md bg-primary/10 text-primary ring ring-inset ring-primary/25"><span class="truncate">Release</span></span
									><time datetime="2019-01-27T17:00:00.000Z" class="text-sm text-muted">Jan 28, 2019</time>
								</div>
								<h2 class="text-xl text-pretty font-semibold text-highlighted">Introducing Smart Prefetching</h2>
								<div class="mt-1 text-base text-pretty text-toned">Starting from Nuxt v2.4.0, Nuxt will automagically prefetch the code-splitted pages linked with a nuxt-link when visible in the viewport by default.</div>
								<div class="pt-4 mt-auto flex flex-wrap gap-x-3 gap-y-1.5">
									<div data-orientation="horizontal" class="relative group/user flex items-center gap-2">
										<span class="inline-flex items-center justify-center select-none rounded-full align-middle bg-elevated size-8 text-base shrink-0 transform transition-transform duration-200 group-hover/user:scale-115"><img width="32" height="32" alt="Sébastien Chopin avatar" data-nuxt-img="" srcset="https://github.com/Atinux.png 1x, https://github.com/Atinux.png 2x" role="img" class="h-full w-full rounded-[inherit] object-cover" src="https://github.com/Atinux.png" /></span>
										<div class="">
											<a href="https://x.com/atinux" tabindex="-1" rel="noopener noreferrer" aria-label="Sébastien Chopin" twitter="atinux" class="focus:outline-none peer"><span class="absolute inset-0" aria-hidden="true"></span></a>
											<p class="font-medium text-default peer-hover:text-highlighted transition-colors text-sm">Sébastien Chopin</p>
										</div>
									</div>
								</div>
							</div>
						</article>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>
