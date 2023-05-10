import React from 'react'

const SıralaButtonModal = () => {
  return (
    <div>
      <button
        type="button"
        className="btn "
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
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
            d="M8.70711 14.7071L5.20711 18.2071C4.81658 18.5976 4.18342 18.5976 3.79289 18.2071L0.292893 14.7071C-0.0976311 14.3166 -0.0976311 13.6834 0.292893 13.2929C0.683417 12.9024 1.31658 12.9024 1.70711 13.2929L3.5 15.0858V3C3.5 2.44771 3.94772 2 4.5 2C5.05228 2 5.5 2.44771 5.5 3V15.0858L7.2929 13.2929C7.68342 12.9024 8.31658 12.9024 8.70711 13.2929C9.09763 13.6834 9.09763 14.3166 8.70711 14.7071ZM16.2071 2.29289C15.8166 1.90237 15.1834 1.90237 14.7929 2.29289L11.2929 5.79289C10.9024 6.18342 10.9024 6.81658 11.2929 7.20711C11.6834 7.59763 12.3166 7.59763 12.7071 7.20711L14.5 5.41421V17.5C14.5 18.0523 14.9477 18.5 15.5 18.5C16.0523 18.5 16.5 18.0523 16.5 17.5V5.41421L18.2929 7.20711C18.6834 7.59763 19.3166 7.59763 19.7071 7.20711C20.0976 6.81658 20.0976 6.18342 19.7071 5.79289L16.2071 2.29289Z"
            fill="currentColor"
          ></path>
        </svg>
      </button>
      {/* Modal */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Sırala
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div
                className="btn-group-vertical w-100 "
                role="group"
                aria-label="Vertical radio toggle button group"
              >
                <input
                  type="radio"
                  className="btn-check"
                  name="vbtn-radio"
                  id="vbtn-radio1"
                  autoComplete="off"
                  defaultChecked=""
                />
                <label className="btn btn-outline-warning " htmlFor="vbtn-radio1">
                  Düşükten Yükseğe
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="vbtn-radio"
                  id="vbtn-radio2"
                  autoComplete="off"
                />
                <label className="btn btn-outline-warning" htmlFor="vbtn-radio2">
                  Yüksekten düşüğe
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="vbtn-radio"
                  id="vbtn-radio3"
                  autoComplete="off"
                />
                <label className="btn btn-outline-warning" htmlFor="vbtn-radio3">
                  İndirim Oranı Artan
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="vbtn-radio"
                  id="vbtn-radio4"
                  autoComplete="off"
                />
                <label className="btn btn-outline-warning" htmlFor="vbtn-radio4">
                  İndirim Oranı Azalan
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="vbtn-radio"
                  id="vbtn-radio5"
                  autoComplete="off"
                />
                <label className="btn btn-outline-warning" htmlFor="vbtn-radio5">
                  İlk Eklenen
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="vbtn-radio"
                  id="vbtn-radio6"
                  autoComplete="off"
                />
                <label className="btn btn-outline-warning" htmlFor="vbtn-radio6">
                  Son Eklenen
                </label>
              </div>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SıralaButtonModal