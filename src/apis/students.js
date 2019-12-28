import { store } from '../store';

export const fetchInvitationApi = async () => {
  try {
    const res = await fetch('http://localhost/getInvitations.php', {}).then(
      res => res.json(),
    );
    return res;
  } catch (err) {}
};

export const removeInvitationAPI = async sid => {
  
  try {
    let formData = new FormData();
    formData.append('id', sid);
    const res = await fetch('http://localhost/removeInvitation.php', {
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
    const res = await fetch('http://localhost/acceptInvitation.php', {
      method: 'post',
      body: formData,
    }).then(res => res.json());
     
    return res;
  } catch (err) {
    return 0;
  }
};
