 //static = keyword that defines properties or methods 
 //         that belong to a class itself rather than the
 //         objects created from that class (class owns anything static
 //               not the objects)
 

 //anything declared as static belongs to the class itself
 // and not any object created fron that class

 class User{
    static userCount = 0;

    constructor(username){
      this.username = username;
      User.userCount++;
    }
        greet() {
        console.log(`hello ${User2.username},Good morning`)
    }

    static getUserCount(){
      console.log(`There are ${User.userCount} users online`)
    }

 }  


 const User1 = new User("John");
 const User2 = new User("Jane");

 console.log(User1.username);  //display username : John
 console.log(User.userCount); //number of users
 console.log(User2.username);


User1.greet();
User.getUserCount();
