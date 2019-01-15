pragma solidity ^0.4.17;

contract Signup {
    mapping(string => address) private newUsers;

    function addUser(string name, string age, string imageHash, string password, string email) public {
        address newUser = new User(name, age, imageHash, password, email);
        newUsers[email] = newUser;
    }

    function getUsers(string e) public view returns(address) {
        return newUsers[e];
    }

    function deletePermanant(string e) public {
        delete newUsers[e];
    }

    function deleteUser(string name, string age, string imageHash, string password, string email) public {
        delete newUsers[email];
        addUser(name, age, imageHash, password, email);
    }
}


contract User {
    string public name;
    string public age;
    string public imageHash;
    string public password;
    string public email;

    function User(string n, string a, string h, string p, string e) public {
      name = n;
      age = a;
      imageHash = h;
      password = p;
      email = e;
    }

    function getDetails() public view returns(
        string, string, string, string
        ) {
        return (
            name,
            age,
            email,
            imageHash
            );
    }

    function getPassword() public view returns(string) {
        return password;
    }
}
