function levelsToTable(inputBlack, inputWhite, gamma, outputBlack, outputWhite) {
    var cnt = 0;
    var segments = 256;
    var perc;
    var min = Math.min(inputBlack, inputWhite);
    var max = Math.max(inputBlack, inputWhite);
    var table = Array.call(null,{length:segments});
    var colorValue;
    var pos = 0;
    var outputDelta = outputWhite - outputBlack;
    var inputDelta = inputWhite - inputBlack;
    while(cnt <= 256) {
        perc = cnt/256;
        if(perc <= min){
            colorValue = outputBlack;
        } else if(perc >= max){
            colorValue = outputWhite;
        } else {
            colorValue = (outputBlack + outputDelta * Math.pow((perc - inputBlack) / inputDelta, 1 / gamma));
        }
        table[pos++] = colorValue;
        cnt += 256 / (segments - 1);
    }
    return table;
}

if (typeof module !== 'undefined' && 'exports' in module) {
	module.exports = levelsToTable;
}