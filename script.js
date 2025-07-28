document.addEventListener('DOMContentLoaded', () => {
  const flavors = [
    {
      id: 1,
      name: 'Trident Pineapple Twist',
      description: 'A sweet and tangy burst of tropical pineapple flavor.',
      price: 1.25,
      image: 'https://storage.googleapis.com/stedi-studio-prod/1721861059929-trident-pineapple.jpg',
      aiHint: 'pineapple gum',
    },
    {
      id: 2,
      name: 'Trident Bubblegum',
      description: 'The classic, sweet taste of bubblegum for a fun, fresh chew.',
      price: 1.25,
      image: 'https://i5.walmartimages.com/seo/Trident-Bubble-Gum-Sugar-Free-Gum-12-Packs-168-Pieces_a0186d9a-5e04-4533-87f5-23c510a76046.85f401f703e39064c581a63b063116d4.jpeg',
      aiHint: 'pink bubblegum',
    },
    {
      id: 3,
      name: 'Trident Perfect Peppermint',
      description: 'A cool, crisp peppermint flavor for an invigoratingly fresh breath.',
      price: 1.25,
      image: 'https://storage.googleapis.com/stedi-studio-prod/1721861294073-trident-peppermint.jpg',
      aiHint: 'peppermint leaf',
    },
    {
      id: 4,
      name: 'Trident Cinnamon',
      description: 'A bold, fiery burst of sweet and spicy cinnamon flavor.',
      price: 1.25,
      image: 'https://i5.walmartimages.com/seo/Trident-Cinnamon-Sugar-Free-Gum-with-Xylitol-14-Count_6dc69851-f4ab-45c1-8422-b5311b9fa75c.9bd9422a134370d9a263162381283832.jpeg',
      aiHint: 'cinnamon stick',
    },
    {
      id: 5,
      name: 'Trident Watermelon Twist',
      description: 'The juicy, refreshing flavor of a sweet slice of watermelon.',
      price: 1.25,
      image: 'https://i5.walmartimages.com/seo/Trident-Vibes-Watermelon-Twist-Sugar-Free-Gum-1-Bottle-40-Piece-Pack_3c279d03-34e8-469a-906b-4e12e75e54d8.530396489437151f1659f49377484d4b.jpeg',
      aiHint: 'watermelon fruit',
    },
    {
      id: 6,
      name: 'Trident Spearmint',
      description: 'The classic, refreshing taste of spearmint that cools you down.',
      price: 1.25,
      image: 'https://i5.walmartimages.com/seo/Trident-Spearmint-Sugar-Free-Gum-12-Packs-168-Pieces_8f7b0b8f-5953-41a6-8e2b-f414578c4a17.e9151c89b78335552697d413364f9958.jpeg',
      aiHint: 'green spearmint',
    },
    {
      id: 7,
      name: 'Trident Mint Bliss',
      description: 'A smooth, satisfying mint flavor for a blissful, fresh feeling.',
      price: 1.25,
      image: 'https://storage.googleapis.com/stedi-studio-prod/1721861304538-trident-mint-bliss.jpg',
      aiHint: 'mint spearmint',
    },
    {
      id: 8,
      name: 'Trident Tropical Twist',
      description: 'A sweet splash of mango and pineapple flavor for a tropical getaway.',
      price: 1.25,
      image: 'https://i5.walmartimages.com/seo/Trident-Tropical-Twist-Sugar-Free-Gum-with-Xylitol-12-Packs-of-14-Pieces-168-Total-Pieces_b432e188-1596-4e45-b659-333d404d8051.10269f88ae236168e34a66a7751adca3.jpeg',
      aiHint: 'tropical fruit',
    },
    {
      id: 9,
      name: 'Trident Original Flavor',
      description: 'The timeless, original flavor that started it all.',
      price: 1.25,
      image: 'https://storage.googleapis.com/stedi-studio-prod/1721861313935-trident-original.jpg',
      aiHint: 'blue chewing',
    }
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
