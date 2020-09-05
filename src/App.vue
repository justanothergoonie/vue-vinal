<template>
	<div id="app">
		<div id="nav">
			<router-link to="/Ghibli-Api">Ghibli API</router-link>
		</div>

		<router-view
			@subject-search="subjectSearch"
			@specSub-search="specSubSearch"
			@do-search="doubleSearch"
			@gimmie-ghibli-giphy-gifs="gimmieGhibliGiphyGifs"
		/>
		<ghibli-gifs :gifs="gifs"></ghibli-gifs>
		<results :searchResults="searchResults" :specSub="specSub"></results>
	</div>
</template>
<script>
import Results from '@/components/Results.vue';
import GhibliGifs from '@/components/Ghibli-Gifs.vue';
import secrets from '@/secret.js';
export default {
	components: {
		GhibliGifs,
		Results,
	},
	data() {
		return {
			apiData: {
				films: [],
				people: [],
				locations: [],
				species: [],
				vehicles: [],
			},
			searchResults: [],
			subject: '',
			specSub: '',
			gifs: [],
		};
	},
	mounted() {
		var baseURI = 'https://ghibliapi.herokuapp.com/';
		this.$http.get(baseURI + 'films').then((response) => {
			this.apiData.films = response.data;
			// console.log(this.apiData.films);
		});
		this.$http.get(baseURI + 'people').then((response) => {
			this.apiData.people = response.data;
			// console.log(response.data);
		});
		this.$http.get(baseURI + 'locations').then((response) => {
			this.apiData.locations = response.data;
		});
		this.$http.get(baseURI + 'species').then((response) => {
			this.apiData.species = response.data;
		});
		this.$http.get(baseURI + 'vehicles').then((response) => {
			this.apiData.vehicles = response.data;
		});
	},

	methods: {
		doubleSearch: function() {
			this.gimmieGhibliGiphyGifs();
			this.doSearch();
		},

		gimmieGhibliGiphyGifs: function() {
			/**
			 * @param {String} specSub
			 **/

			const GIPHY_API =
				'https://api.giphy.com/v1/gifs/search?api_key=' +
				secrets.GIPHY_API_KEY;

			this.$http
				.get(GIPHY_API + '&q=' + this.specSub + ' ghibli')
				.then((response) => {
					this.gifs = response.data.data;
				})
				.catch(function(error) {
					console.warn(error);
				});
			console.log('gimmieGhibliGiphyGifs got gifs', this.gifs);
		},
		subjectSearch: function(newSubject) {
			console.log('app.vue got subject-search event', newSubject);
			this.subject = newSubject;
			console.log(this.apiData[this.subject]);
		},
		specSubSearch: function(newSpecSub) {
			console.log('app.vue got specSub-search event', newSpecSub);
			this.specSub = newSpecSub;
		},
		doSearch: function() {
			this.searchResults = this.apiData[this.subject].filter((item) => {
				// console.log("filtering a thing", item);
				for (let i in item) {
					if (typeof item[i] === 'string') {
						let cleanedProp = item[i].toLowerCase();
						let cleanedSearch = this.specSub.toLowerCase();
						if (cleanedProp.includes(cleanedSearch)) return true;
					}
				}
			});
			console.log(this.searchResults);
		},
	},
};
</script>
<style>
body {
	background-color: #05adef;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>
