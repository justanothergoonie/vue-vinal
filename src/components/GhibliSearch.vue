<template>
	<div class="ghibli">
		<img alt="Vue logo" src="../assets/logo.png" />
		<form v-on:submit.prevent>
			<select
				name="subject"
				id=""
				v-model="newSubject"
				@click="subjectSearch"
			>
				<option disabled value="">Subject</option>
				<option value="films">Films</option>
				<option value="people">People</option>
				<option value="locations">Locations</option>
				<option value="species">Species</option>
				<option value="vehicles">Vehicles</option>
			</select>
			<input
				type="text"
				name="character"
				placeholder="Something Ghibli"
				value="Howl"
			/>
			<button class="submit">Submit</button>
		</form>
	</div>
</template>

<script>
export default {
	name: 'GhibliSearch',
	data: function() {
		return {
			newSubject: '',
		};
	},
	methods: {
		subjectSearch: function subjectSearch() {
			this.$emit('subject-search', this.newSubject);
			console.log(this.newSubject);
		},
	},
};
</script>

<style lang="stylus" scoped></style>
