// const randNumGenerator = (lower, upper) => {
//     // get a randomDec
//     let randDec = Math.random(); // [0, 1)

//     // the number of possible choices to make
//     let possibleChoices = upper - lower;

//     // update the randDec interval
//     randDec *= possibleChoices; // [0, upper-lower)

//     // [lower, upper)
//     randDec += lower; // [0 + lower, upper-lower + lower) -> [lower, upper)

//     // return the floored result to get an int
//     return Math.floor(randDec);
// }

function updateUI(person) {
    let nameHeading1 = document.querySelector("#Name");
    nameHeading1.innerHTML = `Name - ${person.FirstName} ${person.LastName}`;
    let genderHeading1 = document.querySelector("#Gender");
    genderHeading1.innerHTML = `Gender - ${person.Gender}`;
    let locationHeading1 = document.querySelector("#Location");
    locationHeading1.innerHTML = `----Location---- <br> Street: ${person.Location.Street.Number} ${person.Location.Street.StreetName}. <br> City: ${person.Location.City}. <br> State: ${person.Location.State}. <br> Country: ${person.Location.Country}. <br> Postcode: ${person.Location.Postcode}. <br> Latitude/longtitude: ${person.Location.Coordinates.Latitude}, ${person.Location.Coordinates.Latitude}. <br> ------------------ <br> Timezone offset: ${person.Location.Timezone.Offset} [${person.Location.Timezone.Description}]. <br> ------------------`;
    let emailHeading1 = document.querySelector("#Email");
    emailHeading1.innerHTML = `Email - ${person.Email}`;
    let BirthdayHeading1 = document.querySelector("#Birthday");
    BirthdayHeading1.innerHTML = `Date of birth - ${person.DateOfBirth}`;

    let personImg = document.querySelector("#PersonImage")
    personImg.src = person.Image;
}

function updateUI2(person2) {
    let nameHeading2 = document.querySelector("#Name2");
    nameHeading2.innerHTML = `Name - ${person2.FirstName} ${person2.LastName}`;
    let genderHeading2 = document.querySelector("#Gender2");
    genderHeading2.innerHTML = `Gender - ${person2.Gender}`;
    let locationHeading2 = document.querySelector("#Location2");
    locationHeading2.innerHTML = `----Location---- <br> Street: ${person2.Location.Street.Number} ${person2.Location.Street.StreetName}. <br> City: ${person2.Location.City}. <br> State: ${person2.Location.State}. <br> Country: ${person2.Location.Country}. <br> Postcode: ${person2.Location.Postcode}. <br> Latitude/longtitude: ${person2.Location.Coordinates.Latitude}, ${person2.Location.Coordinates.Latitude}. <br> ------------------ <br> Timezone offset: ${person2.Location.Timezone.Offset} [${person2.Location.Timezone.Description}]. <br> ------------------`;
    let emailHeading2 = document.querySelector("#Email2");
    emailHeading2.innerHTML = `Email - ${person2.Email}`;
    let BirthdayHeading2 = document.querySelector("#Birthday2");
    BirthdayHeading2.innerHTML = `Date of birth - ${person2.DateOfBirth}`;

    let personImg2 = document.querySelector("#PersonImage2")
    personImg2.src = person2.Image;
}

function updateUI3(person3) {
    let nameHeading3 = document.querySelector("#Name3");
    nameHeading3.innerHTML = `Name - ${person3.FirstName} ${person3.LastName}`;
    let genderHeading3 = document.querySelector("#Gender3");
    genderHeading3.innerHTML = `Gender - ${person3.Gender}`;
    let locationHeading3 = document.querySelector("#Location3");
    locationHeading3.innerHTML = `----Location---- <br> Street: ${person3.Location.Street.Number} ${person3.Location.Street.StreetName}. <br> City: ${person3.Location.City}. <br> State: ${person3.Location.State}. <br> Country: ${person3.Location.Country}. <br> Postcode: ${person3.Location.Postcode}. <br> Latitude/longtitude: ${person3.Location.Coordinates.Latitude}, ${person3.Location.Coordinates.Latitude}. <br> ------------------ <br> Timezone offset: ${person3.Location.Timezone.Offset} [${person3.Location.Timezone.Description}]. <br> ------------------`;
    let emailHeading3 = document.querySelector("#Email3");
    emailHeading3.innerHTML = `Email - ${person3.Email}`;
    let BirthdayHeading3 = document.querySelector("#Birthday3");
    BirthdayHeading3.innerHTML = `Date of birth - ${person3.DateOfBirth}`;

    let personImg3 = document.querySelector("#PersonImage3")
    personImg3.src = person3.Image;
}

function updateUI4(person4) {
    let nameHeading4 = document.querySelector("#Name4");
    nameHeading4.innerHTML = `Name - ${person4.FirstName} ${person4.LastName}`;
    let genderHeading4 = document.querySelector("#Gender4");
    genderHeading4.innerHTML = `Gender - ${person4.Gender}`;
    let locationHeading4 = document.querySelector("#Location4");
    locationHeading4.innerHTML = `----Location---- <br> Street: ${person4.Location.Street.Number} ${person4.Location.Street.StreetName}. <br> City: ${person4.Location.City}. <br> State: ${person4.Location.State}. <br> Country: ${person4.Location.Country}. <br> Postcode: ${person4.Location.Postcode}. <br> Latitude/longtitude: ${person4.Location.Coordinates.Latitude}, ${person4.Location.Coordinates.Latitude}. <br> ------------------ <br> Timezone offset: ${person4.Location.Timezone.Offset} [${person4.Location.Timezone.Description}]. <br> ------------------`;
    let emailHeading4 = document.querySelector("#Email4");
    emailHeading4.innerHTML = `Email - ${person4.Email}`;
    let BirthdayHeading4 = document.querySelector("#Birthday4");
    BirthdayHeading4.innerHTML = `Date of birth - ${person4.DateOfBirth}`;

    let personImg4 = document.querySelector("#PersonImage4")
    personImg4.src = person4.Image;
}

function updateUI5(person5) {
    let nameHeading5 = document.querySelector("#Name5");
    nameHeading5.innerHTML = `Name - ${person5.FirstName} ${person5.LastName}`;
    let genderHeading5 = document.querySelector("#Gender5");
    genderHeading5.innerHTML = `Gender - ${person5.Gender}`;
    let locationHeading5 = document.querySelector("#Location5");
    locationHeading5.innerHTML = `----Location---- <br> Street: ${person5.Location.Street.Number} ${person5.Location.Street.StreetName}. <br> City: ${person5.Location.City}. <br> State: ${person5.Location.State}. <br> Country: ${person5.Location.Country}. <br> Postcode: ${person5.Location.Postcode}. <br> Latitude/longtitude: ${person5.Location.Coordinates.Latitude}, ${person5.Location.Coordinates.Latitude}. <br> ------------------ <br> Timezone offset: ${person5.Location.Timezone.Offset} [${person5.Location.Timezone.Description}]. <br> ------------------`;
    let emailHeading5 = document.querySelector("#Email5");
    emailHeading5.innerHTML = `Email - ${person5.Email}`;
    let BirthdayHeading5 = document.querySelector("#Birthday5");
    BirthdayHeading5.innerHTML = `Date of birth - ${person5.DateOfBirth}`;

    let personImg5 = document.querySelector("#PersonImage5")
    personImg5.src = person5.Image;
}

function updateUI6(person6) {
    let nameHeading6 = document.querySelector("#Name6");
    nameHeading6.innerHTML = `Name - ${person6.FirstName} ${person6.LastName}`;
    let genderHeading6 = document.querySelector("#Gender6");
    genderHeading6.innerHTML = `Gender - ${person6.Gender}`;
    let locationHeading6 = document.querySelector("#Location6");
    locationHeading6.innerHTML = `----Location---- <br> Street: ${person6.Location.Street.Number} ${person6.Location.Street.StreetName}. <br> City: ${person6.Location.City}. <br> State: ${person6.Location.State}. <br> Country: ${person6.Location.Country}. <br> Postcode: ${person6.Location.Postcode}. <br> Latitude/longtitude: ${person6.Location.Coordinates.Latitude}, ${person6.Location.Coordinates.Latitude}. <br> ------------------ <br> Timezone offset: ${person6.Location.Timezone.Offset} [${person6.Location.Timezone.Description}]. <br> ------------------`;
    let emailHeading6 = document.querySelector("#Email6");
    emailHeading6.innerHTML = `Email - ${person6.Email}`;
    let BirthdayHeading6 = document.querySelector("#Birthday6");
    BirthdayHeading6.innerHTML = `Date of birth - ${person6.DateOfBirth}`;

    let personImg6 = document.querySelector("#PersonImage6")
    personImg6.src = person6.Image;
}


function loadPerson() {
    //load API url as a const
    const url = `https://randomuser.me/api/?inc=gender,name,email,dob,location,picture`;

    fetch(url)
        //use a callback function when the async code is done
        .then(function (response) {
            return response.json()
        })

        .then(function (jsonData) {
            console.log(jsonData);
            let person = {
                FirstName: jsonData.results[0].name.first,
                LastName: jsonData.results[0].name.last,
                Gender: jsonData.results[0].gender,
                Image: jsonData.results[0].picture.medium,
                Location: {
                    Street: {
                        Number: jsonData.results[0].location.street.number,
                        StreetName: jsonData.results[0].location.street.name,
                    },
                    City: jsonData.results[0].location.city,
                    State: jsonData.results[0].location.state,
                    Country: jsonData.results[0].location.country,
                    Postcode: jsonData.results[0].location.postcode,
                    Coordinates: {
                        Latitude: jsonData.results[0].location.coordinates.latitude,
                        Longitude: jsonData.results[0].location.coordinates.longitude
                    },
                    Timezone: {
                        Offset: jsonData.results[0].location.timezone.offset,
                        Description: jsonData.results[0].location.timezone.description
                    }
                },
                Email: jsonData.results[0].email,
                DateOfBirth: jsonData.results[0].dob.date
            };

            console.log(person);

            //call update UI function
            updateUI(person);
        });
}

function loadPerson2() {
    //load API url as a const
    const url = `https://randomuser.me/api/?inc=gender,name,email,dob,location,picture`;

    fetch(url)
        //use a callback function when the async code is done
        .then(function (response2) {
            return response2.json()
        })

        .then(function (jsonData2) {
            console.log(jsonData2);
            let person2 = {
                FirstName: jsonData2.results[0].name.first,
                LastName: jsonData2.results[0].name.last,
                Gender: jsonData2.results[0].gender,
                Image: jsonData2.results[0].picture.medium,
                Location: {
                    Street: {
                        Number: jsonData2.results[0].location.street.number,
                        StreetName: jsonData2.results[0].location.street.name,
                    },
                    City: jsonData2.results[0].location.city,
                    State: jsonData2.results[0].location.state,
                    Country: jsonData2.results[0].location.country,
                    Postcode: jsonData2.results[0].location.postcode,
                    Coordinates: {
                        Latitude: jsonData2.results[0].location.coordinates.latitude,
                        Longitude: jsonData2.results[0].location.coordinates.longitude
                    },
                    Timezone: {
                        Offset: jsonData2.results[0].location.timezone.offset,
                        Description: jsonData2.results[0].location.timezone.description
                    }
                },
                Email: jsonData2.results[0].email,
                DateOfBirth: jsonData2.results[0].dob.date
            };

            console.log(person2);

            //call update UI function
            updateUI2(person2);
        });
}

function loadPerson3() {
    //load API url as a const
    const url = `https://randomuser.me/api/?inc=gender,name,email,dob,location,picture`;

    fetch(url)
        //use a callback function when the async code is done
        .then(function (response3) {
            return response3.json()
        })

        .then(function (jsonData3) {
            console.log(jsonData3);
            let person3 = {
                FirstName: jsonData3.results[0].name.first,
                LastName: jsonData3.results[0].name.last,
                Gender: jsonData3.results[0].gender,
                Image: jsonData3.results[0].picture.medium,
                Location: {
                    Street: {
                        Number: jsonData3.results[0].location.street.number,
                        StreetName: jsonData3.results[0].location.street.name,
                    },
                    City: jsonData3.results[0].location.city,
                    State: jsonData3.results[0].location.state,
                    Country: jsonData3.results[0].location.country,
                    Postcode: jsonData3.results[0].location.postcode,
                    Coordinates: {
                        Latitude: jsonData3.results[0].location.coordinates.latitude,
                        Longitude: jsonData3.results[0].location.coordinates.longitude
                    },
                    Timezone: {
                        Offset: jsonData3.results[0].location.timezone.offset,
                        Description: jsonData3.results[0].location.timezone.description
                    }
                },
                Email: jsonData3.results[0].email,
                DateOfBirth: jsonData3.results[0].dob.date
            };

            console.log(person3);

            //call update UI function
            updateUI3(person3);
        });
}

function loadPerson4() {
    //load API url as a const
    const url = `https://randomuser.me/api/?inc=gender,name,email,dob,location,picture`;

    fetch(url)
        //use a callback function when the async code is done
        .then(function (response4) {
            return response4.json()
        })

        .then(function (jsonData4) {
            console.log(jsonData4);
            let person4 = {
                FirstName: jsonData4.results[0].name.first,
                LastName: jsonData4.results[0].name.last,
                Gender: jsonData4.results[0].gender,
                Image: jsonData4.results[0].picture.medium,
                Location: {
                    Street: {
                        Number: jsonData4.results[0].location.street.number,
                        StreetName: jsonData4.results[0].location.street.name,
                    },
                    City: jsonData4.results[0].location.city,
                    State: jsonData4.results[0].location.state,
                    Country: jsonData4.results[0].location.country,
                    Postcode: jsonData4.results[0].location.postcode,
                    Coordinates: {
                        Latitude: jsonData4.results[0].location.coordinates.latitude,
                        Longitude: jsonData4.results[0].location.coordinates.longitude
                    },
                    Timezone: {
                        Offset: jsonData4.results[0].location.timezone.offset,
                        Description: jsonData4.results[0].location.timezone.description
                    }
                },
                Email: jsonData4.results[0].email,
                DateOfBirth: jsonData4.results[0].dob.date
            };

            console.log(person4);

            //call update UI function
            updateUI4(person4);
        });
}

function loadPerson5() {
    //load API url as a const
    const url = `https://randomuser.me/api/?inc=gender,name,email,dob,location,picture`;

    fetch(url)
        //use a callback function when the async code is done
        .then(function (response5) {
            return response5.json()
        })

        .then(function (jsonData5) {
            console.log(jsonData5);
            let person5 = {
                FirstName: jsonData5.results[0].name.first,
                LastName: jsonData5.results[0].name.last,
                Gender: jsonData5.results[0].gender,
                Image: jsonData5.results[0].picture.medium,
                Location: {
                    Street: {
                        Number: jsonData5.results[0].location.street.number,
                        StreetName: jsonData5.results[0].location.street.name,
                    },
                    City: jsonData5.results[0].location.city,
                    State: jsonData5.results[0].location.state,
                    Country: jsonData5.results[0].location.country,
                    Postcode: jsonData5.results[0].location.postcode,
                    Coordinates: {
                        Latitude: jsonData5.results[0].location.coordinates.latitude,
                        Longitude: jsonData5.results[0].location.coordinates.longitude
                    },
                    Timezone: {
                        Offset: jsonData5.results[0].location.timezone.offset,
                        Description: jsonData5.results[0].location.timezone.description
                    }
                },
                Email: jsonData5.results[0].email,
                DateOfBirth: jsonData5.results[0].dob.date
            };

            console.log(person5);

            //call update UI function
            updateUI5(person5);
        });
}

function loadPerson6() {
    //load API url as a const
    const url = `https://randomuser.me/api/?inc=gender,name,email,dob,location,picture`;

    fetch(url)
        //use a callback function when the async code is done
        .then(function (response6) {
            return response6.json()
        })

        .then(function (jsonData6) {
            console.log(jsonData6);
            let person6 = {
                FirstName: jsonData6.results[0].name.first,
                LastName: jsonData6.results[0].name.last,
                Gender: jsonData6.results[0].gender,
                Image: jsonData6.results[0].picture.medium,
                Location: {
                    Street: {
                        Number: jsonData6.results[0].location.street.number,
                        StreetName: jsonData6.results[0].location.street.name,
                    },
                    City: jsonData6.results[0].location.city,
                    State: jsonData6.results[0].location.state,
                    Country: jsonData6.results[0].location.country,
                    Postcode: jsonData6.results[0].location.postcode,
                    Coordinates: {
                        Latitude: jsonData6.results[0].location.coordinates.latitude,
                        Longitude: jsonData6.results[0].location.coordinates.longitude
                    },
                    Timezone: {
                        Offset: jsonData6.results[0].location.timezone.offset,
                        Description: jsonData6.results[0].location.timezone.description
                    }
                },
                Email: jsonData6.results[0].email,
                DateOfBirth: jsonData6.results[0].dob.date
            };

            console.log(person6);

            //call update UI function
            updateUI6(person6);
        });
}

let NamesOnlyButton = document.querySelector("#NameAndGenderSearch");
NamesOnlyButton.onclick = function (event) {
    event.preventDefault();

    let locationHeading1 = document.querySelector("#Location");
    locationHeading1.innerHTML = ``;
    let BirthdayHeading1 = document.querySelector("#Birthday");
    BirthdayHeading1.innerHTML = ``;

    let locationHeading2 = document.querySelector("#Location2");
    locationHeading2.innerHTML = ``;
    let BirthdayHeading2 = document.querySelector("#Birthday2");
    BirthdayHeading2.innerHTML = ``;

    let locationHeading3 = document.querySelector("#Location3");
    locationHeading3.innerHTML = ``;
    let BirthdayHeading3 = document.querySelector("#Birthday3");
    BirthdayHeading3.innerHTML = ``;

    let locationHeading4 = document.querySelector("#Location4");
    locationHeading4.innerHTML = ``;
    let BirthdayHeading4 = document.querySelector("#Birthday4");
    BirthdayHeading4.innerHTML = ``;

    let locationHeading5 = document.querySelector("#Location5");
    locationHeading5.innerHTML = ``;
    let BirthdayHeading5 = document.querySelector("#Birthday5");
    BirthdayHeading5.innerHTML = ``;

    let locationHeading6 = document.querySelector("#Location6");
    locationHeading6.innerHTML = ``;
    let BirthdayHeading6 = document.querySelector("#Birthday6");
    BirthdayHeading6.innerHTML = ``;
}

let randomBtn = document.querySelector("#random_btn");
randomBtn.onclick = function (event) {
    //prevent default form behavior
    event.preventDefault();

    loadPerson();
    loadPerson2();
    loadPerson3();
    loadPerson4();
    loadPerson5();
    loadPerson6();
}

loadPerson();
loadPerson2();
loadPerson3();
loadPerson4();
loadPerson5();
loadPerson6();