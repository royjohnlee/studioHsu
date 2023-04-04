import "./PricingPage.css";
import { checkToken } from '../../utilities/users-service';

export default function NewOrderPage() {
  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate);
  }

  return (
    <>
      <div className='PriceList'>
        <h1>Pricing</h1>
        <div className='Price-Container'>
          <div className='Package-Container'>
            <div>
              <h2 className='Packages'>
                Package A
              </h2>
              <p>
                Photo + Video (Includes drone video/photo)
              </p>
            </div>
            <div className='StartingAt'>
              Starting at $450
            </div>
          </div>
        </div>

        <div className='Price-Container'>
          <div className='Package-Container'>
            <div>
              <h2 className='Packages'>
                Package B
              </h2>
              <p>
                Photo + Video (Includes drone video/photo)
              </p>
            </div>
            <div className='StartingAt'>
              Starting at $450
            </div>
          </div>
        </div>

        <div className='Price-Container'>
          <div className='Package-Container'>
            <div>
              <h2 className='Packages'>
                Package C
              </h2>
              <p>
                Photo + Video (Includes drone video/photo)
              </p>
            </div>
            <div className='StartingAt'>
              Starting at $450
            </div>
          </div>
        </div>

        <div className='Price-Container'>
          <div className='Package-Container'>
            <div>
              <h2 className='Packages'>
                Package D
              </h2>
              <p>
                Photo + Video (Includes drone video/photo)
              </p>
            </div>
            <div className='StartingAt'>
              Starting at $450
            </div>
          </div>
        </div>

        <div className='Price-Container'>
          <div className='Package-Container'>
            <div>
              <h2 className='Packages'>
                3D Only
              </h2>
              <p>
                Photo + Video (Includes drone video/photo)
              </p>
            </div>
            <div className='StartingAt'>
              Starting at $450
            </div>
          </div>
          <div className='square-footage-container'>
            <h3>PRICE VARY DEPENDING ON SQUARE FOOTAGE</h3>
            <div className='square-footage-div'>
              <div>
                0-1500 Sqft.
              </div>
              <div>
                as shown
              </div>
            </div>
            <div className='square-footage-div'>
              <div>
                1501-2500 Sqft.
              </div>
              <div>
                + $50
              </div>
            </div>
            <div className='square-footage-div'>
              <div>
                2501-3500 Sqft.
              </div>
              <div>
                + $150
              </div>
            </div>
            <div className='square-footage-div'>
              <div>
                3501-4500 Sqft.
              </div>
              <div>
                + $300
              </div>
            </div>
            <div className='square-footage-div'>
              <div>
                4501+ Sqft.
              </div>
              <div>
                Contact for quote
              </div>
            </div>
          </div>
        </div>

      </div>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  );
}
