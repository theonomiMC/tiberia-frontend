export const getPrevPage = (data, currentIdx) => {
  let nextIdx = Math.min(currentIdx + 1, data.length - 1)
  if (currentIdx === data.length - 1) {
    return;
  }
  return data[nextIdx]
}

export const getNextPage = (data, currentIdx) => {
  let prevIdx = Math.max(currentIdx - 1, 0)
  if (currentIdx === 0) {
    return;
  }
  return data[prevIdx]
}

export const truncate = (str, n) => {
  return str.length >= n ? str.substring(0, n) + ' ...' : str + ' ...'
}

export const getUnique = (data, field) => {
  let filteredData = data.map(el => el[field])
  return [...new Set(filteredData.flat())]
}
const formatNumber = (num) => {
  // hundreds
  if (num < 1000) {
    return num
  }
  // thousands
  else if (num >= 1000 && num <= 999_999) {
    return parseFloat(num / 1000).toFixed(2) + 'K'
  }
  // millions
  else if (num >= 1_000_000 && num <= 999_999_999) {
    return parseFloat(num / 1000_000).toFixed(2) + 'M'
  }

  return num

}

export default formatNumber