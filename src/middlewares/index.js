export const logger = (store) => (next) => (details) => {
    console.log(details);
    next(details);
}