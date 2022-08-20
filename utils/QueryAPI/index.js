import CONFIG from "../config"

async function call(
  PATH,
  data
) {
  console.log(`${CONFIG.BASE_URL}/${PATH}`);
  const response = await fetch(`${CONFIG.BASE_URL}/${PATH}`, data)
  return response
}

export default {
  call
}