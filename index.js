function superbowlWin(array){
    const wins = array.find(array => array.result === 'W')
    return !!wins ? wins.year : undefined
}