pragma solidity ^0.4.24;


contract myfirstcontract {
    
    
string private name;
    
uint private age;
    
    
function setname (string newname){
  
      name = newname;
        
    }
    
function getname(address myadress) returns (string)
{
        return name;
    }

    
}