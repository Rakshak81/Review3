class SpellChecker {
    constructor () {
       this.wordBank = [ 'a', 'how', 'hello', 'are', 'you', 'name', 'where']
    }
    spellCheck (input) {

       const  words = input.split(" ");

      const n = words.map((word) => { 
        if(this.wordBank.includes(word)){
            return word; 
        } else {
            return `~${word}~`
        }
    })
    
    return n.join(" ");




    //    if(this.wordBank.includes(input) ){
    //        return input; 
    //    } else {
    //        return `~${input}~`
    //    }
    }

}


module.exports = SpellChecker;