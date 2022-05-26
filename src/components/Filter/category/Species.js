import FilterBTN from '../FilterBTN';

export default function Species({ updateSpecies, updatePageNumber }) {
  let species = [
    'Human',
    'Alien',
    'Humanoid',
    'Poopybutthole',
    'Mythological',
    'Unknown',
    'Animal',
    'Disease',
    'Robot',
    'Cronenberg',
    'Planet',
  ];

  return (
    <div className="accordion-item ">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body d-flex flex-wrap gap-3">
              {species.map((item, index) => {
                return (
                  <FilterBTN
                    name="species"
                    index={index}
                    key={index}
                    updatePageNumber={updatePageNumber}
                    task={updateSpecies}
                    input={item}
                  />
                );
              })}
            </div>
          </div>{' '}
          Species{' '}
        </button>
      </h2>
    </div>
  );
}
