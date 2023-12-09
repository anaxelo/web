"use strict";
// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно (а местами и нужно) дописать свои тесты в файле es6.spec.js
// Можно менять параметры функций (например сделать им значения по умолчанию)

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    const arrFIO = fio.split(' ');
    return `${arrFIO[1]} ${arrFIO[0]}`
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array) {
    const mySet = new Set(array);
    return Array.from(mySet);
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
function calculateSalaryDifference(array) {
    if (!(array instanceof Array) || !array.length)
        return false;
    return Math.max(...array) / Math.min(...array);
}

// Реализуйте класс "словарь слов" (как толковый словарь)
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// Словарь - (string, string), и все это не null и не undefined
// * покройте класс тестами
class Dictionary {
    #map;
    constructor() {
        this.#map = new Map();
        this.size = 0;
    }
    set(key, value) {
        if (typeof key !== "string" || typeof value !== "string") {
            return false;
        }
        this.#map.set(key, value);
        this.size = this.#map.size;
        return true;
    }
    get(key) {
        return this.#map.get(key);
    }
    remove(key) {
        if (this.#map.delete(key)){
            this.size--;
            return true;
        }
        return false;
    }
    hasKey(key) {
        return this.#map.has(key);
    }
    clear() {
        this.#map.clear();
        this.size = 0;
    }
    isEmpty() {
        return this.size === 0;
    }
    keys() {
        return Array.from(this.#map.keys());
    }
    values() {
        return Array.from(this.#map.values());
    }
    keyValues() {
        return Array.from(this.#map.entries());
    }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};
