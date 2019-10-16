export const fetchInvitationApi = async () => {
  const res = await fetch('http://localhost/getStudents.php').then(res =>
    res.json(),
  );
   return res;
};
