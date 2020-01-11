import React from 'react';
import { MdSearch } from 'react-icons/md';
import { Form, Input } from 'reactstrap';

const SearchInput = () => {
  return (
    <Form
      inline
      className="cr-search-form ml-5"
      onSubmit={e => e.preventDefault()}
    >
      <MdSearch
        size="20"
        className="cr-search-form__icon-search text-secondary"
      />
      <Input
        type="search"
        className="cr-search-form__input "
        placeholder="Search..."
        style={{ padding: '10px 400px 10px 0px', fontSize: 13 }}
      />
    </Form>
  );
};

export default SearchInput;
