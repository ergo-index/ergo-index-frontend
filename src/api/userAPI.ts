import axios from 'axios';
import apiBase from './api';

export interface UserModel {
    email: string
    name: string
    funds: string[] // The IDs of funds that the user is invested in and/or owns
}

/**
 * Creates an axios interceptor that adds an authorization header
 * containing a JWT to every request.
 * @param token the token
 * @return the id of the axios interceptor (this can be used later to remove the interceptor)
 */
export const setupJwtInterceptor = (token: string): number => {
    return axios.interceptors.request.use(
        config => {
            config.headers.authorization = token
            return config
        }
    );
};

/**
 * Removes an axios interceptor with the given id.
 * @param id the id of the axios interceptor to remove
 */
export const teardownJwtInterceptor = (id: number) => {
    axios.interceptors.request.eject(id);
};

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
 * @param email the email address of the user to load the profile of
 */
export async function apiLoadProfile(email: string) {
    const url = `${apiBase}/user/profile/`;

    const bodyFormData = new FormData();
    bodyFormData.append("email_address", email);
    return await axios.post<UserModel>(url, bodyFormData);
}

