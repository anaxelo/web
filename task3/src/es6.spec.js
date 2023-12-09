const assert = require('assert');
const core = require('./es6');

describe('es6', () => {
    describe('#fioToName', () => {
        it('ФИО в Имя Фамилия корректно', () => {
            assert.strictEqual(core.fioToName('Иванов Иван Иванович'), 'Иван Иванов');
        });

        it('ФИ в Имя Фамилия', () => {
            assert.strictEqual(core.fioToName('Петров Петр'), 'Петр Петров');
        });
    });

    describe('#filterUnique', () => {
        it('массив с уникальными равен сам себе', () => {
            assert.deepStrictEqual(core.filterUnique([1, 2, 3]), [1, 2, 3]);
        });

        it('массив с неуникальными отфильтрован', () => {
            assert.deepStrictEqual(core.filterUnique([1, 1, 1, 1]), [1]);
        });

        it('пустой массив', () => {
            assert.deepStrictEqual(core.filterUnique([]), []);
        });
    });

    describe('#calculateSalaryDifference', () => {
        it('считает разницу корректно', () => {
            assert.strictEqual(core.calculateSalaryDifference([1, 2, 3]), 3);
        });

        it('на пустой массив возвращается falsy значение', () => {
            assert.strictEqual(!!core.calculateSalaryDifference([]), false);
        });
    });

    describe('#Dictionary', () => {
        it('экземпляр класса создается', () => {
            const dic = new core.Dictionary();
            assert.strictEqual(!!dic, true);
        });
        it('проверка основных методов словаря', () => {
            const dic = new core.Dictionary();
            dic.set("ключ_1", "значение_1");
            dic.set("ключ_2", "значение_2");
            dic.set("ключ_3", "значение_3");
            assert.strictEqual(dic.get("ключ_1"), "значение_1");
            assert.strictEqual(dic.get("ключ_3"), "значение_3");
            assert.strictEqual(dic.hasKey("ключ_3"), true);
            assert.strictEqual(dic.hasKey("ключ_4"), false);
            assert.strictEqual(dic.size, 3);
            assert.strictEqual(dic.isEmpty(), false);
            assert.deepStrictEqual(dic.keys(), ["ключ_1", "ключ_2", "ключ_3"]);
            assert.deepStrictEqual(dic.values(), ["значение_1", "значение_2", "значение_3"]);
            assert.deepStrictEqual(dic.keyValues(), [["ключ_1", "значение_1"], ["ключ_2", "значение_2"], ["ключ_3", "значение_3"]]);
            assert.strictEqual(dic.isEmpty(), false);
            dic.clear();
            assert.strictEqual(dic.get("ключ_3"), undefined);
            assert.strictEqual(dic.size, 0);
            assert.strictEqual(dic.isEmpty(), true);
        });
        it('проверка работы только со строками', () => {
            const dic = new core.Dictionary();
            dic.set(3, null);
            dic.set(undefined, "null");
            dic.set("1", "hello");
            dic.set("2");
            dic.set();
            assert.strictEqual(dic.size, 1);
            assert.strictEqual(dic.hasKey(3), false);
            assert.strictEqual(dic.hasKey(undefined), false);
        });
        it('проверка удаления', () => {
            const dic = new core.Dictionary();
            dic.set("ключ_1", "значение_1");
            dic.set("ключ_2", "значение_2");
            dic.set("ключ_3", "значение_3");
            assert.strictEqual(dic.size, 3);
            assert.deepStrictEqual(dic.keyValues(), [["ключ_1", "значение_1"], ["ключ_2", "значение_2"], ["ключ_3", "значение_3"]]);
            dic.remove("ключ_2");
            assert.strictEqual(dic.size, 2);
            assert.deepStrictEqual(dic.keyValues(), [["ключ_1", "значение_1"], ["ключ_3", "значение_3"]]);
        });
    });
});
