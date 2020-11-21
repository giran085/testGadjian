const db = require('../3_databases/mysql')

 
// READ TABLE EMPLOYEES

// Get All Data Employees
const getAllDataEmployees = (req,res)=>{   
    let sql = 'select * from employees;'

    db.query(sql,(err,result)=>{
        try{
            if(err) throw err
            res.json({            
               error : false,
               data : result,              
            })

        }catch(err){
            res.json({
                error : true,
                message : err.message
            })
        }
    })
}

// Get Data Employees By ID
const getDataEmployeesById = (req, res) =>{
    const id = req.params.id
    const sql = 'select * from employees where id = ?;'
    
    db.query(sql, id, (err, result)=>{
        try{
            if(err)throw err 
            res.json({
                error : false,
                data : result
            })

        }catch(err){
            res.json({
                error : true,
                message : err.message
            })

        }
    })

}

// Created Data Employees
const createEmployees = (req, res) => {
    let data = req.body
    let sql = `insert into employees set ?;`

    db.query(sql, data, (err, result)=>{
        try{
            if(err)throw err 
            res.json({
                error : false,
                message : `Add Data Success`,
                data : {
                    name : data.name,
                    phone_number : data.phone_number,
                    jobtitle: data.jobtitle
                }
            })

        }catch(err){
            res.json({
                error : true,
                message : err.message
            })

        }

    })
}

// Update Data Employees
const updateEmployees = (req, res) =>{
    const id = req.params.id
    const data = req.body
    const sql = 'update employees set ? where id = ?;'

    db.query(sql, [data, id], (err, result)=>{
        try{
            if(err)throw err 
            res.json({
                error : false,
                message : `Edit Data Success`,
                data : data
            })

        }catch(err){
            res.json({
                error : true,
                message : err.message
            })

        }
    })

}

// Delete Data Employees
const deleteEmployees = (req, res) =>{
    let id = req.params.id
    let sql = `delete from employees where id = ?;`
    db.query(sql, id, (err, result)=>{
        try{
            if(err)throw err 
            let sql = `select * from employees;`
            db.query(sql, id, (err, hasil)=>{
                try{
                    res.json({
                        error : false,
                        message : `Delete Data Success`,
                        data : hasil
                    })

                }catch(err){
                    res.json({
                        error : true,
                        message : err.message
                        
                    })

                }

            })

        }catch(err){
            res.json({
                error : true,
                message : err.message
            })

        }

    })
}


// Count Reverse
const countReverse = (req, res) => {
    var data = req.body  
    var dataBaru = Object.values(data);
    var string = dataBaru.join()
    var splitString = string.split('');
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join('');
    console.log(joinArray)
    var result = joinArray

    res.json({
        error : false,
        message : `Reverse Success`,
        result : result
    })
    
    
}

// Count Fibonacci
const countFibonacci = (req, res) => {
    var data = req.body 
    var dataBaru = Object.values(data);
    var number = dataBaru.toString();
    let n1 = 0, n2 = 1, nextTerm;
    var resultArr = []   

    for (let i = 1; i <= number; i++) {
        // console.log(n1);
        resultArr.push(n1)
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    
    var result = resultArr.toString();

    res.json({
        error : false,
        message : `Fibonacci Success`,
        result : result
    })
    
}

// Count Combination
const countCombination = (req, res) => {
    var data = req.body 
    var dataBaru = Object.values(data);
    var String1 = dataBaru[0]
    var String2 = dataBaru[1]
    var n = Number(String1)
    var r = Number(String2)

    function product_Range(a,b) {
        var prd = a,i = a;
       
        while (i++< b) {
          prd*=i;
        }
        return prd;
      }
      
      
      function combinations(n, r) 
      {
        if (n==r) 
        {
          return 1;
        } 
        else 
        {
          r=(r < n-r) ? n-r : r;
          return product_Range(r+1, n)/product_Range(1,n-r);
        }
      }     
      
    //   console.log(combinations(n, r));
      
    res.json({
        error : false,
        message : `Combination Success`,
        result : combinations(n, r)
    })
    
    
}





module.exports={
    getAllDataEmployees,
    getDataEmployeesById,
    createEmployees,
    updateEmployees,
    deleteEmployees,
    countReverse,
    countFibonacci,
    countCombination
    
}