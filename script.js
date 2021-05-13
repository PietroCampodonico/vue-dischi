new Vue({
    el: "#app",
    data: {
        albumList: [],
        genres: [],
        loading: false,
        selectedGenre: "",
        filteredArray: [],
    },

    methods: {
        onChange() {

            if (this. selectedGenre == "") {
                this.filteredArray = this.albumList

                return
            }
            
            this.filteredArray = this.albumList.filter((album) =>  this.selectedGenre == album.genre)
        }   
    },

    mounted() {
        
        setTimeout(() => {
            axios.get("https://flynn.boolean.careers/exercises/api/array/music")
                .then((resp) => {
                    this.albumList.push(...resp.data.response)

                    this.albumList.map((album) => {
                        if(!this.genres.includes(album.genre)){
                            this.genres.push(album.genre)
                        }
                    })

                    this.filteredArray.push(...resp.data.response)

                    this.loading = true
                })
        }, 3000)
            
    },
})