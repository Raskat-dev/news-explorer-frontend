import { NewsExplorerApiData } from "./options";

class MyUserApi {
  constructor(options) {
    this._url = options.URL;
  }

  register(email, password, name) {
    return fetch(`${this._url}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name }),
    }).then((res) => {
      if (res.status === 409) {
        throw new Error("Пользователь с таким email уже зарегистрирован");
      }
      if (res.status !== 400) {
        return res.json();
      }
      throw new Error("Некорректно заполнено одно из полей");
    });
  }

  authorization(email, password) {
    return fetch(`${this._url}/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        if (res.status === 401 || res.status === 401) {
          throw new Error("Неправильные почта или пароль");
        }
      })
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          return data;
        } else {
          return;
        }
      });
  }

  getCurrentUser(jwt) {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      });
  }
}

export const UserApi = new MyUserApi(NewsExplorerApiData);
