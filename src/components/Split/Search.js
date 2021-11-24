import React from "react";

const Search = () => {
  const { value, onChange} = this.props;
  return (
    <>
      <form>
        <input type="text" value={value} onChange={onChange} />
      </form>
    </>
  );
};

export default Search;
