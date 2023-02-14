function timeWord(timeString) {
    let result
    let hours
    let minutes
    let postfix
    const TIMEWORDS = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
                     'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const TENS = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty']

    const list = timeString.split(':')
    const h = list[0]
    const m = list[1]
    
    //sets hours string and am/pm postfix string
    if (h > 12) {
        hours = TIMEWORDS[h - 13]
        postfix = 'pm'
    } else if (h < 12) {
        hours = TIMEWORDS[h - 1]
        postfix = 'am'
    } else { 
        hours = 'twelve'
        postfix = 'pm'
    }
    //sets minutes string
    if (m < 10) {
        minutes = `oh ${TIMEWORDS[m[1] - 1]}`
    } else if (m < 20) {
        minutes = TIMEWORDS[m - 1]
    } else {
        if (m[1] != 0) {
            minutes = `${TENS[m[0] - 2]} ${TIMEWORDS[m[1] - 1]}`
        } else {
            minutes = TENS[m[0] - 2]
        }
    }
    //special cases (noon/midnight and "o'clock" keyword with exact hours)
    if (m === '00') {
        if (h === '00') {
            return `${timeString}   midnight`
        } else if (h === '12') {
            return `${timeString}   noon`
        } else {
            minutes = `o'clock`
        }  
    }

    result = `${timeString}   ${hours} ${minutes} ${postfix}`
    console.log(result)
    return result
}
