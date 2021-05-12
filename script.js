new Vue({
    el: "#app",
    data: {
        myJam: [],
    },

    mounted() {

        axios.get("https://flynn.boolean.careers/exercises/api/array/music")
        .then((resp) => {
            this.myJam.push(resp.data.response)
        })
    },
})