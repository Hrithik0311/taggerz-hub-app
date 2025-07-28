document.addEventListener('DOMContentLoaded', () => {
  const flavors = [
    {
      id: 1,
      name: 'Trident Pineapple Twist',
      image: 'https://storage.googleapis.com/stedi-studio-prod/1721861059929-trident-pineapple.jpg',
      aiHint: 'pineapple gum',
      description: 'A sweet and tangy burst of tropical pineapple flavor.',
      options: [
        { sticks: 1, price: 0.20 },
        { sticks: 3, price: 0.50 },
        { sticks: 7, price: 1.00 },
        { sticks: 14, price: 1.80 },
      ]
    },
    {
      id: 2,
      name: 'Trident Bubblegum',
      image: 'https://i5.walmartimages.com/seo/Trident-Bubble-Gum-Sugar-Free-Gum-12-Packs-168-Pieces_a0186d9a-5e04-4533-87f5-23c510a76046.85f401f703e39064c581a63b063116d4.jpeg',
      aiHint: 'pink bubblegum',
      description: 'The classic, sweet taste of bubblegum for a fun, fresh chew.',
      options: [
        { sticks: 1, price: 0.20 },
        { sticks: 3, price: 0.50 },
        { sticks: 7, price: 1.00 },
        { sticks: 14, price: 1.80 },
      ]
    },
    {
      id: 3,
      name: 'Trident Perfect Peppermint',
      image: 'https://storage.googleapis.com/stedi-studio-prod/1721861294073-trident-peppermint.jpg',
      aiHint: 'peppermint leaf',
      description: 'A cool, crisp peppermint flavor for an invigoratingly fresh breath.',
      options: [
        { sticks: 1, price: 0.20 },
        { sticks: 3, price: 0.50 },
        { sticks: 7, price: 1.00 },
        { sticks: 14, price: 1.80 },
      ]
    },
    {
      id: 4,
      name: 'Trident Cinnamon',
      image: 'https://i5.walmartimages.com/seo/Trident-Cinnamon-Sugar-Free-Gum-with-Xylitol-14-Count_6dc69851-f4ab-45c1-8422-b5311b9fa75c.9bd9422a134370d9a263162381283832.jpeg',
      aiHint: 'cinnamon stick',
      description: 'A bold, fiery burst of sweet and spicy cinnamon flavor.',
       options: [
        { sticks: 1, price: 0.20 },
        { sticks: 3, price: 0.50 },
        { sticks: 7, price: 1.00 },
        { sticks: 14, price: 1.80 },
      ]
    },
    {
      id: 5,
      name: 'Trident Watermelon Twist',
      image: 'https://i5.walmartimages.com/seo/Trident-Vibes-Watermelon-Twist-Sugar-Free-Gum-1-Bottle-40-Piece-Pack_3c279d03-34e8-469a-906b-4e12e75e54d8.530396489437151f1659f49377484d4b.jpeg',
      aiHint: 'watermelon fruit',
      description: 'The juicy, refreshing flavor of a sweet slice of watermelon.',
      options: [
        { sticks: 1, price: 0.20 },
        { sticks: 3, price: 0.50 },
        { sticks: 7, price: 1.00 },
        { sticks: 14, price: 1.80 },
      ]
    },
    {
      id: 6,
      name: 'Trident Spearmint',
      image: 'https://i5.walmartimages.com/seo/Trident-Spearmint-Sugar-Free-Gum-12-Packs-168-Pieces_8f7b0b8f-5953-41a6-8e2b-f414578c4a17.e9151c89b78335552697d413364f9958.jpeg',
      aiHint: 'green spearmint',
      description: 'The classic, refreshing taste of spearmint that cools you down.',
      options: [
        { sticks: 1, price: 0.20 },
        { sticks: 3, price: 0.50 },
        { sticks: 7, price: 1.00 },
        { sticks: 14, price: 1.80 },
      ]
    },
    {
      id: 7,
      name: 'Trident Mint Bliss',
      image: 'https://storage.googleapis.com/stedi-studio-prod/1721861304538-trident-mint-bliss.jpg',
      aiHint: 'mint spearmint',
      description: 'A smooth, satisfying mint flavor for a blissful, fresh feeling.',
      options: [
        { sticks: 1, price: 0.20 },
        { sticks: 3, price: 0.50 },
        { sticks: 7, price: 1.00 },
        { sticks: 14, price: 1.80 },
      ]
    },
    {
      id: 8,
      name: 'Trident Tropical Twist',
      image: 'https://i5.walmartimages.com/seo/Trident-Tropical-Twist-Sugar-Free-Gum-with-Xylitol-12-Packs-of-14-Pieces-168-Total-Pieces_b432e188-1596-4e45-b659-333d404d8051.10269f88ae236168e34a66a7751adca3.jpeg',
      aiHint: 'tropical fruit',
      description: 'A sweet splash of mango and pineapple flavor for a tropical getaway.',
      options: [
        { sticks: 1, price: 0.20 },
        { sticks: 3, price: 0.50 },
        { sticks: 7, price: 1.00 },
        { sticks: 14, price: 1.80 },
      ]
    },
    {
      id: 9,
      name: 'Trident Original Flavor',
      image: 'https://storage.googleapis.com/stedi-studio-prod/1721861313935-trident-original.jpg',
      aiHint: 'blue chewing',
      description: 'The timeless, original flavor that started it all.',
      options: [
        { sticks: 1, price: 0.20 },
        { sticks: 3, price: 0.50 },
        { sticks: 7, price: 1.00 },
        { sticks: 14, price: 1.80 },
      ]
    }
  ];

  const flavorGrid = document.getElementById('flavor-grid');
  const cartContainer = document.getElementById('cart-container');
  const cartCountBadge = document.getElementById('cart-count-badge');
  const yearSpan = document.getElementById('year');
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const productDetailContainer = document.getElementById('product-detail');

  // Set current year in footer
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // --- Cart Logic ---
  // The cart now stores items with a unique ID combining flavorId and sticks count
  // e.g., cart item: { id: "1-14", name: "Trident Pineapple Twist", sticks: 14, price: 1.80, quantity: 1, image: '...' }
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

  const addToCart = (flavorId, sticks, price, buttonElement) => {
    const flavor = flavors.find(f => f.id === flavorId);
    if (!flavor) return;

    const cartItemId = `${flavorId}-${sticks}`;
    const existingItem = cart.find(item => item.id === cartItemId);
    
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ 
        id: cartItemId,
        flavorId: flavor.id,
        name: flavor.name,
        sticks: sticks,
        price: price,
        quantity: 1,
        image: flavor.image
      });
    }
    saveCart();
    
    // Give user feedback without an alert
    if (buttonElement) {
        buttonElement.textContent = 'Added!';
        buttonElement.classList.add('added');
        setTimeout(() => {
            buttonElement.innerHTML = `<i data-lucide="shopping-cart"></i> Add to Cart`;
            buttonElement.classList.remove('added');
            lucide.createIcons();
        }, 1500);
    }
  };
  
  const updateQuantity = (cartItemId, newQuantity) => {
    const item = cart.find(i => i.id === cartItemId);
    if (item) {
        if (newQuantity > 0) {
            item.quantity = newQuantity;
        } else {
            // If quantity is 0 or less, remove it
            cart = cart.filter(i => i.id !== cartItemId);
        }
    }
    saveCart();
    renderCart();
  };
  
  const removeFromCart = (cartItemId) => {
    cart = cart.filter(item => item.id !== cartItemId);
    saveCart();
    renderCart();
  };


  // --- Page Rendering ---
  const renderFlavorGrid = () => {
    if (!flavorGrid) return;
    flavorGrid.innerHTML = '';
    flavors.forEach((flavor) => {
      const cardLink = document.createElement('a');
      cardLink.href = `product.html?id=${flavor.id}`;
      cardLink.className = 'card-link';
      // Use the price of the first option for display on the grid
      const displayPrice = flavor.options[0].price;
      cardLink.innerHTML = `
        <div class="card glass">
          <img src="${flavor.image}" alt="${flavor.name}" data-ai-hint="${flavor.aiHint}" />
          <div class="card-content">
            <h3>${flavor.name}</h3>
            <p>${flavor.description}</p>
            <div class="price-view">
                <span class="price-tag">From $${displayPrice.toFixed(2)}</span>
                <span class="view-details">View Options <i data-lucide="arrow-right"></i></span>
            </div>
          </div>
        </div>
      `;
      flavorGrid.appendChild(cardLink);
    });
    lucide.createIcons();
  };
  
  const renderProductDetail = () => {
    if (!productDetailContainer) return;

    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'), 10);
    const flavor = flavors.find(f => f.id === productId);

    if (!flavor) {
        productDetailContainer.innerHTML = '<p>Product not found.</p>';
        return;
    }
    
    // Default to the largest pack, which is the last in the options array
    let selectedOption = flavor.options[flavor.options.length - 1];

    const updateDisplay = () => {
        const priceDisplay = document.getElementById('price-display');
        if (priceDisplay) {
            priceDisplay.textContent = `$${selectedOption.price.toFixed(2)}`;
        }
    };
    
    productDetailContainer.innerHTML = `
        <div class="product-image">
            <img src="${flavor.image}" alt="${flavor.name}" class="glass">
        </div>
        <div class="product-info">
            <h2 class="headline">${flavor.name}</h2>
            <p class="product-description">${flavor.description}</p>
            
            <div class="variant-selector">
                <h4>Select Size:</h4>
                <div class="variant-options">
                    ${flavor.options.map((opt) => `
                        <button class="btn-variant ${opt.sticks === selectedOption.sticks ? 'selected' : ''}" data-sticks="${opt.sticks}" data-price="${opt.price}">
                            ${opt.sticks} stick${opt.sticks > 1 ? 's' : ''}
                        </button>
                    `).join('')}
                </div>
            </div>

            <div class="price-large" id="price-display">$${selectedOption.price.toFixed(2)}</div>
            <button class="btn add-to-cart-btn" id="add-to-cart-btn">
                <i data-lucide="shopping-cart"></i> Add to Cart
            </button>
        </div>
    `;
    lucide.createIcons();
    
    // Add event listeners AFTER innerHTML is set
    const addToCartButton = document.getElementById('add-to-cart-btn');
    if (addToCartButton) {
        addToCartButton.addEventListener('click', () => {
            addToCart(flavor.id, selectedOption.sticks, selectedOption.price, addToCartButton);
        });
    }
    
    const variantButtons = productDetailContainer.querySelectorAll('.btn-variant');
    variantButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Visually deselect all buttons
            variantButtons.forEach(btn => btn.classList.remove('selected'));
            // Visually select the clicked button
            button.classList.add('selected');
            
            // Update the selected option state
            selectedOption = {
                sticks: parseInt(button.dataset.sticks, 10),
                price: parseFloat(button.dataset.price)
            };
            
            // Update the price display
            updateDisplay();
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
                <a href="index.html" class="btn" style="max-width: 200px; margin: 20px auto 0;">Shop Flavors</a>
            </div>
        `;
        lucide.createIcons();
        return;
    }
    
    cartContainer.innerHTML = '';
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
                    <p class="item-variant">${item.sticks} sticks</p>
                    <p class="price-small">$${item.price.toFixed(2)} each</p>
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

    cartContainer.addEventListener('change', e => {
        if (e.target.classList.contains('quantity-input')) {
            const id = e.target.dataset.id;
            const quantity = parseInt(e.target.value, 10);
            updateQuantity(id, quantity);
        }
    });
    
    cartContainer.addEventListener('click', e => {
        const removeButton = e.target.closest('.btn-remove');
        if (removeButton) {
            const id = removeButton.dataset.id;
            removeFromCart(id);
        }
    });

    lucide.createIcons();
  };

  // --- Auth Forms ---
  if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
          e.preventDefault();
          alert('Logged in successfully! (Demo)');
          window.location.href = 'index.html';
      });
  }

  if (registerForm) {
      registerForm.addEventListener('submit', (e) => {
          e.preventDefault();
          alert('Account created! Welcome. (Demo)');
          window.location.href = 'index.html';
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
  if (productDetailContainer) {
    renderProductDetail();
  }
});

    