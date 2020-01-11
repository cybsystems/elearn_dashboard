import {
  removeInvitationAPI,
  acceptInvitationAPI
} from "../../../apis/students";
import { updateRawData } from "../../../actions";
import { showToast } from "../../../helpers/toasts";

export const removeInvitation = async student => {
  const res = await removeInvitationAPI(student.id);
  updateRawData({ removeingStudent: student.id });
  showToast("Invitation Removed", { autoClose: 3000, type: "success" });
  setTimeout(() => {
    updateRawData({ students: res, originalStudents: res });
  }, 1000);
};

export const acceptInvitation = async student => {
  try {
    updateRawData({
      acceptingStudent: student.id
    });
    const res = await acceptInvitationAPI(student.id);

    updateRawData({
      removeingStudent: student.id
    });
    showToast("Invitation Accepted", { autoClose: 3000, type: "success" });
    setTimeout(() => {
      updateRawData({ students: res, originalStudents: res });
    }, 1000);
  } catch (err) {}
};
