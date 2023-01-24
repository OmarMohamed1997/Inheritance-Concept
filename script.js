class Person
     {
        #fullName;
        #money;
        #sleepMode;
        #healthRate;
        constructor (fullName, money,sleepMode,healthRate)
            {
                this.#fullName = fullName;
                this.#money =  money;
                this.#sleepMode=sleepMode;
                this.#healthRate=healthRate;
                
            }
            get fullName(){
                return this.#fullName;
            }
            set fullName(name)
            {
                this.#fullName=name;
            }
            
            get money(){
                return this.#money;
            }
            set money(money){
                this.#money=money;
            }

            get sleepMode(){
                return this.#sleepMode;
            }
            set money(sleepMode){
                this.#sleepMode=sleepMode;
            }

            get healthRate(){
                return this.#healthRate;
            }
            set healthRate(healthRate){
                this.#healthRate=healthRate;
            }

        sleep (hours) 
            {  
                if(hours == 7)
                    {
                        this.sleepMode="happy"
                        console.log(this.sleepMode) ;
                    }
           
                else if(hours >7)
                     {
                        this.sleepMode="Lazy"
                        console.log(this.sleepMode); 
                     }   
            
                else if(hours<7)
                     {
                        this.sleepMode="Tired"
                        console.log(this.sleepMode); 
                     }
            
            }
        eat (meals) 
            { 
                if(meals==1)
                     {
                        this.healthRate=50;
                        console.log(this.healthRate);
                     }
                else if(meals==2)
                     {
                        this.healthRate=75;
                        console.log(this.healthRate);
                     }
                else if(meals==3)
                     {
                        this.healthRate=100;
                        console.log(this.healthRate);
                     }
            }
        buy(items)
            {
                this.money-=items*10;
                console.log(this.money);
            }
}
         
class Employee extends Person{
    #empId;
    #email;
    #workMood;
    #salary=1000;
    #isManager;
    constructor(fullName, money,sleepMode,healthRate,id,email,workMood,salary,isManager){
       
        super(fullName, money,sleepMode,healthRate);
        this.#empId=id;
        this.#email=email;
        this.#workMood=workMood;
        this.#salary=salary;
        this.#isManager=isManager;
       
        
    }
    
    get empId(){
        return this.#empId;
    }
    set  empId(id){
        this.#empId=id;
    }


    get email(){
        return this.#email;
    }
    set email(email){
        this.#email=email;
    }


    get workMood(){
        return this.#workMood;
    }
    set workMood(workMood){
        this.#workMood=workMood;
    }

    get salary(){
        return this.#salary;
    }
    set salary(salary){
        this.#salary=salary;
        if(salary<1000)
        {
            this.#salary=1000;
        }
    }


    get isManager(){
        return this.#isManager;
    }
    set isManager(isManager){
        this.#isManager=isManager;
    }

    work(hours)
    {  
        if(hours == 8)
            {
                this.sleepMode="happy"
                console.log(this.sleepMode) ;
            }
   
        else if(hours >8)
             {
                this.sleepMode="Tired"
                console.log(this.sleepMode); 
             }   
    
        else if(hours<8)
             {
                this.sleepMode="Lazy"
                console.log(this.sleepMode); 
             }
    
    }

}

class Office{
    #name;
    #employees;
    constructor(){
        this.#employees=[];
        this.#name="ITI";
    }

    get name()
    {
        return this.#name;
    }
    get employees()
    {
        return this.#employees;
    }

    hire(emp)
    {
        this.#employees.push(emp); 
    }

    fire(empId)
    {
        var flag =0;
        for(let i=0;i<this.#employees.length;i++)
        {
            if(empId==this.#employees[i].empId)
            {
                this.#employees.splice(i,1);
                flag=1;
            }
        }
        if(flag==0)
        {
            alert("Id of Employee is not Found");
        }
    }
    getEmployee(empId)
    {
        var flag=0;
        var emp
        for(let i=0;i<this.#employees.length;i++)
        {
            if(empId==this.#employees[i].empId)
            {
                
               emp=this.#employees[i];
               flag=1;
               break;
            }
        }
        if(flag==0)
        {
            alert("Id of Employee is not Found");
            emp=null;
        }
        return emp;
    }

    getAllEmployees(){
        if(this.#employees.length<1)
        {
            alert("There Is No Employees");
            emp=null;
        }
        else{
            emp= this.#employees;
        }
       return emp; 
    }
}
  

  
    var check=true;
    var choice;
    var emp;
    var iti = new Office();
    var cEmp;
    var isManager;
    
     
    function createEmp()
     {
         var empId = prompt("Please Enter  Id");
         var fullName = prompt("Please enter  fullName");
         var money = prompt("Please enter  money");
         var sleepMode = prompt("Please enter  sleepMode");
         var healthRate = prompt("Please enter  healthRate");
         while(healthRate<0 || healthRate>100)
         {
            healthRate = prompt("Please enter  healthRate between 0-100");
         }
         var workMood = prompt("Please enter  workMood ");
         var email=prompt("please ENter  Email ");
         var salary=prompt("please ENter  Salary ");
         while(salary<1000)
         {
            salary =prompt("please ENter  Salary greater than 1000");
         }
        return{
            fullName,
            money,
            sleepMode,
            healthRate,
            empId,
            email,
            workMood,
            salary
        }
     }
    do{

        choice = prompt("To Add New Employee Enter 'add'\n To fire Employee Enter 'fire'  \n  To get employee by id enter 'get' \n  To get All employees enter 'getAll'\n to quite Enter 'q' ");
        if(choice =="add")
        {
            var choice2=prompt("If manager press 'mngr' if normal employee press 'nrml'");
            
            if(choice2=="mngr")
            {
                cEmp=createEmp();
                isManager= true;
                emp = new Employee(cEmp.fullName,cEmp.money,cEmp.sleepMode,cEmp.healthRate,cEmp.empId,cEmp.email,cEmp.workMood,cEmp.salary,isManager);
                
                iti.hire(emp);
                console.log( iti.getAllEmployees());
            }
            else if(choice2=="nrml")
            {
                cEmp=createEmp();
                isManager= false;
                emp = new Employee(cEmp.fullName,cEmp.money,cEmp.sleepMode,cEmp.healthRate,cEmp.empId,cEmp.email,cEmp.workMood,cEmp.salary,isManager);
                iti.hire(emp);
                console.log( iti.getAllEmployees())
            }
            else
            {
                alert("you Entered incorrect choice");
            }
        }

        else if(choice == "fire")
        {
            let empid = prompt("please enter Id you want to delete it")
            iti.fire(empid);
            console.log( iti.getAllEmployees())
        }
        else if(choice == "get")
        {
            let empid = prompt("please enter Id you want to show it");
            emp=iti.getEmployee(empid);
        if(emp == null )
            {
                continue;
            }
        else if(emp.isManager == false)
                alert( "This is Employee Information not Manager \n"  
                           +"Employee Name "+emp.fullName 
                           + "\n Employee Email "+emp.email
                           + "\nEmployee salary "+emp.salary
                           +"\n Employee healthRate "+ emp.healthRate 
                     );
        else if(emp.isManager== true)
                {
                    alert( "This is Manager Information not Employee \n"  
                    +"Manager Name "+emp.fullName 
                    + "\n Manager Email "+emp.email
                    + "\n Manager healthRate "+ emp.healthRate 
                    );
                }
            
        }
        else if(choice == "getAll")
        {
            var txt = "Information Employees\n ";
            emp = iti.getAllEmployees();
            if(emp==null)
            {
                continue;
            }
            else
            {
                
                for(let i =0 ; i<emp.length;i++)
                {
                    if(emp[i].isManager)
                        txt += "Manager"+ (i+1) + "\n  Manager Name  "+  +emp[i].fullName + "\n Manager Id " +emp[i].empId +"\n Manager email " +emp[i].email+"\n" ;
                    else
                    txt += "Employee "+ (i+1) + "\n  Employee Name  "+  +emp[i].fullName + "\n Employee Id " +emp[i].empId +"\n Employee email " +emp[i].email+"\n Employee salary " +emp[i].salary+"\n";
                }

                alert(txt);
                
            }
        }

        else if (choice == "q")
        {
            check=false;
        }

    }while(check);