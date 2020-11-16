import { NewsExplorerApiData } from "./options";

const token = localStorage.getItem("token");

class MyNewsApi {
  constructor(options) {
    this._url = options.URL;
  }

  get() {
    return fetch(`${this._url}/articles`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.status === 200) {
        return res.json();
      }
    });
  }

  add({ keyword, title, text, date, source, link, image }) {
    return fetch(`${this._url}/articles`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ keyword, title, text, date, source, link, image }),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        if (res.status === 400) {
          throw new Error("Не передано одно из полей");
        }
        if (res.status === 401) {
          throw new Error("Неправильный логин или пароль");
        }
      })
  }

  delete(id) {
    return fetch(`${this._url}/articles/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      if (res.status === 403) {
        throw new Error("У вас нет прав для удаления этой статьи");
      }
      if (res.status === 404) {
        throw new Error("Нет статьи с таким id");
      }
    });
  }
}

export const myNewsApi = new MyNewsApi(NewsExplorerApiData);
