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
