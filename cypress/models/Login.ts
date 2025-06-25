import { faker } from '@faker-js/faker';

export default class LoginUser {
    username: string;
    invalidUsername: string;
    password: string;

    constructor() {
        const usernames = [
            "standard_user",
            "locked_out_user",
            "problem_user",
            "performance_glitch_user",
            "error_user",
            "visual_user"
            ];


        this.username = faker.helpers.arrayElement(usernames)
        this.invalidUsername  = faker.person.firstName()
        this.password = 'secret_sauce'
    }
}