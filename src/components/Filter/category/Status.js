import FilterBTN from '../FilterBTN';

export default function Status({ updateStatus, updatePageNumber }) {
  let status = ['Alive', 'Dead', 'Unknown'];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body d-flex flex-wrap gap-3">
            {status.map((item, index) => (
              <FilterBTN
                key={index}
                index={index}
                name="status"
                task={updateStatus}
                updatePageNumber={updatePageNumber}
                input={item}
              />
            ))}
          </div>
        </div>
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          {' '}
          Status{' '}
        </button>
      </h2>
    </div>
  );
}
