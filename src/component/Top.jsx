import React from 'react';

const Top = props => {
    const { mysearch, onInputChange, onSearchClick } = props;
    return (
      <div className="jumbotron">
        <h1 className="display-1">
          <i className="material-icons brand-icon">  </i> Hawala Recipe
        </h1>
        <div className="input-group w-50 mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Search Your Recipe..."
            value={mysearch}
            onChange={onInputChange}
          />
          <div className="input-group-append">
            <button className="btn btn-dark" onClick={onSearchClick}>
              Search Recipe
            </button>
          </div>
        </div>
      </div>
    );
  };

export default Top;