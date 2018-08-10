const peek = a => a[a.length - 1];

const morganAndTheString = (a, b) => {
    const output = [];
    const stackA = a.split('').reverse();
    const stackB = b.split('').reverse();
    while (stackA.length > 0 && stackB.length > 0) {
        const peekA = peek(stackA);
        const peekB = peek(stackB);
        if (peekA === peekB) {
            const restA = a.substr(a.length - stackA.length).concat('z');
            const restB = b.substr(b.length - stackB.length).concat('z');
            output.push(restA <= restB ? stackA.pop() : stackB.pop())
        } else {
            output.push(peekA < peekB ? stackA.pop() : stackB.pop())
        }
    }
    return output.concat(
        stackA.length === 0 ? 
            b.substr(b.length - stackB.length):
            a.substr(a.length - stackA.length) 
    ).join('');
}

// console.log(morganAndString('ZZYYZZZA', 'ZZYYZZZB'))
// console.log('ZZYYZZYYZZZAZZZB')
