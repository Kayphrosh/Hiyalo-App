import { useEffect, useState } from 'react';
import './Apartment_Details.css';
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";
// import img1 from '../../images/bg.jpg';
// import img2 from '../../images/bg.jpg';
// import img3 from '../../images/bg.jpg';

const PropertyDetails = () => {
  // const PropertyImage1 = img1;
  // const PropertyImage2 = img2;
  // const PropertyImage3 = img3;

  const [toggleState, setToggleState] = useState(1);
  const [loading, setLoading] = useState(true);
  // const index = 0
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const [property, setProperty] = useState({})

  useEffect(() => {
    setLoading(true)
    axios.post('https://hiyalo-backend.herokuapp.com/houses/house-gateway/get-house', { id: localStorage.getItem("house_id") })
      .then(data => {

        setProperty(data.data.house)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="spinner">
          <ClipLoader color='#4733AC' loading={loading} size={150} />
      </div>
    )
  }

  return (
    <>
      <main className="product-overview-container">
        {/******** PROPERTY IMAGES ********/}

        <div className="product-images">
          <div className="image-1">
            <img src={property.address && property.images[0]} alt="" />
          </div>

          <div className="image-2-3">
            <img src={property.address && property.images[1]} alt="" />

            <img src={property.address && property.images[2]} alt="" />
            <span className="view-all-btn">
              <button type="button">View all image</button>
            </span>
          </div>
        </div>

        {/******** PROPERTY DETAILS ********/}

        <main className="product-details-container ">
          <div className="product-details">
            <header>
              <ul>
                <li>
                  <button
                    className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
                    onClick={() => toggleTab(1)}
                  >
                    {' '}
                    Description
                  </button>
                </li>
                <li>
                  <button
                    className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
                    onClick={() => toggleTab(2)}
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button
                    className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'}
                    onClick={() => toggleTab(3)}
                  >
                    Location
                  </button>
                </li>
                <li>
                  <button
                    className={toggleState === 4 ? 'tabs active-tabs' : 'tabs'}
                    onClick={() => toggleTab(4)}
                  >
                    Price
                  </button>
                </li>
              </ul>
            </header>
            <div className="product-details-overview">
              <div
                className={
                  toggleState === 1
                    ? 'property-content  active-content'
                    : 'property-content'
                }
              >
                <p>
                  {property.description}
                </p>
              </div>

              <div
                className={
                  toggleState === 2
                    ? 'property-content  active-content'
                    : 'property-content'
                }
              >
                <main id="property-amenities-details">
                  <div className="product-amenity">
                    <span>
                      <iconify-icon
                        className="amenity-icons"
                        icon="fluent:bed-16-regular"
                      ></iconify-icon>
                    </span>
                    <span>
                      <p className="amenity-title">Bedroom</p>
                      <p className="amenity-value">{property.ammenities.find(o => o.name === "Bedroom") ? property.ammenities.find(o => o.name === "Bedroom").number : "0"}</p>
                    </span>
                  </div>

                  <div className="product-amenity">
                    <span>
                      <iconify-icon
                        className="amenity-icons"
                        icon="fe:kitchen-cooker"
                      ></iconify-icon>
                    </span>
                    <span>
                      <p className="amenity-title">Kitchen</p>
                      <p className="amenity-value">{property.ammenities.find(o => o.name === "Kitchen") ? property.ammenities.find(o => o.name === "Kitchen").number : "0"}</p>
                    </span>
                  </div>

                  <div className="product-amenity">
                    <span>
                      <iconify-icon
                        className="amenity-icons"
                        icon="material-symbols:dining-outline"
                      ></iconify-icon>
                    </span>
                    <span>
                      <p className="amenity-title">Dining Room</p>
                      <p className="amenity-value">{property.ammenities.find(o => o.name === "Dining Room") ? property.ammenities.find(o => o.name === "Dining Room").number : "0"}</p>
                    </span>
                  </div>

                  <div className="product-amenity">
                    <span>
                      <iconify-icon
                        className="amenity-icons"
                        icon="icon-park-outline:swimming-pool"
                      ></iconify-icon>
                    </span>
                    <span>
                      <p className="amenity-title">Swimming pool</p>
                      <p className="amenity-value">{property.ammenities.find(o => o.name === "Swimming pool") ? property.ammenities.find(o => o.name === "Swimming pool").number : "0"}</p>
                    </span>
                  </div>

                  <div className="product-amenity">
                    <span>
                      <iconify-icon
                        className="amenity-icons"
                        icon="bx:store"
                      ></iconify-icon>
                    </span>
                    <span>
                      <p className="amenity-title">Store room</p>
                      <p className="amenity-value">{property.ammenities.find(o => o.name === "Store room") ? property.ammenities.find(o => o.name === "Store room").number : "0"}</p>
                    </span>
                  </div>

                  <div className="product-amenity">
                    <span>
                      <iconify-icon
                        className="amenity-icons"
                        icon="cil:bathroom"
                      ></iconify-icon>
                    </span>
                    <span>
                      <p className="amenity-title">Bathroom</p>
                      <p className="amenity-value">{property.ammenities.find(o => o.name === "Bathroom") ? property.ammenities.find(o => o.name === "Bathroom").number : "0"}</p>
                    </span>
                  </div>

                  <div className="product-amenity">
                    <span>
                      <iconify-icon
                        className="amenity-icons"
                        icon="maki:parking-garage"
                      ></iconify-icon>
                    </span>
                    <span>
                      <p className="amenity-title">Parking Space</p>
                      <p className="amenity-value">{property.ammenities.find(o => o.name === "Parking Space") ? property.ammenities.find(o => o.name === "Parking Space").number : "0"}</p>
                    </span>
                  </div>
                </main>
              </div>
              <div
                className={
                  toggleState === 3
                    ? 'property-content  active-content'
                    : 'property-content'
                }
              >
                <div id="property-address-details">
                  <span>
                    <p className="address-title">Street Address</p>
                    <p className="address-p">
                      {property.address}
                    </p>
                  </span>

                  <span>
                    <p className="address-title">City</p>
                    <p className="address-p">{property.city}</p>
                  </span>

                  <span>
                    <p className="address-title">State</p>
                    <p className="address-p">{property.state} State</p>
                  </span>
                </div>
              </div>
              <div
                className={
                  toggleState === 4
                    ? 'property-content  active-content'
                    : 'property-content'
                }
              >
                <div id="property-address-details">
                  <span>
                    <p className="address-title">Anual Rent Fee</p>
                    <p className="address-p">&#8358; {Number(property.annual_fee).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} </p>
                  </span>

                  <span>
                    <p className="address-title">Agency & Agreement Fee</p>
                    <p className="address-p"> &#8358; {Number(property.agency_fee).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</p>
                  </span>

                  <span>
                    <p className="address-title">Caution Fee</p>
                    <p className="address-p">&#8358; {Number(property.caution_fee).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</p>
                  </span>

                  <span>
                    <p className="address-title">Stamp Duty</p>
                    <p className="address-p">&#8358; {Number(property.stamp_fee).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</p>
                  </span>
                </div>
              </div>
            </div>

            {/******** PROPERTY TOUR AND APPLICATION FORM ********/}

            <div className="physical-tour-info">
              <iconify-icon
                class="info-icon"
                icon="bi:info-circle"
              ></iconify-icon>
              <p>
                <b>Inspection Fee:</b> Physical Tour Cost <b>N 10,000 </b> that
                would cater for your transportation from your house to where the
                apartment is located
              </p>
            </div>
          </div>

          <div class="payment-details-container">
            <header>
              <h4>
                &#8358; {Number(property.annual_fee).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}<small>/year</small>
              </h4>
              <h4>
                &#8358; {(Number(property.annual_fee / 12)).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}<small>/month</small>
              </h4>
            </header>

            {/* <div class="tour-form-container">
              <h4>Request For Tour</h4>

              <form action="" class="tour-form">
                <div class="inspect-time-date">
                  <span>
                    <label for="date">Inspection Date *</label>
                    <input
                      type="date"
                      placeholder="dd/mm/yyyy"
                      value="2022-08-24"
                    />
                  </span>
                  <span>
                    <label for="time">Inspection Time *</label>
                    <input type="time" placeholder="00:00" />
                  </span>
                </div>
                <span class="add-note-input">
                  <label for="text">Add a note</label>
                  <input type="text" placeholder="add a note for agent" />
                </span>
                <span class="tour-cta-btn">
                  <button type="submit">Virtual Tour</button>
                  <button type="submit">Physical Tour</button>
                </span>
              </form>
            </div>

            <div class="or-again">
              <h3>OR</h3>
            </div>

            <div class="apply-now-cta">
              <button>Apply Now</button>
            </div> */}
            
          </div>
        </main>

        <div class="mobile-product-cta">
          <button>Request for Tour</button>
          <button>Apply Now</button>
        </div>
      </main>
    </>
  );
};

export default PropertyDetails;