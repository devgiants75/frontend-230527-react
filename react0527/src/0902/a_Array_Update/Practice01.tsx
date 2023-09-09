import React, { useState } from 'react'

// 장바구니의 항목 업데이트(수량 증가)
// Apple, Banana, Cherry

interface Product {
  id: number;
  name: string;
  count: number;
}

const initialProducts: Product[] = [{
  id: 0,
  name: 'Apple',
  count: 1
},{
  id: 1,
  name: 'Banana',
  count: 5
},{
  id: 2,
  name: 'Cherry',
  count: 3
}
]

export default function Practice01() {
  // 제품배열 상태 관리
  const [products, setProducts] = useState<Product[]>(initialProducts);

  // +1 버튼을 눌러 handleIncreaseClick 함수 실행 시 숫자가 1씩 증가
  function handleIncreaseClick(productId: number) {
    setProducts(products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count + 1
        };
      } else {
        return product;
      }
    }))
  }

  // -1 버튼을 눌러 handleDecreaseClick 함수 실행 시 숫자가 1씩 감소
  // 수량이 1일 때 -1 버튼을 누르면, 상품이 자동으로 장바구니에서 제거되도록 표시
  // 즉, 0이 표시되지 않도록 설정
  function handleDecreaseClick( productId: number ) {
    let nextProducts = products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count - 1
        };
      } else {
        return product;
      }
    });
    
    // nextProducts에서 count가 0 이하인 상품을 제거
    nextProducts = nextProducts.filter(p => p.count > 0);
    // 상품 목록을 업데이트
    setProducts(nextProducts);
  }

  return (
    <>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name}
            {' '}
            (<b>{product.count}</b>)
            <button onClick={() => {
              handleIncreaseClick(product.id);
            }}> +1 </button>
            <button onClick={() => {
              handleDecreaseClick(product.id);
            }}> -1 </button>
          </li>
        ))}
      </ul>
    </>
  )
}
