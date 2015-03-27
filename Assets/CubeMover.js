var speed : float = 5;
 
function Move () {
  transform.Translate(0, speed * Time.deltaTime, 0);
}