document.addEventListener('DOMContentLoaded', () => {
  const flavors = [
    {
      id: 1,
      name: 'Polar Ice',
      description: 'A chilling blast of arctic mint that freshens your breath instantly.',
      price: 2.99,
      image: 'https://i5.walmartimages.com/asr/05c4842c-d4a3-4a6c-8515-45d272047f9f_1.086c99f984922105112106fa83568a4d.jpeg',
      aiHint: 'ice glacier',
    },
    {
      id: 2,
      name: 'Classic Bubble',
      description: 'The timeless taste of sweet, pink bubblegum. Perfect for blowing huge bubbles.',
      price: 2.99,
      image: 'https://placehold.co/300x200/FFC0CB/FFFFFF?text=Classic+Bubble',
      aiHint: 'pink balloon',
    },
    {
      id: 3,
      name: 'Berry Burst',
      description: 'A juicy explosion of strawberry, raspberry, and blueberry.',
      price: 3.49,
      image: 'https://placehold.co/300x200/D0005E/FFFFFF?text=Berry+Burst',
      aiHint: 'berry fruit',
    },
    {
      id: 4,
      name: 'Winterfresh',
      description: 'A crisp, cool wave of refreshing wintergreen for a clean feeling.',
      price: 3.49,
      image: 'https://placehold.co/300x200/7FFFD4/000000?text=Winterfresh',
      aiHint: 'winter mountain',
    },
    {
      id: 5,
      name: 'Cinnamon Surge',
      description: 'A bold and spicy surge of warm cinnamon flavor.',
      price: 3.99,
      image: 'https://placehold.co/300x200/C46210/FFFFFF?text=Cinnamon',
      aiHint: 'cinnamon spice',
    },
    {
      id: 6,
      name: 'Tropical Tango',
      description: 'A vibrant dance of mango, pineapple, and passionfruit.',
      price: 3.99,
      image: 'https://placehold.co/300x200/FFD700/000000?text=Tropical',
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

  const addToCart = (flavorId, buttonElement) => {
    const flavor = flavors.find(f => f.id === flavorId);
    if (!flavor) return;

    const existingItem = cart.find(item => item.id === flavorId);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ ...flavor, quantity: 1 });
    }
    saveCart();
    
    // Give user feedback without an alert
    buttonElement.textContent = 'Added!';
    buttonElement.classList.add('added');
    setTimeout(() => {
        buttonElement.textContent = 'Add to Cart';
        buttonElement.classList.remove('added');
    }, 1500);
  };
  
  const updateQuantity = (flavorId, newQuantity) => {
    const item = cart.find(i => i.id === flavorId);
    if (item) {
        if (newQuantity > 0) {
            item.quantity = newQuantity;
        } else {
            // If quantity is 0 or less, remove it
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
      card.className = 'card glass';
      card.innerHTML = `
        <img src="${flavor.image}" alt="${flavor.name}" data-ai-hint="${flavor.aiHint}" />
        <div class="card-content">
          <h3>${flavor.name}</h3>
          <p>${flavor.description}</p>
          <div class="price">$${flavor.price.toFixed(2)}</div>
          <button class="btn add-to-cart-btn" data-flavor-id="${flavor.id}">Add to Cart</button>
        </div>
      `;
      flavorGrid.appendChild(card);
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
                <a href="index.html" class="btn" style="max-width: 200px; margin: 20px auto 0;">Shop Flavors</a>
            </div>
        `;
        lucide.createIcons(); // Re-render icons for the empty cart message
        return;
    }
    
    cartContainer.innerHTML = ''; // Clear previous content
    let subtotal = 0;
    
    const itemsContainer = document.createElement('div');
    itemsContainer.className = 'cart-items-list';
    
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        subtotal += item.price * item.quantity;
        
        itemElement.innerHTML = `
            <div class="cart-item-details">
                <img src="${item.image}" alt="${item.name}">
                <div>
                    <h3>${item.name}</h3>
                    <p class="price-small">$${item.price.toFixed(2)}</p>
                </div>
            </div>
            <div class="cart-item-actions">
                <input type="number" value="${item.quantity}" min="1" data-id="${item.id}" class="quantity-input">
                <button class="btn-remove" data-id="${item.id}">
                  <i data-lucide="trash-2"></i>
                </button>
            </div>
        `;
        itemsContainer.appendChild(itemElement);
    });
    
    cartContainer.appendChild(itemsContainer);

    const summaryElement = document.createElement('div');
    summaryElement.className = 'cart-summary';
    summaryElement.innerHTML = `
        <h3>Order Summary</h3>
        <div class="summary-row"><span>Subtotal</span><strong>$${subtotal.toFixed(2)}</strong></div>
        <div class="summary-row"><span>Shipping</span><strong>FREE</strong></div>
        <div class="summary-total"><span>Total</span><strong>$${subtotal.toFixed(2)}</strong></div>
        <button class="btn checkout-btn" onclick="alert('Checkout is not implemented in this demo.')">Proceed to Checkout</button>
    `;
    cartContainer.appendChild(summaryElement);

    // Add event listeners using event delegation on the container
    cartContainer.addEventListener('change', e => {
        if (e.target.classList.contains('quantity-input')) {
            const id = parseInt(e.target.dataset.id, 10);
            const quantity = parseInt(e.target.value, 10);
            updateQuantity(id, quantity);
        }
    });
    
    cartContainer.addEventListener('click', e => {
        const removeButton = e.target.closest('.btn-remove');
        if (removeButton) {
            const id = parseInt(removeButton.dataset.id, 10);
            removeFromCart(id);
        }
    });

    lucide.createIcons(); // Render trash icons
  };

  // --- Auth Forms ---
  if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
          e.preventDefault();
          // In a real app, you'd validate credentials here
          alert('Logged in successfully! (Demo)');
          window.location.href = 'index.html';
      });
  }

  if (registerForm) {
      registerForm.addEventListener('submit', (e) => {
          e.preventDefault();
          // In a real app, you'd create the user here
          alert('Account created! Welcome. (Demo)');
          window.location.href = 'index.html';
      });
  }

  // --- Event Delegation for "Add to Cart" ---
  if (flavorGrid) {
    flavorGrid.addEventListener('click', e => {
      const button = e.target.closest('.add-to-cart-btn');
      if (button) {
        const flavorId = parseInt(button.dataset.flavorId, 10);
        addToCart(flavorId, button);
      }
    });
  }


  // --- Initial Page Load ---
  updateCartBadge();
  if (flavorGrid) {
    renderFlavorGrid();
  }
  if (cartContainer) {
    renderCart();
  }
});
