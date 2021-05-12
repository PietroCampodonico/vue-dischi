new Vue({
    el: "#app",
    data: {
        albumList: [],
        genres: [],
        loading: false,
    },

    mounted() {
        
        setTimeout(() => {
            axios.get("https://flynn.boolean.careers/exercises/api/array/music")
                .then((resp) => {
                    this.loading = false
                    this.albumList.push(...resp.data.response)


                    this.albumList.map((element) => {
                        if(!this.genres.includes(element.genre)){
                            this.genres.push(element.genre)
                        }
                    })


                    console.log(this.genres)
                    this.loading = true
                })
        }, 3000)
            
    },
})