export const categorySchema = {
  type: 'object',
  required: ['CategoryId', 'Category'],
  placeholders: { CategoryId: 'Category Id', Category: 'Category' },
  properties: {
    CategoryId: {
      type: 'integer',
    },
    Category: {
      type: 'string',
    },
  },
};
export const categoryUiSchema = {
  CategoryId: {
    classNames: 'col-lg-8',
    'ui:placeholder': 'Enter Id',
  },
  Category: {
    classNames: 'col-lg-8',
    'ui:placeholder': 'Enter Catgory',
  },
};
