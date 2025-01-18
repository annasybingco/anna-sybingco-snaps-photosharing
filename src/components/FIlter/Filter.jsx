import tags from "../../data/tags.json";
import "../Filter/Filter.scss"


export default function Filter({ activeFilter, setActiveFilter }) {
    const handleFilterClick = (tagsClicked) => {
        if (tagsClicked === activeFilter) {
            setActiveFilter(null);
        } else {
            setActiveFilter(tagsClicked);
        }
    };

    return (
        <div className="filter-list">
            <h2 className="filter__heading body">Filters</h2>
            {tags.map((tag, index) => {
                return (
                    <span
                        key={index}
                        className={`filter ${
                            activeFilter === tag ? "filter--active" : ""
                        }`}
                        onClick={() => handleFilterClick(tag)}
                    >
                        {tag}
                    </span>
                );
            })}
        </div>
    );
}
