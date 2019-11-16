export const studentSchema = {
  type: 'object',
  required: ['StudentName', 'StudentAge', 'sex'],
  properties: {
    StudentName: {
      type: 'string',
      title: 'Enter Student Name',
      placeholder: 'Enter Student Name',
    },
    StudentAge: {
      type: 'number',
      title: 'Enter Student Age',
    },
    category: { type: 'string', title: 'Category', enum: ['Art', 'Commerce'] },
    sex: { type: 'string', title: 'Sex', enum: ['Male', 'Female'] },
  },
};
export const studentUiSchema = {
  sex: {
    'ui:widget': 'radio',
  },
};
