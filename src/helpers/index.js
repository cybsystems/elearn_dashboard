export const setPlaceHolders = json => {
  Object.keys(json.placeholders).forEach(key => {
    document.getElementById('root_' + key).placeholder = json.placeholders[key];
  });
};
export async function postData(url = '', data = {}) {
  let formData = new FormData();
  Object.keys(data).forEach(key => {
    formData.append(key, data[key]);
  });
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST',
    body: formData,
  });
  return response.json();
}
