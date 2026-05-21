function verifier(password){
    if(password === undefined || password === "" || password === null) return "Password rejected"
   else if(password!=null){
   if(password.length >=8) return "Password accepted";
   else return "Password rejected";
   }
}
module.exports = verifier