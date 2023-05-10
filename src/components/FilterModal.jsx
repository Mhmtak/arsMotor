import React from 'react'
import SlideBar from './SlideBar';
import svg from "../assets/filter-svgrepo-com.svg"
const FilterModal = () => {
  return (
    <div>
      <>
        {/* Button trigger modal */}

        <button
          type="button"
          className="btn "
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            role="presentation"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.8733 3.448H19.0202C19.5613 3.448 20 3.88666 20 4.42777C20 4.96888 19.5613 5.40753 19.0202 5.40753H16.8733C16.6687 6.11494 16.2488 6.73525 15.6759 7.17629C15.1031 7.61732 14.4078 7.85553 13.6935 7.85553C12.9792 7.85553 12.284 7.61732 11.7111 7.17629C11.1382 6.73525 10.7183 6.11494 10.5137 5.40753H0.979765C0.438656 5.40753 0 4.96888 0 4.42777C0 3.88666 0.438656 3.448 0.979764 3.448H10.5137C10.7183 2.74059 11.1382 2.12028 11.7111 1.67925C12.284 1.23822 12.9792 1 13.6935 1C14.4078 1 15.1031 1.23822 15.6759 1.67925C16.2488 2.12028 16.6687 2.74059 16.8733 3.448ZM9.49889 14H19.0177C19.5588 14 19.9975 14.4387 19.9975 14.9798C19.9975 15.5209 19.5588 15.9595 19.0177 15.9595H9.49889C9.29432 16.6669 8.8744 17.2873 8.30153 17.7283C7.72866 18.1693 7.03342 18.4075 6.31912 18.4075C5.60481 18.4075 4.90957 18.1693 4.3367 17.7283C3.76383 17.2873 3.34391 16.6669 3.13934 15.9595H0.979764C0.438655 15.9595 0 15.5209 0 14.9798C0 14.4387 0.438655 14 0.979763 14H3.13934C3.34391 13.2926 3.76383 12.6723 4.3367 12.2312C4.90957 11.7902 5.60481 11.552 6.31912 11.552C7.03342 11.552 7.72866 11.7902 8.30153 12.2312C8.8744 12.6723 9.29432 13.2926 9.49889 14ZM6.31912 16.776C5.85823 16.776 5.41623 16.5868 5.09034 16.2499C4.76444 15.913 4.58136 15.4562 4.58136 14.9798C4.58136 14.5034 4.76444 14.0465 5.09034 13.7096C5.41623 13.3728 5.85823 13.1835 6.31912 13.1835C6.78 13.1835 7.222 13.3728 7.5479 13.7096C7.87379 14.0465 8.05687 14.5034 8.05687 14.9798C8.05687 15.4562 7.87379 15.913 7.5479 16.2499C7.222 16.5868 6.78 16.776 6.31912 16.776ZM13.6935 6.224C13.2326 6.224 12.7906 6.03476 12.4647 5.6979C12.1389 5.36104 11.9558 4.90416 11.9558 4.42777C11.9558 3.95138 12.1389 3.4945 12.4647 3.15764C12.7906 2.82078 13.2326 2.63153 13.6935 2.63153C14.1544 2.63153 14.5964 2.82078 14.9223 3.15764C15.2482 3.4945 15.4313 3.95138 15.4313 4.42777C15.4313 4.90416 15.2482 5.36104 14.9223 5.6979C14.5964 6.03476 14.1544 6.224 13.6935 6.224Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>

        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <SlideBar />
              </div>
              <div className="modal-footer"></div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default FilterModal