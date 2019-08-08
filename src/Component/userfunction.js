import axios from 'axios'

export const signup = regUser => {
    
return axios
.post('signup', {
Firstname: regUser.Firstname,
Lastname: regUser.Lastname,
Email: regUser.Email,
Password: regUser.Password,
ConfirmPassword: regUser.ConfirmPassword,
Mobilenumber: regUser.Mobilenumber,
})
.then(res => {
console.log(res)
})
}


export const login = user => {
return axios
.post('login', {
Email: user.Email,
Password: user.Password
})
.then(res => {
console.log('login')
localStorage.setItem('usertoken', res.data)
return res.data
})
.catch(err => {
console.log(err)
})
}


export const personalInfo = infoUser => {    
    return axios
    .post('personinfo', {
        
    Firstname: infoUser.Firstname,
    Lastname: infoUser.Lastname,
    Email: infoUser.Email,
    Verifyemail: infoUser.Verifyemail,
    Countrycode: infoUser.Countrycode,
    Mobilenumber: infoUser.Mobilenumber,
    CardType: infoUser.CardType,
    CardHolderName: infoUser.CardHolderName,
    CardNumber: infoUser.CardNumber,
    CardIdentificationNumber: infoUser.CardIdentificationNumber,
    ExpirationDate: infoUser.ExpirationDate,
    MonthYear: infoUser.MonthYear,
    BillingZipCode: infoUser.BillingZipCode
    })
    .then(res => {
    console.log(res)
    })
    }
