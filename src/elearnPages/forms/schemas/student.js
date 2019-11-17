export const studentSchema = categories => ({
  type: 'object',
  required: ['StudentName', 'StudentAge', 'sex', 'category'],
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
    category: {
      type: 'string',
      title: 'Category',
      enum: categories.map(c => c.category),
    },
    sex: { type: 'string', title: 'Sex', enum: ['Male', 'Female'] },
  },
});
export const studentUiSchema = {
  sex: {
    'ui:widget': 'radio',
  },
  StudentName: {
    'ui:placeholder': 'Enter Student Name',
  },
  StudentAge: {
    'ui:placeholder': 'Enter Student Age',
  },
  category: {
    'ui:placeholder': 'Select Category',
  },
};
