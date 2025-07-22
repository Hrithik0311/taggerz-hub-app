document.addEventListener('DOMContentLoaded', () => {
    const flavors = [
        {
            id: '1',
            name: 'Polar Ice',
            price: 1.99,
            description: 'A chilly blast of intense mint. Each pack contains 2 sticks.',
            image: 'https://placehold.co/600x400',
            aiHint: 'ice glacier',
        },
        {
            id: '2',
            name: 'Sweet Watermelon',
            price: 1.99,
            description: 'The sweet, juicy taste of summer watermelon. Each pack contains 2 sticks.',
            image: 'https://placehold.co/600x400',
            aiHint: 'watermelon slice',
        },
        {
            id: '3',
            name: 'Berry Burst',
            price: 2.49,
            description: 'A delicious fusion of strawberry and raspberry. Each pack contains 2 sticks.',
            image: 'https://placehold.co/600x400',
            aiHint: 'mixed berries',
        },
        {
            id: '4',
            name: 'Classic Bubble',
            price: 1.99,
            description: 'The nostalgic, sweet flavor of classic bubblegum. Each pack contains 2 sticks.',
            image: 'https://placehold.co/600x400',
            aiHint: 'pink bubblegum',
        },
        {
            id: '5',
            name: 'Spearmint',
            price: 2.49,
            description: 'A smooth, refreshing burst of classic spearmint. Each pack contains 2 sticks.',
            image: 'https://placehold.co/600x400',
            aiHint: 'mint leaf',
        },
        {
            id: '6',
            name: 'Peppermint',
            price: 2.49,
            description: 'A powerful and refreshing peppermint experience. Each pack contains 2 sticks.',
            image: 'https://placehold.co/600x400',
            aiHint: 'peppermint candy',
        },
        {
            id: '7',
            name: 'Winterfresh',
            price: 2.49,
            description: 'An icy-cool mint flavor that leaves you feeling fresh. Each pack contains 2 sticks.',
            image: 'https://placehold.co/600x400',
            aiHint: 'winter mountain',
        },
        {
            id: '8',
            name: 'Cinnamon Surge',
            price: 2.49,
            description: 'A bold, spicy wave of cinnamon flavor. Each pack contains 2 sticks.',
            image: 'https://placehold.co/600x400',
            aiHint: 'cinnamon sticks',
        },
    ];

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartBadge();
    }

    function addToCart(flavorId) {
        const existingItem = cart.find(item => item.id === flavorId);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ id: flavorId, quantity: 1 });
        }
        saveCart();
    }

    function updateCartQuantity(flavorId, quantity) {
        const item = cart.find(item => item.id === flavorId);
        if (item) {
            if (quantity > 0) {
                item.quantity = quantity;
            } else {
                removeFromCart(flavorId);
            }
        }
        saveCart();
    }
    
    function removeFromCart(flavorId) {
        cart = cart.filter(item => item.id !== flavorId);
        saveCart();
    }

    function updateCartBadge() {
        const badge = document.getElementById('cart-count-badge');
        if (badge) {
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            badge.textContent = totalItems;
            badge.style.display = totalItems > 0 ? 'flex' : 'none';
        }
    }

    function renderFlavorGrid() {
        const grid = document.getElementById('flavor-grid');
        if (!grid) return;

        grid.innerHTML = flavors.map(flavor => `
            <div class="card">
                <img src="${flavor.image}" alt="${flavor.name}" data-ai-hint="${flavor.aiHint}">
                <div class="card-content">
                    <h3>${flavor.name}</h3>
                    <p>${flavor.description}</p>
                    <span class="price">$${flavor.price.toFixed(2)}</span>
                    <button class="btn add-to-cart-btn" data-id="${flavor.id}">Add to Cart</button>
                </div>
            </div>
        `).join('');

        document.querySelectorAll('.add-to-cart-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const id = e.target.getAttribute('data-id');
                addToCart(id);
                alert(`${flavors.find(f => f.id === id).name} added to cart!`);
            });
        });
    }

    function renderCartPage() {
        const cartContainer = document.getElementById('cart-container');
        if (!cartContainer) return;

        if (cart.length === 0) {
            cartContainer.innerHTML = `
                <div class="empty-cart">
                    <i data-lucide="shopping-cart"></i>
                    <h3>Your cart is empty</h3>
                    <p>Looks like you haven't added anything yet.</p>
                    <a href="/" class="btn">Start Shopping</a>
                </div>
            `;
            lucide.createIcons();
            return;
        }

        const cartItemsHTML = cart.map(item => {
            const flavor = flavors.find(f => f.id === item.id);
            return `
                <div class="cart-item">
                    <div class="cart-item-details">
                        <img src="${flavor.image}" alt="${flavor.name}">
                        <div>
                            <h4>${flavor.name}</h4>
                            <p>$${flavor.price.toFixed(2)} each</p>
                        </div>
                    </div>
                    <div class="cart-item-actions">
                        <input type="number" min="1" value="${item.quantity}" data-id="${flavor.id}" class="quantity-input">
                        <p><strong>$${(flavor.price * item.quantity).toFixed(2)}</strong></p>
                        <button class="remove-btn" data-id="${flavor.id}"><i data-lucide="trash-2"></i></button>
                    </div>
                </div>
            `;
        }).join('');

        const subtotal = cart.reduce((sum, item) => {
            const flavor = flavors.find(f => f.id === item.id);
            return sum + (flavor.price * item.quantity);
        }, 0);
        const taxes = subtotal * 0.08;
        const total = subtotal + taxes;

        cartContainer.innerHTML = `
            ${cartItemsHTML}
            <div class="cart-summary">
                <p>Subtotal: <span>$${subtotal.toFixed(2)}</span></p>
                <p>Taxes (8%): <span>$${taxes.toFixed(2)}</span></p>
                <h3>Total: <span>$${total.toFixed(2)}</span></h3>
                <button class="btn" style="margin-top: 16px;">Proceed to Checkout</button>
            </div>
        `;
        lucide.createIcons();
        
        document.querySelectorAll('.quantity-input').forEach(input => {
            input.addEventListener('change', (e) => {
                const id = e.target.getAttribute('data-id');
                const quantity = parseInt(e.target.value);
                updateCartQuantity(id, quantity);
                renderCartPage(); // Re-render the cart page to update totals
            });
        });

        document.querySelectorAll('.remove-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const id = e.currentTarget.getAttribute('data-id');
                removeFromCart(id);
                renderCartPage();
            });
        });
    }

    // Initial Render
    if (window.location.pathname === '/' || window.location.pathname.endsWith('index.html')) {
        renderFlavorGrid();
    }
    if (window.location.pathname.endsWith('/cart')) {
        renderCartPage();
    }
    updateCartBadge();
});
