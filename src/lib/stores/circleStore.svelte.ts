function createCircleStore(initial){
    let circleContent = $state([])
    let mainCircle = $state(null)

    function switchMainCircle(track){

    }
    

    return {
        get circleContent(){
            return circleData
        },
        set circleContent(newContent) {
            circleContent = newContent
        },
        get mainCircle() {
            return mainCircle
        },
        set mainCircle(newTrack){
            mainCircle = newTrack
        }

    }
}

export const circleData = createCircleStore([]);
