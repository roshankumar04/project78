var images= ["https://i.pinimg.com/originals/f6/80/d7/f680d75feb92472c9d336628a06ede37.jpg","https://cdn5.vectorstock.com/i/1000x1000/89/84/father-with-baby-cartoon-vector-2248984.jpg","https://1.bp.blogspot.com/-Tb8v7iyOWIs/Vv1q8fi5RSI/AAAAAAAABPU/_710P842i-k_vN3A64Ctkl4ZwE4LDZeiQ/s1600/008_maths_1.jpg","https://media.istockphoto.com/vectors/two-boys-smile-and-hug-vector-id625457882?k=6&m=625457882&s=612x612&w=0&h=OFxWm_XMDYZgeKbPcVH4XfbQmWZofu9GIiEMEIsFykU"];
var names = ["roshan","Raj naryan","Kusum devi","Nikhil & vikas"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage =images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName =names[i];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
