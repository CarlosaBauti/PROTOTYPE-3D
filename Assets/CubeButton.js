
var cubeToMove : CubeMover;
 
function Start() {
  cubeToMove = GameObject.Find("Mover").GetComponent(CubeMover);
}
 
function OnMouseDown () {
  transform.localScale.y = 0.2;
  cubeToMove.Move();
  cubeToMove.speed -= 0.1;
  
  // Debug.Log(  );
}
 
function OnMouseUp () {
  transform.localScale.y = 0.6;
}