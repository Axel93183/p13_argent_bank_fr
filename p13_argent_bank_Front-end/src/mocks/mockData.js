/**
 * Sample user data.
 *
 * An array of user objects used for demonstration or testing purposes. Each user object contains the user's
 * first name, last name, email address, and password.
 *
 * @typedef {Object} User
 * @property {string} firstName - The first name of the user.
 * @property {string} lastName - The last name of the user.
 * @property {string} email - The email address of the user.
 * @property {string} password - The password of the user.
 *
 * @type {User[]}
 * @constant
 * @default
 * [
 *   {
 *     firstName: "Tony",
 *     lastName: "Stark",
 *     email: "tony@stark.com",
 *     password: "password123",
 *   },
 *   {
 *     firstName: "Steve",
 *     lastName: "Rogers",
 *     email: "steve@rogers.com",
 *     password: "password456",
 *   },
 * ]
 */

const users = [
  {
    firstName: "Tony",
    lastName: "Stark",
    email: "tony@stark.com",
    password: "password123",
  },
  {
    firstName: "Steve",
    lastName: "Rogers",
    email: "steve@rogers.com",
    password: "password456",
  },
];

export default users;
