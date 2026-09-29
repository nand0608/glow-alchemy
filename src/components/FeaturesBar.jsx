import { FiTruck, FiRefreshCw, FiShield, FiHeadphones } from 'react-icons/fi';

export default function FeaturesBar() {
  const features = [
    { icon: <FiTruck className="feature-icon" />, title: 'Free Shipping', desc: 'On orders above ₹999' },
    { icon: <FiRefreshCw className="feature-icon" />, title: 'Easy Returns', desc: '15 day return policy' },
    { icon: <FiShield className="feature-icon" />, title: '100% Authentic', desc: 'Genuine products only' },
    { icon: <FiHeadphones className="feature-icon" />, title: '24×7 Support', desc: 'Dedicated help center' },
  ];

  return (
    <div className="features-bar">
      <div className="features-bar-inner">
        {features.map((f, i) => (
          <div key={i} className="feature-item">
            {f.icon}
            <div className="feature-text">
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
