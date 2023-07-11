class Helpers {
    getUsersByAge(apiResponse, ageMin, ageMax) {
//const users = [];

// Your code here

        apiResponse.users.forEach(value => {
            console.log('value = ', value);

        });
    
    }

    getUsersByRole(response, role) {
        // const users = [];

        // Your code here
       return response.users
        .filter((user) => user.role === role)
        .map ((user) => user.name);

    }

    getUsersByCountry(response, country) {
       // const users = [];

        // Your code here
   return response.users
        .filter((user) => user.country === country)
        .map((user) => user.name);

    }

    getUsersByBalance(response,minBalance, maxBalance) {
         // const users = [];

        // Your code here
        return response.users
        .filter((user) => user.balance >= minBalance && user.balance <= maxBalance)
        .map((user) => user.name);

    } 
}

export default new Helpers()