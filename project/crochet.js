//yarn and hook table

function printTable()
{
    var make_line = "<td>" + this.yarn + "</td>" ;
    var hook_line = "<td>" + this.hook + "</td>";
    var project_line = "<td>" + this.project + "</td>";

    var row = "<tr>" + make_line + hook_line + project_line + "</tr>";
    document.write(row);

}

   




var yarn3 = new table("Yarn Weigth: 3 ", "Hook Sizes:G/6 (4 mm) to I/9 (5.5 mm)", "Projects: Baby Blankets, Amigurumi & Garments");
var yarn4 = new table("Yarn Weight: 4 ", " Hook Sizes: H/8 (5 mm) to K/10 (6.5 mm)", "Projects: Blankets, Hats, Scarves, etc." );
var yarn5 = new table("Yarn Weight: 5", "Hook Sizes: K/10.5 (6.5 mm) to M/13 (9 mm)", "Projects: Blankets, Scarves, & Rugs");



//array for objects to appear
var Y3Arr = [yarn3.yarn, yarn3.hook, yarn3.project];
for(var counter = 0; counter < Y3Arr.length; counter++)
{
    document.write(Y3Arr[counter] + "<br>"  );
}


var Y4Arr = [yarn4.yarn, yarn4.hook, yarn4.project]
for(var counter = 0; counter < Y4Arr.length; counter++)
{
    document.write(Y4Arr[counter] + "<br>"  );
}


var Y5Arr = [yarn5.yarn, yarn5.hook, yarn5.project]
for(var counter = 0; counter < Y5Arr.length; counter++)
{
    document.write(Y4Arr[counter] + "<br>"  );
}




//Objects Defined
function table(yarn, hook, project)
{
     this.yarn = yarn;
    this.hook = hook;
    this.project = project;

    this.printTable = this.printTable;
}