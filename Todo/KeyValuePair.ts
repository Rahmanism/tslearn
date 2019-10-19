class KeyValuePair<TKey, TValue> {
    constructor(public key: TKey, public value: TValue) { }
}

class KeyValuePairPrinter<T, U> {
    constructor(protected pairs: KeyValuePair<T, U>[]) { }

    print() {
        this.pairs.forEach(pair => {
            console.log(`${pair.key}: ${pair.value}`);
        });
    }
}
