var cubeToMove : roll;
 
function Start() {
  cubeToMove = GameObject.Find("Barrel").GetComponent(roll);
}
 
function OnMouseDown () {
  cubeToMove.Move();
  cubeToMove.speed -= 0.1;
  
  // Debug.Log(  );
}
 