import ErrorRepository from "../js/ErrorRepository";

const errorTranslator = new ErrorRepository;

test('Test translate(code)', () => {
    expect('Не найдено').toBe(errorTranslator.translate('404'));
});

test('Test translate(code) with error', () => {
    expect(() => { errorTranslator.translate('555'); }).toThrow(Error);
});