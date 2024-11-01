import ErrorRepository from "./ErrorRepository.js";

const errorTranslator = new ErrorRepository;
console.log(errorTranslator.translate('404'));


