//  PAIR PROGRAMMING EXERCISE.
//       1 DRIVER, 1 NAVIGATOR.
//       1 Exercise each. Use GitHub to share the code.
//       Less exercise, more complicated.
//       Ex1) Get and display, using async / await, the users from: https://jsonplaceholder.typicode.com/users
//       Ex2) Create a dropdown (<select>) that allows the user to select between name, username and email.
//            Create then a filter. When the user types in something, you should filter the user based on the input and on the value of the select.
//            Es.: select on NAME. Filter input = Glenna, only user id number 9 should remain
//       Ex3) Create a function that, from the list of users, extracts only the names
//       Ex4) Create a function that, from the list of users, creates an array of addresses as string and not as an object. Like:
//               {
//               "street": "Victor Plains",
//               "suite": "Suite 879",
//               "city": "Wisokyburgh",
//               "zipcode": "90566-7771",
//               "geo": {
//                 "lat": "-43.9509",
//                 "lng": "-34.4618"
//               }
//           Should become Victor Plains, Suite 879, Wisokyburgh (90566-7771)

//       Ex5) Add a button that sorts the list by name ascending / descending (ONE button)
//       Ex6) Add a link on each user, when clicked it must go to a detail page, where to user information are presented (from the API)
//       EXTRA)
//       Visualize on a Google Map plugin all the users (using lat & lng)

// let address = [];
// users().then((user) => {
// 	user.forEach((element) => {
// 		let arr = [];
// 		const { street, suite, city, zipcode } = element.address;
// 		arr.push(street, suite, city, zipcode);
// 		address.push(arr);
// 		return address;
// 	});
// 	console.log(address);
// 	return address;
// });
window.onload = () => {
	displayUser();
	displayUsername();
};

const rowUser = document.querySelector('.row.all-user');
const rowUsername = document.querySelector('.row.all-user-name');
let userArr = [];

const displayUser = async (
	filter = 'https://jsonplaceholder.typicode.com/users',
) => {
	let response = await fetch(filter);
	let users = await response.json();
	userArr = users;
	rowUser.innerHTML = '';

	userArr.forEach((user) => {
		rowUser.innerHTML += `<div class="col-sm">
          <div class="card" style="width: 18rem">
            <div class="card-body">
              <h5 class="card-title">${user.name}</h5>
              <p class="card-text">
                <p>ID: ${user.id}</p>
                <p>Username: ${user.username}</p>
                <p>Email: ${user.email}</p>
              </p>
            </div>
          </div>
        </div>`;
	});
};

const displayUsername = async (
	filter = 'https://jsonplaceholder.typicode.com/users',
) => {
	let response = await fetch(filter);
	let users = await response.json();

	users.forEach((user) => {
		rowUsername.innerHTML += `<div class="col-sm">
          <div class="card" style="width: 18rem">
            <div class="card-body">
              <h5 class="card-title">${user.name}</h5>
              </p>
            </div>
          </div>
        </div>`;
	});
};

const getUserInput = (e) => {
	let query = e.target.value;
	// let query = userInput.charAt(0).toUpperCase() + userInput.slice(1);
	if (query.length > 3) {
		let searchFilter = document.querySelector('.custom-select').value;
		filterUser(query, searchFilter);
	} else if (query.length == 0) {
		filterUser();
	}
};

// const capitalizeFirstLetter = (str) => {

// }

const filterUser = (query, filter) => {
	filter == 'name'
		? displayUser(`https://jsonplaceholder.typicode.com/users?name=${query}`)
		: filter == 'username'
		? displayUser(
				`https://jsonplaceholder.typicode.com/users?username=${query}`,
		  )
		: filter == 'email'
		? displayUser(`https://jsonplaceholder.typicode.com/users?email=${query}`)
		: displayUser();
};

const users = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json();

	return data;
};
users();
const display = async (fn) => {
	let data = await users();
	console.log(data);

	const list = document.querySelector('.list');
	list.innerHTML = '';
	data.forEach((element) => {
		console.log(element);
		const { name } = element;
		return (list.innerHTML += `<p><a href="userDetails.html?id =${element.id}">${name}</a></p>`);
	});
};
let address = [];
const getAddress = async () => {
	let data = await users();
	data.forEach((element) => {
		let arr = [];
		const { street, suite, city, zipcode } = element.address;
		arr.push(street, suite, city, zipcode);
		address.push(arr);
		return address;
	});
	console.log(address);
	return address;
};
getAddress();
const sortNames = async () => {
	let data = await users();

	let arr = [];

	data.forEach((element) => {
		// console.log(element.name);
		const { name } = element;
		arr.push(name);

		return arr;
	});
	console.log(arr);
	let names = await arr;
	const list = document.querySelector('.list-sort');
	if (names) {
		console.log(names.sort());
		names.forEach((element) => {
			// console.log(element.name);
			return (list.innerHTML += `<p>${element}</p>`);
		});
	}
	return arr;
};
