export class PathConstants {

    public static readonly ROOT = '';

    public static readonly ROOT_USER = 'users';

    public static readonly ROOT_AUTH = 'login';

    public static readonly SIGNUP = 'signup';

    public static readonly LOGOUT = 'logout';

    public static readonly PROJECT = 'projects';

    public static getPath(path: string) {
        return `/` + path;
    }

    public static getLoginPath() {
        return this.getPath(this.ROOT_AUTH);
    }


    public static getSignupPath() {
        return this.getPath(this.SIGNUP);
    }

    static getProfilePath() {
        return this.getPath(this.ROOT_USER);
    }

    static getLogoutPath() {
        return this.getPath(this.LOGOUT);
    }

    static getProjectPath() {
        return this.getPath(this.PROJECT);
    }
}