 
        /*document.write(567+2346);
        document.getElementById("heading").innerHTML=3456+23453;
        var a= window.prompt("enter your name:");
        alert("your name is "+ a);
        console.log(56790+456);
        var age=window.prompt("Enteryour age:");
       function myfun(){
            if(age>=18){
                document.write(a + "is adult");
                console.log("Adult");
            }
            else{
                document.write(a+"is not adult");
                console.log("not Adult")
            }
        }*/

       /* var bappaditya ={
            lastname: "bera", age:"22", favcolor:"blue", favfood:"chickensoup"
        }
        function bappaditya(lastname, age, favcolor,favfood){
            this.lastname=lastname;
            this.age=age;
            this.favcolor=favcolor;
            this.favfood=favfood;

        }
        var a= bappaditya.age;
        document.write(a)
        
        document.getElementById("heading").style.color="blue";
            var myage;
        
        function show() {
            var urname = window.prompt("enter your Name");
            var myage = document.getElementById("inputage").value;
            document.write("you are :");
            console.log(typeof myage);
            console.log(myage);

             if (myage>= 18) {
                document.write("adult");
                console.log("Adult");
            }
            else {
                document.write("not adult");
                console.log("not Adult")
            }
        document.write(urname);
        } */
        //colorchanging Buttons
        var name=prompt("Enter your name:");
        y=document.getElementById("outid");
        console.log("why");
        console.log(name.length);
        console.log(typeof name.length );
        if(name.lenght>0){
           alert("your name is"+name)
        }
        else{
            y.innerHTML="there is no input "+name;
        }
        function colorChange(){
            x=document.getElementById("btncolor");
            x.innerHTML="Aditya Bera";
            x.className="clr";
        }
        function norMalize(){
          x=document.getElementById("btncolor");
          x.innerHTML="Bappaditya Bera";
          x.className="colorchange";
        }
        function galonein(){
           a=document.getElementById("gallery1");
           p=document.getElementById("display");
           p1=document.getElementById("para1");
           P2=document.getElementById("para2");
           p3=document.getElementById("para3");
           p.innerHTML="photo1";
           a.className="galstyle";
        }

        function galtwoin() {
            p.innerHTML="photo2";
            a.className = "galstyle1";
        }
        function galthreein() {
            p.innerHTML="photo3";
            a.className = "galstyle2";
        }
        function normalForm(){
            p.innerHTML="Display";
            a.className="gal1";
        }
 
