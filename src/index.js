module.exports = function reverse (n) {
        const str =  Array.from(arguments).join('').split('').reverse().join('')
        return parseInt(str)
      }

