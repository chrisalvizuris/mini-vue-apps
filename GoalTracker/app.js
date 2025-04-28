const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish the course',
            sdccLink: 'https://comic-con.org'
        };
    }
});

app.mount('#user-goal');