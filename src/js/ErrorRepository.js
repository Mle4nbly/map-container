export default class ErrorRepository {
    constructor() {
        this.errorContainer = new Map([
            ['400', 'Некорректный запрос'],
            ['401', 'Не авторизован '],
            ['402', 'Необходима оплата'],
            ['403', 'Запрещено'],
            ['404', 'Не найдено']
        ]);
    };

    translate(code) {
        if (this.errorContainer.has(code)) {
            return this.errorContainer.get(code);
        } else {
            throw new Error('Unknown Error');
        }
    };
}

