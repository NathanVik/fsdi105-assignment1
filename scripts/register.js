var users=[]

function registerUser(){
    console.log("Register button clicked");

    let email = $("#txtEmail").val();
    let password = $("#txtPassword").val();
    let firstname = $("#txtFirst").val();
    let lastname = $("#txtLast").val();
    let age = $("#txtAge").val();
    let address = $("#txtAddress").val();
    let phone = $("#txtPhone").val();
    let payment = $("#selPayment").val();
    let color = $("#selColor").val();

    var newUser = new User(email,password,firstname,lastname,age,address,phone,payment,color)
    
    users.push(newUser);
    console.log(newUser);
}

var c=0;
class User{
    constructor(email,password,firstname,lastname,age,address,phone,payment,color){
        this.email=email;
        this.password=password;
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
        this.address=address;
        this.phone=phone;
        this.payment=payment;
        this.color=color;
    }
}




function init(){
    console.log("Register Page");


    var nathan=new User("nathan@gmail.com","password","Nathan","Vik",32,"123 Main St","123-456-7890","Check","#bf35b5");

    users.push(nathan);
    console.log(nathan);
    console.log(users);

    //# means id
    // . means class
    // TAG
    //
    //
    $("#btnSave").click(registerUser);

}

window.onload = init;


// HW: get the values for the all controls

    // 2nd part: Create an object constructor for User
    // create a user object with data from the input fields
    // console log the object

//     <!-- 
//     email
//     password
//     first name
//     last name
//     age
//     address
//     phone
//     payment info
//     favorite color
//  -->