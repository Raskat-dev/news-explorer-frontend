import { NewsApiData } from "./options";

class NewsApi {
  constructor(options) {
    this._url = options.URL;
    this._key = options.KEY;
    this._from = options.FROM;
    this._to = options.TO;
    this._sortBy = options.SORTBY;
    this._pageSize = options.PAGESIZE;
  }

  getNews(q) {
    return fetch(`${this._url}q=${q}&from=${this._from}&to=${this._to}&sortBy=${this._sortBy}&pageSize=${this._pageSize}&apiKey=${this._key}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      });
  }
}

export const newsApi = new NewsApi(NewsApiData);
