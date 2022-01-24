var images= ["https://thumbs.dreamstime.com/b/cartoon-father-son-icon-over-white-background-colorful-design-vector-illustration-cartoon-father-son-icon-flat-design-169226123.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlfsByFnSgk0l0cxEIFEs61g2WibuhLJSTxA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuRKGa7tL_z8PuJtVcQm1c2RYz2WXZ2APjSQ&usqp=CAU"];
var names = ["Roshan","Raj naryan","Kusum devi","Nikhil",];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage =use [i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName =use [i];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
