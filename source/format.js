'use strict'

/**
	* Найти максимальный размер каждой колонки
	*
	* @param {Array} input - Исходный массив
	* @param {number} columns - Количество колонок
	* @return {Array} - Массив, определяет размер каждой колонки
*/
const findLength = function(input, columns) {
	let columnsLength = [];
	for(let i = 0; i < input.length; i++) {
		const len = String(input[i]).length;
		const col = i % columns;
		(columnsLength[col] >= len) ? '' : columnsLength[col] = len;
	}
	return columnsLength;
}

/**
	* Добавить количество пробелов к элементу до максимальной длины колонки
	*
	* @param {string} data - Исходный элемент массива
	* @param {number} requiredLength - Максимальная длина колонки
	* @param {boolean} notFirst - Находится ли элемент в первой колонке (для разделения)
	* @return {string} - Элемент, дополненный пробелами
*/
const addSpaces = function(data, requiredLength, notFirst) {
	const needSpaces = requiredLength - data.length;
	if(notFirst) {
		data = ' ' + data;
	}
	for(let i = 0; i < needSpaces; i++) {
		data = ' ' + data;
	}
	return data;
}

/**
	* Форматирует массив элементов в строку
	*
	* @param {Array} input - Исходный массив
	* @param {number} columns - Количество колонок
	* @return {string} - Отформатированная строка
*/
const format = function(input, columns) {
	const columnsLength = findLength(input, columns);
	let output = '';	
	
	for(let i = 0; i < input.length; i++) {
		const col = i % columns;
		output += addSpaces(String(input[i]), columnsLength[col], col > 0);
		(col == columns - 1 && i < input.length -1) ? output += '\n' : '';
	}
	return output;
}