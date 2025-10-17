import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import lavender from "../assets/true-lavender-plant.webp";
import rosemary from "../assets/rosemary.jpg";
import mint from "../assets/mint-plant.jpg";
import jasmine from "../assets/jasmine.jpg";
import aloe from "../assets/aloe-vera.jpg";
import tulsi from "../assets/tulsi.png";
import neem from "../assets/neem.webp";
import ashwagandha from "../assets/ashwagandha-plant.jpg";

const ProductListing = () => {
  return (
    <div>
      {/* Aromatic Plants Section */}
      <section className="product-section">
        <h2>🌸 Aromatic Plants</h2>
        <p>Perfect for relaxation and natural fragrance.</p>
        <div className="product-grid">
          {[
            {
              name: "Lavender",
              desc: "Soothing fragrance for calmness.  10$",
              img: lavender,
            },
            {
              name: "Rosemary",
              desc: "Aromatic herb for your kitchen and mind.  10$",
              img: rosemary,
            },
            {
              name: "Mint",
              desc: "Refreshing aroma, perfect for tea and drinks.  10$",
              img: mint,
            },
            {
              name: "Jasmine",
              desc: "Delicate and sweet scent loved by all.  10$",
              img: jasmine,
            },
          ].map((p) => (
            <PlantCard key={p.name} {...p} />
          ))}
        </div>
      </section>

      {/* Medicinal Plants Section */}
      <section className="product-section">
        <h2>🌿 Medicinal Plants</h2>
        <p>Bring health and wellness into your life with our natural healing plants.</p>
        <div className="product-grid">
          {[
            {
              name: "Aloe Vera",
              desc: "Natural healer for skin and burns.  10$",
              img: aloe,
            },
            {
              name: "Tulsi (Holy Basil)",
              desc: "Sacred herb with multiple health benefits.   10$",
              img: tulsi,
            },
            {
              name: "Neem",
              desc: "Powerful medicinal tree for detoxifying.   10$",
              img: neem,
            },
            {
              name: "Ashwagandha",
              desc: "Stress-relieving plant used in Ayurveda.    10$",
              img: ashwagandha,
            },
          ].map((p) => (
            <PlantCard key={p.name} {...p} />
          ))}
        </div>
      </section>
    </div>
  );
};

const PlantCard = ({ name, desc, img }) => {
  const dispatch = useDispatch();

  return (
    <div className="plant-card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>{desc}</p>
      <button className="add-btn" onClick={() => dispatch(addToCart({ name, img }))}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductListing;
