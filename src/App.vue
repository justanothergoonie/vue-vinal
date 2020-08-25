<template>
	<div id="app">
		<div id="nav">
			<router-link to="/Ghibli-Api">Ghibli API</router-link>
		</div>
		{{ info }}
		<router-view />
	</div>
</template>
<script>
export default {
	data() {
		return {
			info: null,
			subject: '',
		};
	},
	mounted() {
		// this.ghbiliSearch();
		// this.subjectSearch();

		var baseURI = 'https://ghibliapi.herokuapp.com/' + this.subject;
		this.$http.get(baseURI).then((response) => {
			console.log(baseURI);
			console.log('subject is', this.subject);
			this.info = response;
		});
	},
	methods: {
		subjectSearch: function(newSubject) {
			// console.log('hello', this.subject);
			this.subject = newSubject;
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
