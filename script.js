document.addEventListener('DOMContentLoaded', () => {
  const flavors = [
    {
      id: 1,
      name: 'Polar Ice',
      description: 'A chilling blast of arctic mint that freshens your breath instantly.',
      price: 2.99,
      image: 'https://placehold.co/300x200.png',
      aiHint: 'ice glacier',
    },
    {
      id: 2,
      name: 'Classic Bubble',
      description: 'The timeless taste of sweet, pink bubblegum. Perfect for blowing huge bubbles.',
      price: 2.99,
      image: 'https://placehold.co/300x200.png',
      aiHint: 'pink balloon',
    },
    {
      id: 3,
      name: 'Berry Burst',
      description: 'A juicy explosion of strawberry, raspberry, and blueberry.',
      price: 3.49,
      image: 'https://placehold.co/300x200.png',
      aiHint: 'berry fruit',
    },
    {
      id: 4,
      name: 'Winterfresh',
      description: 'A crisp, cool wave of refreshing wintergreen for a clean feeling.',
      price: 3.49,
      image: 'https://placehold.co/300x200.png',
      aiHint: 'winter mountain',
    },
    {
      id: 5,
      name: 'Cinnamon Surge',
      description: 'A bold and spicy surge of warm cinnamon flavor.',
      price: 3.99,
      image: 'https://placehold.co/300x200.png',
      aiHint: 'cinnamon spice',
    },
    {
      id: 6,
      name: 'Tropical Tango',
      description: 'A vibrant dance of mango, pineapple, and passionfruit.',
      price: 3.99,
      image: 'https://placehold.co/300x200.png',
      aiHint: 'tropical beach',
    },
  ];

  const flavorGrid = document.getElementById('flavor-grid');
  const cartContainer = document.getElementById('cart-container');
  const cartCountBadge = document.getElementById('cart-count-badge');
  const yearSpan = document.getElementById('year');
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');


  // Set current year in footer
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // --- Cart Logic ---
  let cart = JSON.parse(localStorage.getItem('taggerzCart')) || [];

  const saveCart = () => {
    localStorage.setItem('taggerzCart', JSON.stringify(cart));
    updateCartBadge();
  };

  const updateCartBadge = () => {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCountBadge) {
      if (totalItems > 0) {
        cartCountBadge.textContent = totalItems;
        cartCountBadge.style.display = 'flex';
      } else {
        cartCountBadge.style.display = 'none';
      }
    }
  };

  const addToCart = (flavorId) => {
    const flavor = flavors.find(f => f.id === flavorId);
    if (!flavor) return;

    const existingItem = cart.find(item => item.id === flavorId);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ ...flavor, quantity: 1 });
    }
    saveCart();
    alert(`${flavor.name} added to cart!`);
  };
  
  const updateQuantity = (flavorId, newQuantity) => {
    const item = cart.find(i => i.id === flavorId);
    if (item) {
        if (newQuantity > 0) {
            item.quantity = newQuantity;
        } else {
            cart = cart.filter(i => i.id !== flavorId);
        }
    }
    saveCart();
    renderCart();
  };
  
  const removeFromCart = (flavorId) => {
    cart = cart.filter(item => item.id !== flavorId);
    saveCart();
    renderCart();
  };


  // --- Page Rendering ---
  const renderFlavorGrid = () => {
    if (!flavorGrid) return;
    flavorGrid.innerHTML = '';
    flavors.forEach((flavor) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${flavor.image}" alt="${flavor.name}" data-ai-hint="${flavor.aiHint}" />
        <div class="card-content">
          <h3>${flavor.name}</h3>
          <p>${flavor.description}</p>
          <div class="price">$${flavor.price.toFixed(2)}</div>
          <button class="btn" data-flavor-id="${flavor.id}">Add to Cart</button>
        </div>
      `;
      flavorGrid.appendChild(card);
    });

    // Add event listeners to buttons after they are created
    document.querySelectorAll('.btn[data-flavor-id]').forEach(button => {
        button.addEventListener('click', (e) => {
            const flavorId = parseInt(e.target.dataset.flavorId, 10);
            addToCart(flavorId);
        });
    });
  };
  
  const renderCart = () => {
    if(!cartContainer) return;
    
    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="empty-cart">
                <i data-lucide="shopping-bag"></i>
                <h3>Your cart is empty.</h3>
                <p>Looks like you haven't added any delicious gum yet!</p>
                <a href="index.html" class="btn">Shop Flavors</a>
            </div>
        `;
        // We need to re-run this after changing the DOM
        lucide.createIcons();
        return;
    }
    
    cartContainer.innerHTML = ''; // Clear previous content
    let subtotal = 0;
    
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        subtotal += item.price * item.quantity;
        
        itemElement.innerHTML = `
            <div class="cart-item-details">
                <img src="${item.image}" alt="${item.name}">
                <div>
                    <h3>${item.name}</h3>
                    <p>$${item.price.toFixed(2)}</p>
                </div>
            </div>
            <div class="cart-item-actions">
                <input type="number" value="${item.quantity}" min="1" data-id="${item.id}" class="quantity-input">
                <button class="btn-remove" data-id="${item.id}">&times;</button>
            </div>
        `;
        cartContainer.appendChild(itemElement);
    });

    const summaryElement = document.createElement('div');
    summaryElement.className = 'cart-summary';
    summaryElement.innerHTML = `
        <h3>Order Summary</h3>
        <p>Subtotal: <strong>$${subtotal.toFixed(2)}</strong></p>
        <p>Shipping: <strong>FREE</strong></p>
        <h3>Total: <strong>$${subtotal.toFixed(2)}</strong></h3>
        <button class="btn" onclick="alert('Checkout is not implemented in this demo.')">Proceed to Checkout</button>
    `;
    cartContainer.appendChild(summaryElement);

    // Add event listeners for quantity changes and removal
    document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', e => {
            const id = parseInt(e.target.dataset.id);
            const quantity = parseInt(e.target.value);
            updateQuantity(id, quantity);
        });
    });
    
    document.querySelectorAll('.btn-remove').forEach(button => {
        button.addEventListener('click', e => {
            const id = parseInt(e.target.dataset.id);
            removeFromCart(id);
        });
    });
  };

  // --- Auth Forms ---
  if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
          e.preventDefault();
          alert('Logged in successfully!');
          window.location.href = 'index.html';
      });
  }

  if (registerForm) {
      registerForm.addEventListener('submit', (e) => {
          e.preventDefault();
          alert('Account created!');
          window.location.href = 'index.html';
      });
  }


  // Initial Page Load
  updateCartBadge();
  if (flavorGrid) {
    renderFlavorGrid();
  }
  if (cartContainer) {
    renderCart();
  }
});
