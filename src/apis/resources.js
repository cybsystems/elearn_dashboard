import { baseUrl } from '../base';
import { postData } from '../helpers';

export const fetchResourcesApi = async () => {
  try {
    const res = await fetch(`${baseUrl}/getResources.php`, {}).then(res =>
      res.json(),
    );
    return res;
  } catch (err) {}
};

export const removeResourceApi = async rid => {
  try {
    const res = await postData(`${baseUrl}/removeResource.php`, { rid: rid });
    return res;
  } catch (err) {}
};
