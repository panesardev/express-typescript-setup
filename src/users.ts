export interface User {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
}

export const users: User[] = [{
	id: 1,
	email: 'mila_sutherland@gmail.com',
	firstName: 'Mila',
	lastName: 'sutherland'
}, {
	id: 2,
	email: 'sam_decker@gmail.com',
	firstName: 'Sam',
	lastName: 'Decker'
}, {
	id: 3,
	email: 'amina_morse@gmail.com',
	firstName: 'Amina',
	lastName: 'Morse'
}];

export const insertUser = (user: User) => {
	if (!users.filter(u => u.id === user.id)) {
		throw Error('Invalid User ID');
	}
	users.push(user);
}

export const updateUser = (user: User) => {
	if (!user.id) {
		throw Error('User ID required');
	}
	const i: number = users.indexOf(user);
	users[i] = user;
}

export const deleteUser = (id: number) => {
	if (!id) {
		throw Error('User ID required');
	}	
	const i: number = users.findIndex(user => user.id === id);
	users.splice(i, 1);
}

export const findById = (id: number) => {
	if (!id) {
		throw Error('User ID required');
	}
	return users.find(user => user.id === id);
}

export const findAll = () => {
	return users;
}