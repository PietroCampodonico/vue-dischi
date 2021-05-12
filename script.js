new Vue({
    el: "#app",
    data: {
        myJam: [],
        albumList: [],
    },

    mounted() {

        let mockArray = [];
        let filteredMockArray = [];


        axios.get("https://flynn.boolean.careers/exercises/api/array/music")
        .then((resp) => {
            mockArray.push(resp.data.response)
            this.myJam.push(...mockArray);

            
            this.myJam.map((element) => {
                element.forEach(album => {
                    filteredMockArray.push(album)
                });
            })
            
            this.albumList.push(...filteredMockArray)

            console.log(this.myJam)
            console.log(this.albumList)

        })
    },
})