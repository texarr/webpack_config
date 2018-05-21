(function all() {

    function solution(N, S) {
        var nrOfFamilies = 0;
        var columns = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K"];
        var reservationsTable = S.split(" ");
        reservationsTable.sort();

        for(var i = 0; i < N; i++) {
            for(var j = 0; j < columns.length; j++) {

                // check for reserved place
                if( i+columns[j] === reservationsTable[0] ) {
                    reservationsTable.shift();
                    // You can not sit here
                }else if
                // checking for 3 person reservation possibility
                ( (j === 0) || (j >= 3 && j <= 4) || (j === 7)) {
                    // possibility here, checking next places reservation
                    if( i+columns[j+1] !== reservationsTable[0] || i+columns[j+2] !== reservationsTable[0] ) {
                        // next two places are not reserved
                        nrOfFamilies++;
                    }
                }
            }
        }

        console.log(nrOfFamilies);

        return nrOfFamilies;
    }

    solution(2, '1A 2F 1C');

}());