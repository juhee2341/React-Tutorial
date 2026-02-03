import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";

/**
 * 클릭하면 값이 올라가는 버튼을 만들어보자.
 * 값은 let, const, state에 할당해서 테스트해볼것 (콘솔에 찍어보기)
 * 그리고 버튼의 대표적인 속성들이 무엇이 있는지 살펴볼것
 */
function App() {
  const items = Array.from({ length: 9 }, (_, i) => ({
    name: `Item ${i}`,
    price: 10000 * i,
    imageUrl:
      "https://images.pexels.com/photos/27503501/pexels-photo-27503501.png",
  }));
  console.log("items", items);
  const [cart, setCart] = useState<string[]>([]);

  const addToCart = (item: string) => {
    setCart((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item],
    );
  };

  return (
    <div className="layout">
      <header>
        <h1>LoVe It</h1>
        <nav className="nav">
          <ul className="menu">
            <li>
              <a href="#">Overview</a>
            </li>
            <li>
              <a href="#">Online Shop</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="grid">
          {items.map((item) => (
            <div
              key={item.name}
              className="card"
              onClick={() => addToCart(item.name)}
            >
              <img
                src={item.imageUrl}
                height={300}
                width={200}
                alt="item_image"
              />
              <div className="item">
                <span>{item.name}</span>
                <span>{`${item.price.toLocaleString()} 원`}</span>
              </div>
              <div className=".icon">
                <img
                  src="src/assets/images/heart.png"
                  alt="cart_image"
                  height={14}
                  width={14}
                />
                <img
                  src="src/assets/images/cart.png"
                  alt="cart_image"
                  height={14}
                  width={14}
                />
              </div>
            </div>
          ))}
        </div>

        <aside className="cart">
          <div className="icon">
            <img
              src="src/assets/images/cart.png"
              alt="cart_image"
              height={18}
              width={18}
            />
            <strong>장바구니</strong>
          </div>
          <ul>
            {cart.map((item, index) => (
              <li key={`${item}-${index}`}>{item}</li>
            ))}
          </ul>
        </aside>
      </main>

      <footer>
        <small>Footer 영역</small>
      </footer>
    </div>
  );
}

export default App;
