let potteryPiece = {
    id: 1
}

export const makePottery = function (potteryShape, potteryWeight, potteryHeight) {
    return Object.create(null, {
        "shape": { 
            enumerable: true,
            value: potteryShape
        },
        "weight": {
            enumerable: true,
            value: potteryWeight
        },
        "height": {
            enumerable: true,
            value: potteryHeight,
        },
        "id": {
            enumerable: true,
            value: potteryPiece.id++
        }
    })
}