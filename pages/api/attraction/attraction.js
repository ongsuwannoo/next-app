import http from "../../../utils/QueryAPI"

async function getAllAttraction({ data }) {
  const res = await http.call('attractions', data)
  const attractions = await res.json()
  return attractions
}

async function getAttractionById({ data, _id }) {
  const res = await http.call(`attractions/${_id}`, data)
  const attractions = await res.json()
  return attractions
}

export default {
  getAllAttraction,
  getAttractionById
}
