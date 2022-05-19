const SpellChecker = require('./spellChecker')
describe('SpellChecker', () => {
    describe('spellCheck',() => {
        it('returns the word if spelt correctly', () => {
            spellChecker = new SpellChecker;
            expect(spellChecker.spellCheck('a')).toBe('a');
        })

        it('returns the highlighted word with ~ if spelt incorrectly', () => {
            spellChecker = new SpellChecker;
            expect(spellChecker.spellCheck('b')).toBe('~b~');
        })

        it('returns the word if spelt correctly', () => {
            spellChecker = new SpellChecker;
            expect(spellChecker.spellCheck('how')).toBe('how');
        })



        it('returns the string if spelt correctly', () => {
            spellChecker = new SpellChecker;
            expect(spellChecker.spellCheck('how are you')).toBe('how are you');
        })
        // it('returns the highlighted word with ~ if spelt incorrectly', () => {
        //     spellChecker = new SpellChecker;
        //     expect(spellChecker.spellCheck('b')).toBe('~b~');
        // })
    })
})





// describe('Thermostat', () => {
//     describe('getTemperature', () => {
//       it('the default temperature is 20', () => {
//         thermostat = new Thermostat;
//         expect(thermostat.getTemperature()).toEqual(20);
//       })
//     })