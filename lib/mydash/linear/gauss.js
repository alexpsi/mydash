const addScalar = (x, y) => x + y;
const divideScalar = (x, y) => x / y;
const multiply = (x, y) => x * y;
const unaryMinus = x => x * -1;
const abs = Math.abs;

const identityMatrixOf = n => 
	Array(n).fill(0).map((__, _idx) => 
    Array(n).fill(0).map((__, idx) => idx === _idx ? 1 : 0)
  )

// taken and adapted from mathjs 
const _inv =  (mat) =>  {
	const rows = mat.length;
	const cols = mat.length;

	let r, s, f, value, temp
	const A = mat.concat()

	// create an identity matrix which in the end will contain the
	// matrix inverse
	const B = identityMatrixOf(rows);

	// loop over all columns, and perform row reductions
	for (let c = 0; c < cols; c++) {
		// Pivoting: Swap row c with row r, where row r contains 
		// the largest element A[r][c]
		let ABig = abs(A[c][c])
		let rBig = c
		r = c + 1
		while (r < rows) {
			if (abs(A[r][c]) > ABig) {
				ABig = abs(A[r][c])
				rBig = r
			}
			r++;
		}
		if (ABig === 0) {
			throw Error('Cannot calculate inverse, determinant is zero')
		}
		r = rBig;
		if (r !== c) {
			temp = A[c]; A[c] = A[r]; A[r] = temp
			temp = B[c]; B[c] = B[r]; B[r] = temp
		} 

		// eliminate non-zero values on the other rows at column c
		const Ac = A[c]
		const Bc = B[c]
		for (r = 0; r < rows; r++) {
			const Ar = A[r]
			const Br = B[r]
			if (r !== c) {
				// eliminate value at column c and row r
				if (Ar[c] !== 0) {
					f = divideScalar(unaryMinus(Ar[c]), Ac[c])
					// add (f * row c) to row r to eliminate the value
					// at column c
					for (s = c; s < cols; s++) {
						Ar[s] = addScalar(Ar[s], multiply(f, Ac[s]))
					}
					for (s = 0; s < cols; s++) {
						Br[s] = addScalar(Br[s], multiply(f, Bc[s]))
					}
				}
			} else {
				// normalize value at Acc to 1,
				// divide each value on row r with the value at Acc
				f = Ac[c]
				for (s = c; s < cols; s++) {
					Ar[s] = divideScalar(Ar[s], f)
				}
				for (s = 0; s < cols; s++) {
					Br[s] = divideScalar(Br[s], f)
				}
			}
		}
	}
	return B;
}

module.exports = _inv;