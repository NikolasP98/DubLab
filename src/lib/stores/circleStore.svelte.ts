type Circle = {
	mainCircle: any;
};

type InitialData = {
	circleData: Circle[];
};

function createCircleStore(initial: Circle[]) {
	let mainCircle = $state(initial);
	let otherCircles = $state([]);

	function switchMainCircle(track) {}

	return {
		get circleContent() {
			return circleData;
		},
		set circleContent(newContent) {
			otherCircles = newContent;
		},
		get mainCircle() {
			return mainCircle;
		},
		set mainCircle(newTrack) {
			mainCircle = newTrack;
		}
	};
}

export const circleData = createCircleStore([]);
