function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomCartId(existedOnly: boolean = false) {
    const max = existedOnly ? 50 : 100;
    return getRandomInt(1, max); // 50 carts exist in DummyJSON
}

export function getRandomUserId(existedOnly: boolean = true) {
    const max = existedOnly ? 208 : 300;
    return getRandomInt(1, max); // 208 users exist in DummyJSON
}
