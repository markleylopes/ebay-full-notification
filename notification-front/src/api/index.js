import axios from 'axios';
import qs from 'qs';

export const url = `${process.env.REACT_APP_API_URL}`;

export function fetchMany(pathService, filter) {
  return axios.get(`${pathService}?${qs.stringify(filter)}`)
    .then((res) => res.data);
}

export function fetchPaged(pathService, filter) {
  return axios.get(`${pathService}?${qs.stringify(filter)}`)
    .then((res) => res.data);
}

export function fetchOne(pathService, id) {
  return axios.get(`${pathService}/${id}`)
    .then((res) => res.data);
}

export function create(pathService, record) {
  return axios.post(`${pathService}`, record)
    .then((res) => res.data);
}

export function update(pathService, id, record) {
  return axios.patch(`${pathService}/${id}`, record)
    .then((res) => res.data);
}

export function remove(pathService, id) {
  return axios.delete(`${pathService}/${id}`)
    .then((res) => res.data);
}
