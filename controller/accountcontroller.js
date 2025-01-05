async function openaccount(req,res){
    const {fullname,fathername,
        mothername,Nationality,dateofbirth,birthplace,regioncity,Region,zone,Woreda,Kebele,Mobile,Gender,mritalstatus,accountnumber,accounttype,employdetail,username,email,password
    } = req.body;
    console.log({fullname,fathername,mothername,Nationality,dateofbirth,birthplace,Region,regioncity,zone,Woreda,Kebele,Mobile,Gender,mritalstatus,accountnumber,accounttype,employdetail,username,email,password})

}

module.exports = openaccount;