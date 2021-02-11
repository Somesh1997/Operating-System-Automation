var robot=require("robotjs");
var fs=require("fs");
console.log(robot);
//robot.moveMouseSmooth(500,300);
var id=setTimeout(handleOpenBoard,2000)

function handleOpenBoard()
{
   robot.moveMouseSmooth(69,850);
   robot.mouseClick();
   robot.typeString(" openboard");
   robot.keyTap("enter");
   setTimeout(writeHi,2000);
}
function writeHi()
{
    robot.moveMouseSmooth(400,250);
    robot.mouseToggle("down","left");
    robot.dragMouse(400,450);
    robot.mouseToggle("up","left");

    robot.moveMouseSmooth(400,350);
    robot.mouseToggle("down","left");
    robot.dragMouse(600,350);
    robot.mouseToggle("up","left");
    
    robot.moveMouseSmooth(600,250);
    robot.mouseToggle("down","left");
    robot.dragMouse(600,450);
    robot.mouseToggle("up","left");

    robot.moveMouseSmooth(700,250);
    robot.mouseToggle("down","left");
    robot.dragMouse(900,250);
    robot.mouseToggle("up","left");

    robot.moveMouseSmooth(800,250);
    robot.mouseToggle("down","left");
    robot.dragMouse(800,450);
    robot.mouseToggle("up","left");

    robot.moveMouseSmooth(700,450);
    robot.mouseToggle("down","left");
    robot.dragMouse(900,450);
    robot.mouseToggle("up","left");

    robot.moveMouseSmooth(1440,20);
    robot.mouseClick();
    setTimeout(handleTelegram,2000);
}

function handleTelegram()
{
        robot.moveMouseSmooth(69,850);
        robot.mouseClick();
        robot.typeString(" Telegram");
        robot.keyTap("enter");
   //     setTimeout(writeHi,2000);
        robot.moveMouseSmooth(68,46);
        robot.mouseClick();
        robot.typeString("Sona");
        robot.keyTap("enter");
        robot.typeString("Hello Sona");
        robot.keyTap("enter");
        setTimeout(openChrome,2000);

}

function openChrome(){
        robot.moveMouseSmooth(69,850);
        setTimeout(function(){
            robot.mouseClick();
            robot.typeString(" chrome");
            robot.keyTap("enter");
            setTimeout(openTabs,2000);
        },2000)
       
}
function openTabs()
{
    var rdata=fs.readFileSync("./chrome.json");
    var tabs=JSON.parse(rdata);
    for(let i=0;i<tabs.length;i++)
    {
        for(let j=0;j<tabs[i].length;j++)
        {
            robot.typeString(tabs[i][j]);
            robot.keyTap("enter");
            // for opening New Tab
            if(j<tabs[i].length-1)
            {
                robot.keyToggle("control","down");
                robot.keyTap("t");
                robot.keyToggle("control","up");
            }
            else if(i<tabs.length-1){
                robot.keyToggle("control","down");
                robot.keyTap("n");
                robot.keyToggle("control","up");
            }

        }
    }
    setTimeout(openNotePad,2000);
}
function openNotePad()
{
    robot.moveMouseSmooth(69,850);
    setTimeout(function(){
        robot.mouseClick();
        robot.typeString(" NotePad");
        robot.keyTap("enter");
        setTimeout(writeNotePad,2000);
    },2000)
}

function writeNotePad()
{
    robot.keyToggle("control","down");
    robot.keyTap("+");
    robot.keyToggle("control","up");
    robot.typeString("Operating System Automation Done . ");
    robot.typeString("This Project is ready to use ");
}



