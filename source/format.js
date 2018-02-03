'use strict'

/**
	* Найти максимальный размер каждой колонки
	*
	* @param {Array[string]} input - Исходный массив
	* @param {number} columns - Количество колонок
	* @return {Array[number]} - Массив, определяет размер каждой колонки
*/
const findLength = function(input, columns) {
	let columnsLengths = [];
	input.forEach((item, index) => {
		const len = item.length;
		const col = index % columns;
		
		if (!columnsLengths[col]) {
			columnsLengths[col] = len;
		} else {
			columnsLengths[col] = Math.max(columnsLengths[col], len);
		}
	});
	return columnsLengths;
}

/**
	* Добавить количество пробелов к элементу до максимальной длины колонки
	*
	* @param {string} data - Исходный элемент массива
	* @param {number} requiredLength - Максимальная длина колонки
	* @param {boolean} doAppendDivider - Необходим ли пробел для разделения на колонки
	* @return {string} - Элемент, дополненный пробелами
*/
const addSpaces = function(data, requiredLength, doAppendDivider) {
	let needSpacesCount = requiredLength - data.length;
	if(doAppendDivider) {
		needSpacesCount++;
	}
	data = ' '.repeat(needSpacesCount) + data;
	return data;
}

/**
	* Форматирует массив элементов в строку
	*
	* @param {Array[number]} input - Исходный массив
	* @param {number} columns - Количество колонок
	* @return {string} - Отформатированная строка
*/
const format = function(input, columns) {
	const inputAsStrings = input.map(it => it.toString());
	const columnsLengths = findLength(inputAsStrings, columns);
	
	let output = '';
	inputAsStrings.forEach((item, index) => {
		const col = index % columns;
		output += addSpaces(item, columnsLengths[col], col > 0);
		
		const isLastItemInRow = col == columns - 1;
		const isLastItemEver = index == inputAsStrings.length -1;
		if (isLastItemInRow && !isLastItemEver) {
			output += '\n';
		}
	});

	return output;
}