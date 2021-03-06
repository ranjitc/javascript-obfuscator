import { assert } from 'chai';

import { NumberUtils } from '../../../src/utils/NumberUtils';

describe('NumberUtils', () => {
    describe('toHex', () => {
        describe('Variant #1: number `0`', () => {
            const number: number = 0;
            const expectedHexString = '0x0';

            let hexString: string;

            before(() => {
                hexString = NumberUtils.toHex(number);
            });

            it('should create a string with hexadecimal value from a given decimal number', () => {
                assert.equal(hexString, expectedHexString);
            });
        });

        describe('Variant #2: number `10`', () => {
            const number: number = 10;
            const expectedHexString = '0xa';

            let hexString: string;

            before(() => {
                hexString = NumberUtils.toHex(number);
            });

            it('should create a string with hexadecimal value from a given decimal number', () => {
                assert.equal(hexString, expectedHexString);
            });
        });

        describe('Variant #3: number `17`', () => {
            const number: number = 17;
            const expectedHexString = '0x11';

            let hexString: string;

            before(() => {
                hexString = NumberUtils.toHex(number);
            });

            it('should create a string with hexadecimal value from a given decimal number', () => {
                assert.equal(hexString, expectedHexString);
            });
        });

        describe('Variant #4: number `536870912`', () => {
            const number: number = 536870912;
            const expectedHexString = '0x20000000';

            let hexString: string;

            before(() => {
                hexString = NumberUtils.toHex(number);
            });

            it('should create a string with hexadecimal value from a given decimal number', () => {
                assert.equal(hexString, expectedHexString);
            });
        });

        describe('Variant #5: bigint number `10n`', () => {
            // @ts-ignore
            const number: bigint = 10n;
            const expectedHexString = '0xan';

            let hexString: string;

            before(() => {
                hexString = NumberUtils.toHex(number);
            });

            it('should create a string with hexadecimal value from a given bigint number', () => {
                assert.equal(hexString, expectedHexString);
            });
        });
    });

    describe('isCeil', () => {
        describe('given number is a ceil', () => {
            const number: number = 4;
            const expectedResult: boolean = true;

            let result: boolean;

            before(() => {
                result = NumberUtils.isCeil(number);
            });

            it('should return true', () => {
                assert.equal(result, expectedResult);
            });
        });

        describe('given number is a float', () => {
            const number: number = 4.5;
            const expectedResult: boolean = false;

            let result: boolean;

            before(() => {
                result = NumberUtils.isCeil(number);
            });

            it('should return false', () => {
                assert.equal(result, expectedResult);
            });
        });

        describe('bigint number', () => {
            // @ts-ignore
            const number: bigint = 10n;
            const expectedResult: boolean = true;

            let result: boolean;

            before(() => {
                result = NumberUtils.isCeil(number);
            });

            it('should return true', () => {
                assert.equal(result, expectedResult);
            });
        });
    });
});
