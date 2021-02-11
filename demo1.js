var robot=require("robotjs");
console.log(robot);
//robot.moveMouseSmooth(500,300);
var id=setInterval(handleOpenBoard,1000);

function handleOpenBoard()
{
    let pos=robot.getMousePos();
    console.log(pos);
    if(pos.x==0&&pos.y==0)
    {
        clearInterval(id);
    }
}
