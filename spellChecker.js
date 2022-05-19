class SpellChecker {
    constructor () {
       this.wordBank = [ 'a', 'how', 'hello', 'are', 'you', 'name', 'where']
    }
    spellCheck (input) {

       const  words = input.split(" ");

      const n = words.map((word) => { 
        //   const m = word.toLowerCase();
        if(this.wordBank.includes(word.toLowerCase())){
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