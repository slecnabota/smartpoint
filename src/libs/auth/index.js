import {useMainStore } from '@/store/index.js';
import config from './config';
import router from '@/router/index.js';

class Auth {
    store;
    initStore() {
        this.store = useMainStore(); // Инициализируем store когда Pinia уже доступна
    }
    init() {
        const lsAuth = JSON.parse(localStorage.getItem('auth') || '{}');
        const { token, user } = lsAuth;

        if (token && user) {
            this.store.login({ user, token });
            this.apiLogin();
        }

        if (localStorage.getItem('auth')) {
            const lsAuth = JSON.parse(localStorage.getItem('auth') || '{}');
            const { token, user } = lsAuth;
            this.store.login({ user, token });
            this.apiLogin(); 
        }
    }

    login(user, token, redirect = true) {
        this.store.login({ user, token });
        this.apiLogin();

        if (redirect) {
            this.needAuth(false);
        }
    }

    loggedIn() {
        return Boolean(this.store.getToken);
    }

    logout(redirect = true) {
        this.store.logout();

        if (redirect) {
            this.needAuth(true);
        }
    }

    user(user) {
        if (user) {
            this.store.setUser(user);
        }

        return this.store.getUser;
    }

    needAuth(needAuth) {
        const routerName = config(needAuth ? 'loginRoute' : 'authRoute');

        if (typeof routerName === 'string') {
            const routeLocation = { name: routerName };
      
            if ((needAuth && !this.loggedIn()) || (!needAuth && this.loggedIn())) {
              if (router.hasRoute(routeLocation.name)) {
                router.push(routeLocation);
              } else {
                console.error(`Route "${routeLocation.name}" is not defined.`);
              }
            }
          }
    }


    apiLogin() {
        const apiAuthFunction = config('apiAuth');
        if (typeof apiAuthFunction === 'function') {
            apiAuthFunction(this.store.getToken);
        }
    }
}

export default Auth;
