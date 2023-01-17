let potteryArray = []

export const toSellOrNotToSell = (potteryObject) => {
    if (potteryObject.cracked === false && potteryObject.weight >= 6) {
        potteryObject.price = 40
        potteryArray.push(potteryObject)
    } 
    else if (potteryObject.cracked === false && potteryObject.weight < 6) {
        potteryObject.price = 20
        potteryArray.push(potteryObject)
    }
    else {
        console.log('Cannot sell this pottery piece')
    }

    return potteryObject
}

export const usePottery = () => {
    return potteryArray
}