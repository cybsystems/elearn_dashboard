import { baseUrl } from "../global";

  
export const fetchInvitationApi = async () => {
  try {
    const res = await fetch(`${baseUrl}/getInvitations.php`, {}).then(
      res => res.json(),
    );
    return res;
  } catch (err) {}
};

export const removeInvitationAPI = async sid => {
  
  try {
    let formData = new FormData();
    formData.append('id', sid);
    const res = await fetch(`${baseUrl}/removeInvitation.php`, {
      method: 'post',
      body: formData,
    }).then(res => res.json());

    return res;
  } catch (err) {
    return 0;
  }
};

export const acceptInvitationAPI = async sid => {
  try {
    let formData = new FormData();
    formData.append('id', sid);
    const res = await fetch(`${baseUrl}/acceptInvitation.php`, {
      method: 'post',
      body: formData,
    }).then(res => res.json());
     
    return res;
  } catch (err) {
    return 0;
  }
};
