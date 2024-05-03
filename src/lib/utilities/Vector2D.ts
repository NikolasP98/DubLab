export class Vector2D {
	// === STATIC METHODS ===

	static fromArray(array) {
		return new Vector2D(array[0], array[1]);
	}

	static fromObject(array) {
		return new Vector2D(array.x, array.y);
	}

	static random(scale = 1) {
		const r = Math.random() * 2.0 * Math.PI;
		return new Vector2D(Math.cos(r) * scale, Math.sin(r) * scale);
	}

	static add(a, b) {
		return new Vector2D(a.x + b.x, a.y + b.y);
	}

	static subtract(a, b) {
		return new Vector2D(a.x - b.x, a.y - b.y);
	}

	static multiply(a, scale) {
		return new Vector2D(a.x * scale, a.y * scale);
	}

	static divide(a, scale) {
		return new Vector2D(a.x / scale, a.y / scale);
	}

	static clone(a) {
		return new Vector2D(a.x, a.y);
	}

	static octant(angle) {
		return Math.round(((angle + Math.PI) / (Math.PI / 4)) % 8);
	}
	static quadrant(vector) {
		const epsilon = 0.1;

		if (Math.abs(vector.x) > Math.abs(vector.y)) {
			return vector.x < 0 ? 0 : 2;
		} else {
			return vector.y < 0 ? 3 : 1;
		}
	}

	// === INSTANCE METHODS ===

	constructor(x = 0, y = 0) {
		this.x = x;
		this.y = y;
	}

	set(x, y) {
		this.x = x;
		this.y = y;
		return this;
	}

	setFromObject(obj) {
		this.x = obj.x;
		this.y = obj.y;
		return this;
	}

	// === GETTERS ===

	// toString(radix = 10) {
	// 	return `${this.x.toString(radix)},${this.y.toString(radix)}`;
	// }

	distance(v) {
		return Math.hypot(this.x - v.x, this.y - v.y);
	}

	magnitude() {
		return Math.hypot(this.x, this.y);
	}

	dot(v) {
		return v.x * this.x + v.y * this.y;
	}

	angle() {
		return Math.atan2(this.y, this.x);
	}

	sqrMag() {
		return this.x * this.x + this.y * this.y;
	}

	// === UNARY METHODS (SETTERS W/ NO INPUT) ===

	zero() {
		this.x = 0;
		this.y = 0;
		return this;
	}

	normalize() {
		let l = this.sqrMag();
		if (l > 0) {
			l = 1 / Math.sqrt(l);
		}
		this.x *= l;
		this.y *= l;
		return this;
	}

	// === SCALAR INPUT METHODS ===

	randomize(scale = 1) {
		const r = Math.random() * 2.0 * Math.PI;
		this.x = Math.cos(r) * scale;
		this.y = Math.sin(r) * scale;
		return this;
	}

	multiply(scale) {
		this.x *= scale;
		this.y *= scale;
		return this;
	}

	divide(scale) {
		this.x /= scale;
		this.y /= scale;
		return this;
	}

	rotate(angle) {
		const cos = Math.cos(angle);
		const sin = Math.sin(angle);
		const rx = this.x * cos - this.y * sin;
		this.y = this.x * sin + this.y * cos;
		this.x = rx;
		return this;
	}

	// === VECTOR INPUT METHODS ===

	add(v) {
		this.x += v.x;
		this.y += v.y;
		return this;
	}

	subtract(v) {
		this.x -= v.x;
		this.y -= v.y;
		return this;
	}

	sclAdd(v, scale) {
		this.x += v.x * scale;
		this.y += v.y * scale;
		return this;
	}
}
