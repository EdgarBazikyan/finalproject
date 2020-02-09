
//! Setup function fires automatically
function setup() {

        var socket = io();

        var side = 15;

        var matrix = [];

        //! Getting DOM objects (HTML elements)
        let grassCountElement = document.getElementById('grassCount');
        let grassEaterCountElement = document.getElementById('grassEaterCount');
        let predatorCountElement = document.getElementById('predatorCount');
        let menCountElement = document.getElementById('menCount');
        let menEaterCountElement = document.getElementById('menEaterCount');
        let panteraCountElement = document.getElementById('panteraCount');

        //! adding socket listener on "data" <-- name, after that fire 'drawCreatures' function 

        socket.on("data", drawCreatures);

        function drawCreatures(data) {
                weather = data.weather;
                //! after getting data pass it to matrix variable
                matrix = data.matrix;
                grassCountElement.innerText = data.grassCounter;
                grassEaterCountElement.innerText = data.grassEaterCounter;
                predatorCountElement.innerText = data.predatorCounter;
                menCountElement.innerText = data.menCounter;
                menEaterCountElement.innerText = data.menEaterCounter;
                panteraCountElement.innerText = data.panteraCounter;
                //! Every time it creates new Canvas woth new matrix size
                createCanvas(matrix[0].length * side, matrix.length * side)
                //! clearing background by setting it to new grey color
                background('#acacac');
                //! Draw grassCount and grassEaterCount to HTML (use DOM objects to update information, yes, and use .innerText <- function)

                //! Drawing and coloring RECTs
                for (var i = 0; i < matrix.length; i++) {
                        for (var j = 0; j < matrix[i].length; j++) {
                                if (matrix[i][j] == 1) {
                                        if (data.weather == "summer") {
                                                fill("green");
                                        } else if (data.weather == "autumn") {
                                                fill("#c4e38f");
                                        } else if (data.weather == "winter") {
                                                fill("white");
                                        } else if (data.weather == "spring") {
                                                fill("#81b825");
                                        }
                                } else if (matrix[i][j] == 2) {
                                        if (data.weather == "summer") {
                                                fill("orange");
                                        } else if (data.weather == "autumn") {
                                                fill("#c7c74a");
                                        } else if (data.weather == "winter") {
                                                fill("#fcfc8b");
                                        } else if (data.weather == "spring") {
                                                fill("#ffff0f");
                                        }
                                } else if (matrix[i][j] == 0) {
                                        fill('#acacac');

                                } else if (matrix[i][j] == 3) {
                                        if (data.weather == "summer") {
                                                fill("red");
                                        } else if (data.weather == "autumn") {
                                                fill("#ed4640");
                                        } else if (data.weather == "winter") {
                                                fill("#fcc2c0");
                                        } else if (data.weather == "spring") {
                                                fill("#9e1f1b");
                                        }
                                } else if (matrix[i][j] == 4) {
                                        if (data.weather == "summer") {
                                                fill("#967527");
                                        } else if (data.weather == "autumn") {
                                                fill("#b59853");
                                        } else if (data.weather == "winter") {
                                                fill("#e6b591");
                                        } else if (data.weather == "spring") {
                                                fill("#fcd67c");
                                        }
                                }
                                else if (matrix[i][j] == 5) {
                                        if (data.weather == "summer") {
                                                fill("#2200ff");
                                        } else if (data.weather == "autumn") {
                                                fill("#9195f2");
                                        } else if (data.weather == "winter") {
                                                fill("#7d83ff");
                                        } else if (data.weather == "spring") {
                                                fill("#070c85");
                                        }
                                }
                                else if (matrix[i][j] == 6) {
                                        if (data.weather == "summer") {
                                                fill("black");
                                        } else if (data.weather == "autumn") {
                                                fill("#515152");
                                        } else if (data.weather == "winter") {
                                                fill("#adadad");
                                        } else if (data.weather == "spring") {
                                                fill("#7c7c80");
                                        }
                                }
                                rect(j * side, i * side, side, side);
                        }
                }
        }
}
// document.addEventListener()'