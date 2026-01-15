import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";

/**
 * 클릭하면 값이 올라가는 버튼을 만들어보자.
 * 값은 let, const, state에 할당해서 테스트해볼것 (콘솔에 찍어보기)
 * 그리고 버튼의 대표적인 속성들이 무엇이 있는지 살펴볼것
 */
function App() {
  const items = Array.from({ length: 9 }, (_, i) => `상품 ${i + 1}`);
  const [cart, setCart] = useState<string[]>([]);

  const addToCart = (item: string) => {
    setCart((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  return (
    <div className="layout">
      <header>
        <h1>쇼핑 페이지</h1>
      </header>

      <main>
        <div className="grid">
          {items.map((item) => (
            <div key={item} className="card" onClick={() => addToCart(item)}>
              <span>{item}</span>
              {cart.includes(item) && <span>☑️</span>}
            </div>
          ))}
        </div>

        <aside className="cart">
          <strong>장바구니</strong>
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
