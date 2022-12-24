<script>
	import img1 from '../../assets/images/img1.png';
	import Icon from '@iconify/svelte';
</script>

<section class="text-center h-[90vh] py-12 items-center">
	<div
		class="relative mx-auto  bg-gradient-to-b from-cyan-900 rounded-full  w-60 md:w-72 lg:w-80 h-60 md:h-72 lg:h-80 overflow-hidden"
	>
		<div class="absolute top-1 -left-[48%] md:-left-[48%] lg:-left-[38%] w-[200%]">
			<img class=" object-cover " alt="pranav bhatkar" src={img1} />
		</div>
	</div>
	<h2 class="mt-12 text-3xl lg:text-6xl font-bold text-sky-500  font-rubik">Pranav Bhatkar</h2>
	<h3 class="text-xl lg:text-2xl font-medium text-slate-300 py-2 font-ropa">
		Web & Cross Platform Developer
	</h3>
	<p
		class="text-sm md:text-base lg:text-base text-center text-gray-500 font-pl mx-auto leading-6 max-w-xl  px-10"
	>
		I am a web and cross platform developer with experience in building and maintaining websites and
		applications for a variety of platforms. My expertise lies in creating user-friendly and
		visually appealing designs that are optimized for performance.
	</p>
	<div class="mx-auto flex justify-center gap-2 py-6">
		<a href="https://twitter.com/Pranavbhatkar_" class="cursor-pointer">
			<Icon
				class="w-8 h-8  hover:scale-110 hover:text-blue-600 transition-[.3s] "
				icon="ant-design:twitter-circle-filled"
			/>
		</a>
		<a href="https://www.instagram.com/pranavbhatkar_" class="cursor-pointer">
			<Icon
				class="w-8 h-8  hover:scale-110 hover:text-rose-600 transition-[.3s] "
				icon="ant-design:instagram-filled"
			/>
		</a>
		<a href="https://www.linkedin.com/in/pranav-bhatkar-458102210/" class="cursor-pointer">
			<Icon
				class="w-8 h-8  hover:scale-110 hover:text-sky-600 transition-[.3s] "
				icon="ant-design:linkedin-filled"
			/>
		</a>
	</div>
</section>

<style>
</style>
