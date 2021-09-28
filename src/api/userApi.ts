import axios from 'axios';
import { User } from 'firebase/auth';

import apiBase from './api';
import { getAuthHeader } from '../firebase';

export interface UserModel {
    email: string
    name: string
    funds: string[] // The IDs of funds that the user is invested in and/or owns
}

/**
 * Attempts to create a new user with the given information.
 * @param email the (unique) email address of the new user
 * @param password the password of the new user
 * @param name the name of the new user
 */
export async function apiSignUpUser(
    email: string,
    password: string,
    name: string
) {
    const url = `${apiBase}/user/new/`

    const bodyFormData = new FormData();
    bodyFormData.append("email_address", email);
    bodyFormData.append("password", password);
    bodyFormData.append("name", name);
    return await axios.post(url, bodyFormData, {
        headers: { "Content-Type": "multipart/form-data" }
    });
}

/**
 * Authenticates the user, receiving back an access token and refresh token.
 * If successful, all future API calls will have the access token inserted
 * in the Authorization header.
 * @param email the email of the user being authenticated
 * @param password the password of the user being authenticated
 */
export async function apiLogInUser(email: string, password: string) {
    const url = `${apiBase}/token/new`;

    return await axios.post<{ refresh: string, access: string }>(url, {
        username: email,
        password
    });
}

/**
 * Loads profile information for an authenticated user.
 * @param user the auth user whose profile information will be loaded
 */
export const apiLoadProfile = async (user: User) => {
    const url = `${apiBase}/user/profile/`;
    const authHeader = await getAuthHeader(user);

    return await axios.post<UserModel>(url, null, authHeader);
};
