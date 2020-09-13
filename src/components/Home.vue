<template>
	<div class="intro">
		<h1>
			Welcome to Ghiblipediea! Here you can search for all things ghibli
			to get back info on movies, characters, loactions and more!
		</h1>
		<p>
			Start by entering a specific term that has to do with Studio Ghibli
			and then if oyud like to narrow your search down choose a subject.
		</p>
		<span>
			Disclaimer: all GIFs are provided via the giphy api and are based
			off what you put into the input.
		</span>
		<router-link tag="button" to="/search">
			Got it, let's search for all things Ghibli!
		</router-link>
	</div>
</template>

<script>
export default {
	name: 'Home',

	data: function() {
		return {
			newSubj: '',
		};
	},
	method: {},
};
</script>
<style scoped>
.intro {
	font-family: gh;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
}
p {
	font-size: 1.3rem;
}
button {
	width: 50%;
	font-size: 1.2rem;
	margin: 5% auto;
}
</style>
