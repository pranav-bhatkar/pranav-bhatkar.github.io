<script>
	import htmlcss_svg from '../../assets/svg/html_css.svg';
	import javascript_svg from '../../assets/svg/javascript.svg';
	import cross_platform_svg from '../../assets/svg/cross_platform.svg';
	import responsive_svg from '../../assets/svg/responsive.svg';
	import version_control_svg from '../../assets/svg/version_control.svg';
	const skills = [
		{
			id: 1,
			name: 'HTML/CSS',
			svg: htmlcss_svg,
			disc: 'I am proficient in these languages, which are used to build and style websites. I am able to write clean and well-structured code that adheres to web standards and is optimized for search engines.'
		},
		{
			id: 2,
			svg: javascript_svg,
			name: 'JavaScript',
			disc: 'I am proficient in this programming language, which is commonly used to add interactive elements and functionality to websites. I am able to write efficient and maintainable code that runs smoothly in modern browsers.'
		},
		{
			id: 3,
			svg: responsive_svg,
			name: 'Responsive design',
			disc: 'I am skilled in using techniques such as media queries and flexible layouts to create websites that work well on a variety of devices, including desktop and mobile.'
		},
		{
			id: 4,
			svg: cross_platform_svg,
			name: 'Cross platform development',
			disc: 'I have experience building websites and applications that work on multiple platforms, including desktop and mobile devices. I am proficient in using tools such as React Native and Flutter to create applications that are optimized for different screen sizes and resolutions.'
		},
		{
			id: 5,
			svg: version_control_svg,
			name: 'Version control',
			disc: 'I am familiar with version control systems such as Git, which allow me to track changes to my code and collaborate with other developers. I am able to use these tools effectively to manage my projects and ensure that my work is organized and easy to access.'
		}
	];
</script>

<section class="px-8 py-10">
	<h1 class="text-4xl font-bold font-ropa text-center">My Skills</h1>
	<div class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-14 lg:px-48">
		{#each skills as skill (skill.id)}
			<div class="text-center shadow-md bg-slate-800/70 py-10 px-6 my-6 rounded-2xl">
				<img class="w-[90%] py-4 mx-auto" src={skill.svg} alt={skill.name} />
				<h1 class="text-2xl font-bold font-ropa text-blue-400">{skill.name}</h1>
				<p class="text-base font-pl mt-2 text-slate-400 text-center">{skill.disc}</p>
			</div>
		{/each}
	</div>
</section>
