import { store } from '../../../store';
import { updateRawData } from '../../../actions';
import { baseUrl } from '../../../base';
import { removeResourceApi, fetchResourcesApi } from '../../../apis/resources';
import { showToast } from '../../../helpers/toasts';

export const getResources = async () => {
  try {
    const resources = await fetchResourcesApi();

    updateRawData({
      resources: resources,
      originalResources: resources,
    });
    return resources;
  } catch (err) {
    showToast('Something went wrong!', { type: 'error' });
  }
};
export const removeResource = async resource => {
  try {
    const res = await removeResourceApi(resource.rid);

    updateRawData({ removingResource: resource.rid });
    setTimeout(() => {
      updateRawData({ resources: res });
    }, 1000);
  } catch (err) {}
};

export const downloadResource = resource => {
  window.open(`${baseUrl}/${resource.rpath}`);
};

export const uploadFile = async (file, fileName) => {
  const req = new XMLHttpRequest();
  const formData = new FormData();
  formData.append('file', file, file.name);
  formData.append('fname', fileName);
  const response = await fetch(`${baseUrl}/uploadResource.php`, {
    method: 'POST',
    body: formData,
  });
  return response;
};
