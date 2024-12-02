const Register = async ({role,username, fullName, email,password, mobileNumber , degree, specialization, startYear, endYear, companyName, designation, startDate , endDate , currentlyWorking }) => {

    let response = await fetch('http://localhost:8000/api/v1/admin/users', {
        method: 'post',
        body: JSON.stringify(
            {role,username, fullName, email, mobileNumber ,password, degree, specialization, startYear, endYear, companyName, designation, startDate , endDate , currentlyWorking }
        ),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: "include"
    });
    if (!response.ok) {
        return {response:await response.json(), status:response.status , statusText:response.statusText};
    }
    return response.json();

}

export { Register };