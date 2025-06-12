export function getRandomIntWithoutRepeats(min: number = 0, max: number): number {
    const usedNumbers: Set<number> = new Set();
    if (min >= max) {
        throw new Error('Min must be less than max');
    }
    const randomInt = Math.floor(Math.random() * (max - min)) + min;
    if (usedNumbers.has(randomInt)) {
        return getRandomIntWithoutRepeats(min, max);
    } else {
        usedNumbers.add(randomInt);
        return randomInt;
    }
};