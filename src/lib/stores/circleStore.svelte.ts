import type { Artist } from '$lib/types';

type Circle = {
	id: number;

	data: Artist;
	// position: any;
	// size: any;
};

export function createCircleStore() {
	let allCircles = $state<Circle[]>([]);
	let mainCircle = $state<Circle | null>(null);

	function switchMainCircle(newCircle: Circle) {
		console.log(`switching to ${newCircle.data.name}`);
	}

	function clear(): Circle[] {
		allCircles = [];
	}

	return {
		switchMainCircle,
		clear,
		allCircles,
		mainCircle
		// get allCircles() {
		// 	return allCircles;
		// }
	};
}

// export const circleStore = createCircleStore();
