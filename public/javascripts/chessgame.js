var fens = {
	"20161022":"7r/p3pPq1/1n3b2/5B2/2p3Pk/2p1Q3/P6P/5R1K",
	"20161023":"2q1k3/p2bpR2/3p2Bp/B1pP4/p1Pb2P1/7P/4Q3/1r5K"
}

var game = new Chess();
var pgnEl = $('#pgn');
var fenEl = $('#fen');
var moves = $('#moves');
var whosPlaying = "w";
var counterOfMoves = 0;
var allMovesDone = "";	

var onDrop = function(source, target, piece, newPos, oldPos, orientation) {
	var pieceName = piece.slice(1, piece.length);
	var lastMove = pieceName + target;
	//If white are playing:
	if (piece.charAt(0) == whosPlaying) {
  		counterOfMoves++;
  		allMovesDone += counterOfMoves + ") " + lastMove;
	}else{
		allMovesDone += " " + lastMove;
	}
	
	
	console.log("Source: " + source);
	console.log("Target: " + target);
	console.log("Piece: " + piece);
	console.log("New position: " + ChessBoard.objToFen(newPos));
	console.log("Old position: " + ChessBoard.objToFen(oldPos));
	console.log("Orientation: " + orientation);
	console.log("--------------------");
	// see if the move is legal
	var move = game.move({
	from: source,
	to: target,
	promotion: 'q' // NOTE: always promote to a queen for example simplicity
	});

	fenEl.html(window.board.fen());
	pgnEl.html(lastMove);
	moves.html(allMovesDone);
};


window.board = ChessBoard('board', {
  draggable: true,
  dropOffBoard: 'trash',
  sparePieces: true,
  onDrop: onDrop,
  position: fens["20161023"]
});
$('#startBtn').on('click', function() {
  	window.board.position(fens["20161023"]);
  	fenEl.html("");
	pgnEl.html("");
	moves.html("");
});
$('#clearBtn').on('click', function(){
	window.board.clear;
	fenEl.html("");
	pgnEl.html("");
	moves.html("");
});