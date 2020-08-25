<template>
	<div class="ghibli">
		<h1>Ghibli</h1>
		<GhibliSearch @subject-search="subjectSearch" />
	</div>
</template>

<script>
import GhibliSearch from '@/components/GhibliSearch.vue';

export default {
	name: 'Ghibli-API',
	components: {
		GhibliSearch,
	},
	data: function() {
		return {
			newSubject: '',
		};
	},
	methods: {
		subjectSearch: function(newSubject) {
			this.newSubject = newSubject;
			console.log(this.newSubject);
		},
	},
};
</script>
