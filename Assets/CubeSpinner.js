#pragma strict

function Start () {
	
}

function Update () {
	Debug.Log(transform.localPosition.x);
	transform.localPosition.x=2;
	transform.Rotate(1,0.5,0);
}