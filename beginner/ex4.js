/*write a javascript program to get the current data.
expected output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy */

const formatDate = (date = new Date()) => {
  const days = date.getDate();
  const months = date.getMonth() + 1;
  const years = date.getFullYear()

  return `${days}/${months}/${years}`
}

console.log(formatDate())

const obterData = (data = new Date()) => {
  const dia = data.getDate();
  const mes = data.getMonth()+ 1;
  const ano = data.getFullYear()

  return `${dia}-${mes}-${ano}`
}
