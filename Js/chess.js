let size = 8;
let board = "";
        for (let i = 0; i < size; i++) {
        for (let x = 0; x < size; x++) {
            if ((x +i ) % 2 == 0) {
                board += " ";
            }else {
                board += "#";
            }
            }
                board += "\n"
            }
        console.log(board);