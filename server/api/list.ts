export default defineEventHandler((e) => {
  const { username } = getQuery(e);
  
  return fetch(
    `https://api.gamer.com.tw/home/v2/creation_list.php?owner=${username}&row=200`,
  )
    .then((res) => res.json())
    .then((data) => data.data.list);
});
